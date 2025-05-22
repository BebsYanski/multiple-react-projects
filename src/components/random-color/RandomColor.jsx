import React from "react";
import { useState } from "react";
import ColorButton from "./ColorButton";
import { useEffect } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    handleRandomColorGeneration();
  }, [typeOfColor]);

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }

  function generateRgbColor() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    let rgbColor = `rgb(${r},${g},${b})`;

    return rgbColor;
  }

  function generateHslColor() {
    let h = randomColorUtility(360);
    let s = randomColorUtility(101);
    let l = randomColorUtility(101);
    let hslColor = `hsl(${h},${s}%,${l}%)`;

    return hslColor;
  }

  function handleRandomColorGeneration() {
    if (typeOfColor === "hex") {
      let hexColor = generateHexColor();
      setColor(hexColor);
    } else if (typeOfColor === "rgb") {
      setColor(generateRgbColor());
    } else {
      setColor(generateHslColor());
    }
  }
  return (
    <section
      className="section text-white"
      style={{
        backgroundColor: color,
        width: "100vw",
        padding: "0px",
        margin: "0px",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div className="btn-group flex flex-wrap justify-center space-x-2 sm:space-x-4">
        <ColorButton
          label={"Create Hex Color"}
          onClick={() => setTypeOfColor("hex")}
        />
        <ColorButton
          label={"Create RGB Color"}
          onClick={() => setTypeOfColor("rgb")}
        />
        <ColorButton
          label={"Create HSL Color"}
          onClick={() => setTypeOfColor("hsl")}
        />
        <ColorButton
          label={"Generate random Color"}
          onClick={handleRandomColorGeneration}
        />
      </div>
      <div className="color-info flex items-center lg:justify-center text-2xl md:text-4xl text-white gap-4 h-[100%] flex-col">
        <h2>{typeOfColor.toUpperCase()} Color</h2>
        <h3 className="text-4xl md:text-6xl font-black">{color}</h3>
        <button
          className="px-2 py-1 m-4 border-0 bg-black rounded cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(color);
            alert("Color copied");
          }}
        >
          Copy Color
        </button>
      </div>
    </section>
  );
};

export default RandomColor;
