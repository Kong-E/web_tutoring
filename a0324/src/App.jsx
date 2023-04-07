import Container from "./components/Container";

function App() {
  return (
    <div>
      <header className="header">
        <h5 className="h5">Company name</h5>
        {/* prettier-ignore */}
        <nav className="nav">
          <a className="a" href="#">Features</a>
          <a className="a" href="#">Enterprise</a>
          <a className="a" href="#">Support</a>
          <a className="a" href="#">Pricing</a>
        </nav>
        {/* prettier-ignore */}
        <a className="a" href="#">Sign up</a>
      </header>
      <Container />
    </div>
  );
}

export default App;
