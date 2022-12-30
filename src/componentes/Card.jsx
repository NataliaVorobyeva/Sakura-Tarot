import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import "../styles/card.css"


const Card =({frontface,backface,id,meaning}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick =() =>{
        setIsFlipped(!isFlipped)
    }
  return (
    <div> 
        <ReactCardFlip isFlipped ={isFlipped}>
            <img src={backface} alt ="card reverse" id={id} meaning={meaning} onClick={() => handleClick()}/>
            <img className='frontfaceimg' src={frontface} alt="clow card"/>
        </ReactCardFlip>
    </div>
  )
}

export default Card