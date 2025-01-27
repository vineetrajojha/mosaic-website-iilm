import React from "react";

const Card = ({ index, backgroundImage }) => {
  return (
    <div
      className={`event event-${index + 1}`}
      key={index}
      style={{ backgroundImage: backgroundImage }}
    > 
    </div>
  );
};

export default Card;
