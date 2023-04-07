import "../App.css";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
  const [userNumber, setuserNumber] = useState({
    Free: 10,
    Pro: 20,
    Enterprise: 30,
  });

  const cardList = [
    {
      name: "Free",
      price: 0,
      desc: [userNumber["Free"], 2, "Email support"],
      btnDesc: "Sign up for free",
    },
    {
      name: "Pro",
      price: 15,
      desc: [userNumber["Pro"], 10, "Priority email"],
      btnDesc: "Get started",
    },
    {
      name: "Enterprise",
      price: 30,
      desc: [userNumber["Enterprise"], 15, "Phone and email"],
      btnDesc: "Contact us",
    },
  ];

  const handleuserNumber = (e) => {
    const find = e.target.name;
    setuserNumber((prev) => ({
      ...prev,
      [e.target.name]: userNumber[find] + 1,
    }));
  };

  /*  price로 이런식으로 해보기
      익명함수 주지 않고 nested func을 이용해서
      onClick: onClick('Free')
      not onClick: () => onClick('Free')
    const onClick = (type) => {
    if (type==='Free'){
      setuserNumber((prev) => ({...prev, free: prev.free + 1}))
      return
    }
    if (type==='Pro'){
      setuserNumber((prev) => ({...prev, free: prev.Pro + 1}))
      return
    }
    if (type==='Enterprise'){
      setuserNumber((prev) => ({...prev, }))
    }
  } */

  return (
    <>
      <div className="main">
        <h1 className="h1">Pricing</h1>
        <p className="p">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="card_deck">
        {cardList.map((card, index) => (
          <Card
            key={`card_item_${index}`}
            {...card}
            handleuserNumber={handleuserNumber}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
