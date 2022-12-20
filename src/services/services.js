const GetCards = () => {
    fetch("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
      .then((resp) => resp.json())
      .then((data) => data);
  };
  
  export default GetCards;