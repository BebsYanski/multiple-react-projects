import React from "react";
import { useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  return <div>LoadMoreData</div>;
};

export default LoadMoreData;
