import "../App.css";

const Card = ({ name, price, desc, btnDesc, handleUserNum }) => {
  const [userNum, storage, support] = desc;

  return (
    <>
      <div className="card">
        <div className="card_header">
          <h4 className="h4">{name}</h4>
        </div>
        <div className="card_body">
          <h1 className="card_title">
            ${price}
            <small className="text_muted"> / mo</small>
          </h1>
          <ul className="ul">
            <li className="li">{userNum} users included</li>
            <li className="li">{storage} GB of storage</li>
            <li className="li">{support} support</li>
            <li className="li">Help center access</li>
          </ul>
          <button
            className="btn"
            name={name}
            onClick={handleUserNum}
            type="button"
          >
            {btnDesc}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
