import "../App.css";

const Card = ({ name, price, desc, des }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title">
            ${price}
            <small className="text-muted"> / mo</small>
          </h1>
          <ul>
            {desc.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <button type="button">{des}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
