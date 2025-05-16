import React, { useState } from "react";
import { accordionData } from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  }

  console.log(selected, multiple);

  return (
    <section className="section wrapper">
      <button
        onClick={function (e) {
          e.target.classList.toggle("active");
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi selection{" "}
      </button>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data) => (
            <div key={data.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(data.id)
                    : () => handleSingleSelection(data.id)
                }
                className="title"
              >
                <h3>{data.question}</h3>
                <span>+</span>
              </div>
              {selected === data.id || multiple.indexOf(data.id) !== -1 ? (
                <div className="content">{data.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
