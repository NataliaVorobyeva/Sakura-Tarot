import React, { useState, useEffect } from "react";
import GetCards from "../services/services";
import "../styles/main.css";

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const result = GetCards();
    setCards(result);
  }, []);

  return (
    <>
      <div className="container">
        {cards !== []
          ? cards.map((card, index) => {
              if (card.cardsReverse.clowReverse) {
                return (
                  <div key={index}>
                    <img
                      src={card.cardsReverse.clowReverse}
                      alt={card.spanishName}
                    />
                  </div>
                );
              }
              return <div className="displayNone"></div>;
            })
          : "No hay cards"}
      </div>
    </>
  );
}

export default Main;
