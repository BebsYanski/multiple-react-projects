import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ numberOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }

  return (
    <div className="star-rating flex g-4 section container justify-center items-center">
      {/* <h1>Star Rating</h1> */}
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) && "text-amber-300"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
