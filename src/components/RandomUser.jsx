import React from "react";
import "./randomstyle.scss";

const RandomUser = ({ firstname, lastname, city, age, gender, state }) => {
  return (
    <div className="random__wrapper">
      <p>
        <span>{firstname}</span> <span>{lastname}</span>
      </p>
      <p>
        <span>{gender}</span>
      </p>
      <p>
        {" "}
        <span> {age}</span>
      </p>
      <p>
        {" "}
        <span>{city}</span>, <span>{state}</span>
      </p>
    </div>
  );
};

export default RandomUser;
