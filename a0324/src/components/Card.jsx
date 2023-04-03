import "../App.css";

const Card = ({ name, price, desc, btnDesc }) => {
  return (
    <>
      <div className="card">
        <div className="card_header">
          <h4>{name}</h4>
        </div>
        <div className="card_body">
          <h1 className="card_title">
            ${price}
            <small className="text_muted"> / mo</small>
          </h1>
          <ul>
            <li>{desc[0]} users included</li>
            <li>{desc[1]} GB of storage</li>
            <li>{desc[2]} support</li>
            <li>Help center access</li>
          </ul>
          <button type="button">{btnDesc}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
