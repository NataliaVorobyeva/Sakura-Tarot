import React, { useState, useEffect } from "react";
import "../styles/main.css";

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
      .then((resp) => resp.json())
      .then((data) =>setCards(data));
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
