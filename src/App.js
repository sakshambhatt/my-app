import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(data);
        setName(data.name);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>- {name}</p>
      </header>
    </div>
  );
}

export default App;
