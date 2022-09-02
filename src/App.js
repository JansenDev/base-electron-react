import logo from "./logo.svg";
import "./App.css";

import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar className="bp4-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Link className="bp4-button bp4-minimal bp4-icon-home" to="/">
            Home
          </Link>

          <Link
            className="bp4-button bp4-minimal bp4-icon-document"
            to="/files"
          >
            Files
          </Link>
        </Navbar.Group>
      </Navbar>
      <Navegate />
    </div>
  );
}

function Index() {
  return (
    <h2>
      Home
      <button>
        <Link to="/files"> to Files</Link>
      </button>
    </h2>
  );
}

function Files() {
  return (
    <h2>
      Files
      <button>
        <Link to="/"> to Home</Link>
      </button>
    </h2>
  );
}

function Navegate() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/files/" element={<Files />} />
      </Routes>
    </header>
  );
}

export default App;
