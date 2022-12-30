import React, { useState, useEffect } from "react";
import "../styles/main.css";
import Card from "./Card";

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
      .then((resp) => resp.json())
      .then((data) =>setCards(data));
  }, []);
  const[clowcard, setClowcard] =useState();
  /*function handleClick(){
  setCards(cards => !cards);
  }
  let cardsReverseCheck = cards ? ' clowCard': null;*/
   
  

  return (
    <>
      <div className="container">
        {cards !== []
          ? cards.map((card, index) => {
              if (card.cardsReverse.clowReverse) {
                return (
                  <button key={index}>
                    <Card key={index} id={card.id} frontface={card.clowCard} backface={card.cardsReverse.clowReverse} meaning={card.meaning} />
                  </button>
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




  