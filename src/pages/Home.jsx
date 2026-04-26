import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function Home() {
  return (
     <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Software Engineer Challenge</h1>
          <p>
          Notification Test
                    It is required to create a <code>system capable of receiving messages</code>, which will have a
                    category and the body of the message. These messages will need to be <code>forwarded to
                    the system's users</code>, who will already be pre-populated. In addition to being
                    subscribed to message categories, these users will have speciﬁed the channels
                    through which they would like to be notiﬁed, such as <code>SMS, Email or Push
                    Notiﬁcation</code>.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="form">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#x-icon"></use>
          </svg>
          <h2>Submission form: </h2>
          <p>A simple form to send the message that contains 2 ﬁelds:</p>
          <ul>
            <li>
                Category. List of available categories.
            </li>
            <li>
                Message. Text area, conﬁrm that the message is not empty.
            </li>
          </ul>
          <div id="center">
              <ul>
                <li>
                    <a href="/form">
                      <svg
                        className="button-icon"
                        role="presentation"
                        aria-hidden="true">
                      <use href="/icons.svg#documentation-icon"></use>
                      </svg>
                      Send Message
                    </a>
                </li>
              </ul>
          </div>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
export default Home;