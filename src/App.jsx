import React from "react";
import RandomColor from "./components/random-color/RandomColor";
import FreeApi from "./components/free_api/FreeApi";
import Accordion from "./components/Accordion/MultipleSelectionAccordion";
import StarRating from "./components/star-rating/StarRating";
import "./App.css";

function App() {
  return (
    <div className="">
      <h1>My App</h1>
      <Accordion />
      <FreeApi />
      <RandomColor />
      <StarRating numberOfStars={8} />
    </div>
  );
}

export default App;
