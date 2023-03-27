import "../App.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div>
            <img
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="text-muted">© 2017-2018</small>
          </div>
          <FooterElemnet
            title="Features"
            desc={[
              "Cool stuff",
              "Random feature",
              "Team feature",
              "Stuff for developers",
              "Another one",
              "Last time",
            ]}
          />
          <FooterElemnet
            title="Resources"
            desc={[
              "Resource",
              "Resource name",
              "Another resource",
              "Final resource",
            ]}
          />
          <FooterElemnet
            title="About"
            desc={["Team", "Locations", "Privacy", "Terms"]}
          />
        </div>
      </footer>
    </>
  );
};

const FooterElemnet = ({ title, desc }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {desc.map((des) => (
          <li>
            <a href="#">{des}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
