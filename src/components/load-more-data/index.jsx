import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count * 20}`
        );
        const result = await response.json();
        if (result?.products?.length) {
          setProducts((prev) => [...prev, ...result.products]);
        }
      } catch (error) {
        setErrorMsg(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) return <div>Loading Data, please wait...</div>;
  if (errorMsg) return <div>An error occurred - {errorMsg}</div>;

  return (
    <div className="container section load-more">
      <h2 className="text-5xl font-bold text-center my-8">Load More Project</h2>
      <div className="flex flex-col items-center gap-8">
        <div className="product-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="products p-[1.5em] border flex flex-col items-center gap-8 rounded-2xl"
              id={index === products.length - 1 ? "end" : undefined}
            >
              <img src={item.thumbnail} alt={item.title} className="w-[8em]" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="button-container text-center">
          <button
            disabled={disabled}
            onClick={() => setCount((prev) => prev + 1)}
            className={`border rounded-2xl px-4 py-2 mt-4 ${
              disabled ? "text-gray-500 cursor-not-allowed" : ""
            }`}
          >
            Load More Products
          </button>
          <h3 className="text-4xl font-bold mt-4">
            {disabled
              ? "You have reached 100 products"
              : `${products.length} loaded`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LoadMoreData;
