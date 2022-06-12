import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body> 
        <Body />
      </body>
      < footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
