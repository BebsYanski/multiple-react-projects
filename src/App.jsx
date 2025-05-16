import React from "react";
import FreeApi from "./components/free_api/FreeApi";
import Accordion from "./components/Accordion/MultipleSelectionAccordion";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>My App</h1>
      <Accordion />
      <FreeApi />
    </div>
  );
}

export default App;
