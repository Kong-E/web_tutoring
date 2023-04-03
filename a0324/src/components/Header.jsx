import "../App.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h5 className="h5">Company name</h5>
        <nav className="nav">
          <a className="a" href="#">
            Features
          </a>
          <a className="a" href="#">
            Enterprise
          </a>
          <a className="a" href="#">
            Support
          </a>
          <a className="a" href="#">
            Pricing
          </a>
        </nav>
        <a className="a" href="#">
          Sign up
        </a>
      </header>
    </>
  );
};

export default Header;
