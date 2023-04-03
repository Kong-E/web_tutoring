import "../App.css";

const Footer = () => {
  const footerList = [
    {
      title: "Features",
      desc: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Stuff for developers",
        "Another one",
        "Last time",
      ],
    },
    {
      title: "Resources",
      desc: ["Resource", "Resource name", "Another resource", "Final resource"],
    },
    {
      title: "About",
      desc: ["Team", "Locations", "Privacy", "Terms"],
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="box">
            <img
              className="img"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="text_muted">© 2017-2018</small>
          </div>
          {footerList.map((li, index) => (
            <div key={`${li}_${index}`} className="box">
              <h5 className="h5">{li.title}</h5>
              <ul className="ul">
                {li.desc.map((des, index) => (
                  <li key={`${des}_${index}`} className="li">
                    <a className="a" href="#">
                      {des}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
