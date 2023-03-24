import "../App.css";
import Card from "./Card";

const Main = () => {
  const cards = [
    {
      name: "Free",
      price: 0,
      desc: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access",
      ],
      des: "Sign up for free",
    },
    {
      name: "Pro",
      price: 15,
      desc: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access",
      ],
      des: "Get started",
    },
    {
      name: "Enterprise",
      price: 29,
      desc: [
        "30 users included",
        "15 GB of storage",
        "Phone and email support",
        "Help center access",
      ],
      des: "Contact us",
    },
  ];
  return (
    <>
      <div className="main">
        <h1>Pricing</h1>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="card-deck">
        {cards.map((card, index) => (
          <Card
            key={`card_${index}`}
            name={card.name}
            price={card.price}
            desc={card.desc}
            des={card.des}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
