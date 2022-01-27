import logo from './logo.svg';
import { Navbar ,NavbarBrand } from 'reactstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <h1>Hi First react app</h1>
          <NavbarBrand href="/">React App Confusion</NavbarBrand>
        </div>

      </Navbar>
    </div>
  );
}

export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You can Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */