import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  });

  if (loading) {
    return <div>Loading data, please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return <div className="section container">ImageSlider</div>;
};

export default ImageSlider;
