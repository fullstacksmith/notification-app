import { useEffect, useState } from "react";
import axios from "axios";

const PAGE_SIZE = 10;

const CATEGORIES = ["SPORTS", "FINANCE", "MOVIES"];
const CHANNELS = ["EMAIL", "SMS", "PUSH_NOTIFICATION"];

function TablePage() {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({ category: "", channel: "" });

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      setError("");
      try {
        const params = { page, size: PAGE_SIZE };
        if (appliedFilters.category) params.category = appliedFilters.category;
        if (appliedFilters.channel) params.channel = appliedFilters.channel;

        const { data } = await axios.get("/api/logs", { params });
        setLogs(data.content);
        setTotalPages(data.totalPages);
        setTotalElements(data.totalElements);
      } catch (err) {
        setError(err.response?.data?.message ?? "Failed to load logs.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [page, appliedFilters]);

  const handleSearch = () => {
    setPage(0);
    setAppliedFilters({ category, channel });
  };

  const formatDate = (iso) => new Date(iso).toLocaleString();

  return (
    <div>
      <h1>Notification Logs</h1>

      <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
        <div>
          <label htmlFor="filter-category">Category: </label>
          <select id="filter-category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filter-channel">Channel: </label>
          <select id="filter-channel" value={channel} onChange={(e) => setChannel(e.target.value)}>
            <option value="">All</option>
            {CHANNELS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <button onClick={handleSearch} disabled={loading}>Search</button>
        </div>
      </div>

      <p>Total records: {totalElements}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Category</th>
              <th>Channel</th>
              <th>Message</th>
              <th>Status</th>
              <th>Error</th>
              <th>Sent At</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.userName}</td>
                <td>{log.categoryName}</td>
                <td>{log.channelName}</td>
                <td>{log.messageBody}</td>
                <td>{log.status}</td>
                <td>{log.errorDetail ?? "-"}</td>
                <td>{formatDate(log.sentAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: "12px", display: "flex", gap: "12px", alignItems: "center" }}>
        <button onClick={() => setPage((p) => p - 1)} disabled={page === 0 || loading}>
          Previous
        </button>
        <span>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages - 1 || loading}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TablePage;
