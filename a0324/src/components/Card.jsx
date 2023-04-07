import "../App.css";

const Card = ({ name, price, desc, btnDesc, handleUserNumber }) => {
  const [userNumber, storage, support] = desc;

  const dataList = [
    `${userNumber} users included`,
    `${storage} GB of storage`,
    `${support} support`,
    "Help center access",
  ];

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
            {dataList.map((data, index) => (
              <li key={`data_item_${index}`}>{data}</li>
            ))}
          </ul>
          <button
            className="button"
            name={name}
            onClick={handleUserNumber}
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
