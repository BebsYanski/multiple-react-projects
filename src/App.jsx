import React from "react";
import RandomColor from "./components/random-color/RandomColor";
import FreeApi from "./components/free_api/FreeApi";
import Accordion from "./components/Accordion/MultipleSelectionAccordion";
import "./App.css";

function App() {
  return (
    <div className="">
      <h1>My App</h1>
      {/* <Accordion /> */}
      {/* <FreeApi /> */}
      <RandomColor />
    </div>
  );
}

export default App;
