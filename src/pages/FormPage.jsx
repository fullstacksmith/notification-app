import { useState } from "react";
import axios from "axios";

const CATEGORIES = [
  { id: 1, name: "Sports" },
  { id: 2, name: "Finance" },
  { id: 3, name: "Movies" },
];

function FormPage() {
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState(() => crypto.randomUUID());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Message cannot be empty.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await axios.post("/api/messages", {
        categoryId,
        body: message,
        idempotencyKey,
      });

      setSuccess(true);
      setMessage("");
      setCategoryId(CATEGORIES[0].id);
      setIdempotencyKey(crypto.randomUUID());
    } catch (err) {
      setError(err.response?.data?.message ?? "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Notification</h1>

      {success && (
        <p style={{ color: "green" }}>Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <br />
          <select
            id="category"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(Number(e.target.value));
              setSuccess(false);
            }}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            rows={5}
            cols={40}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setError("");
              setSuccess(false);
            }}
            placeholder="Write your message here..."
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default FormPage;
