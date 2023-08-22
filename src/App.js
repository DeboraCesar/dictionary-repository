import logo from "./name.png";
import background from "./background.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://main--spectacular-kleicha-8e0454.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Portfolio"
        >
          <img
            src={logo}
            className="logo-debora img-fluid"
            alt="Logo Debora Cesar"
          />
        </a>
      </header>
      <div
        className="Dictionary-body"
        style={{ backgroundImage: `url(${background})` }}
      >
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            Designed and coded by{" "}
            <a
              href="https://www.linkedin.com/in/deboracesar/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              Debora Cesar
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/DeboraCesar/dictionary-repository"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;