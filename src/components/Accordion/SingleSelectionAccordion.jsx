import React from "react";
import { accordionData } from "./data";
import { useState } from "react";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div key={data.id} className="item">
              <div
                onClick={() => handleSingleSelection(data.id)}
                className="title"
              >
                <h3>{data.question}</h3>
                <span>+</span>
              </div>
              {selected === data.id && (
                <div className="content">{data.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
