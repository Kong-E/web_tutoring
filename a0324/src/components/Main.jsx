import "../App.css";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
  const [userNum, setUserNum] = useState({ Free: 10, Pro: 20, Enterprise: 30 });

  const cardList = [
    {
      name: "Free",
      price: 0,
      desc: [userNum["Free"], 2, "Email support"],
      btnDesc: "Sign up for free",
    },
    {
      name: "Pro",
      price: 15,
      desc: [userNum["Pro"], 10, "Priority email"],
      btnDesc: "Get started",
    },
    {
      name: "Enterprise",
      price: 30,
      desc: [userNum["Enterprise"], 15, "Phone and email"],
      btnDesc: "Contact us",
    },
  ];

  const handleUserNum = (e) => {
    const find = e.target.name;
    setUserNum({ ...userNum, [e.target.name]: userNum[find] + 1 });
  };

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
      <div className="card_deck">
        {cardList.map((card, index) => (
          <Card
            key={`${card.name}_${index}`}
            {...card}
            handleUserNum={handleUserNum}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
