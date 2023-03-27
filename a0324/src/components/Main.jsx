import "../App.css";
import Card from "./Card";

const Main = () => {
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
        <Card
          name="Free"
          price="0"
          desc={[
            "10 users included",
            "2 GB of storage",
            "Email support",
            "Help center access",
          ]}
          des="Sign up for free"
        />
        <Card
          name="Pro"
          price="15"
          desc={[
            "20 users included",
            "10 GB of storage",
            "Priority email support",
            "Help center access",
          ]}
          des="Get started"
        />
        <Card
          name="Enterprise"
          price="29"
          desc={[
            "30 users included",
            "15 GB of storage",
            "Phone and email support",
            "Help center access",
          ]}
          des="Contact us"
        />
      </div>
    </>
  );
};

export default Main;
