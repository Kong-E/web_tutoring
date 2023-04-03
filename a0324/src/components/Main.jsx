import "../App.css";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
  const cardList = [
    {
      name: "Free",
      price: 0,
      desc: [10, 2, "Email support"],
      btnDesc: "Sign up for free",
    },
    {
      name: "Pro",
      price: 15,
      desc: [20, 10, "Priority email"],
      btnDesc: "Get started",
    },
    {
      name: "Enterprise",
      price: 30,
      desc: [30, 15, "Phone and email"],
      btnDesc: "Contact us",
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
      <div className="card_deck">
        {cardList.map((card, index) => (
          <Card key={`${card.name}_${index}`} {...card} />
        ))}
      </div>
    </>
  );
};

export default Main;
