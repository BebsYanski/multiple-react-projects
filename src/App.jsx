import React from "react";
import RandomColor from "./components/random-color/RandomColor";
import FreeApi from "./components/free_api/FreeApi";
import Accordion from "./components/Accordion/MultipleSelectionAccordion";
import StarRating from "./components/star-rating/StarRating";
import "./App.css";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="">
      <h1>My App</h1>
      <h2 className="text-center font-bold text-5xl">My Accordion</h2>
      <Accordion />
      <h2 className="text-center font-bold text-5xl">Free Api tuts</h2>
      <FreeApi />
      <h2 className="text-center font-bold text-5xl">
        Random Color generation
      </h2>
      <RandomColor />
      <h2 className="text-center font-bold text-5xl">Star rating</h2>
      <StarRating numberOfStars={8} />
      <h2 className="text-center font-bold text-5xl">Image Slider</h2>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={1}
      />
      <LoadMoreData />
    </div>
  );
}

export default App;
