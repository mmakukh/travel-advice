import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body> 
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
      </body>
      < footer>
      </footer>
    </div>
  );
}

export default App;
