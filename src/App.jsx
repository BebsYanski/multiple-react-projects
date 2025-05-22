import React from "react";
import RandomColor from "./components/random-color/RandomColor";
import FreeApi from "./components/free_api/FreeApi";
import Accordion from "./components/Accordion/MultipleSelectionAccordion";
import StarRating from "./components/star-rating/StarRating";
import "./App.css";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="">
      <h1>My App</h1>
      <Accordion />
      <FreeApi />
      <RandomColor />
      <StarRating numberOfStars={8} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={1}
      />
    </div>
  );
}

export default App;
