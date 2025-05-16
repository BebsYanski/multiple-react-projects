import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const FreeApi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=20")
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <section className="section">
      <h1>Free Api</h1>
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="dbz">
            <img src={item.image} alt="" />
            <div className="info">
              <p>
                <span>Name: </span>
                {item.name}
              </p>
              <p>
                <span>Affiliation:</span> {item.affiliation}
              </p>
              <p>
                <span>Power level:</span> {item.ki}
              </p>
            </div>
            {/* <div className="desc">{item.description.slice(0, 50)}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreeApi;
