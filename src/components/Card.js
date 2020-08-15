import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc dib br3 pa1 ma2 shadow-5 grow bg-light-green ">
      <img alt="roboimage" src={`https://robohash.org/${id}?100x100`} />

      <div>
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
    </div>
  );
};

export default Card;
