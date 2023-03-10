import React from "react";
import "./Card.css"

const Card = ({ nameUser, lastNameUser }) => {
  return (
    <div className="carta">
      <h2>Hola! tu nombre es: {nameUser} </h2>
      <h2>y tu apellido es: {lastNameUser} </h2>
    </div>
  );
};

export default Card;