import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="section container qr-cod text-center">
      <h2 className="text-center text-5xl font-bold">QR Code Generator</h2>
      <input
        type="text"
        name="qr-code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your value here"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQrCode}
      >
        Generate
      </button>
      <div className="flex items-center justify-center">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
