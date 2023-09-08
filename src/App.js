import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <div className="Dictionary-body">
        <main>
          <Dictionary defaultKeyword="office" />
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