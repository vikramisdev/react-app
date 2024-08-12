import Navbar from "./Navbar";

import React from "react";
import productsData from "../json-data/products.json";
import "../components-css/LatestProducts.css";
import Footer from "./Footer";

const Products = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const categories = productsData.products;

  return (
    <>
      <Navbar />

      <div className="product-categories">
        {Object.keys(categories).map((category) => {
          if (category === "latestProducts") {
            return null; // Skip the latestProducts category
          }

          return (
            <div key={category} className="category-section">
              <h1 className="product-header">
                {category
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .toUpperCase()}
              </h1>
              <div className="product-list">
                {categories[category].map((product) => (
                  <div key={product.id} className="product-item">
                    <img
                      className="product-image"
                      src={`/images/${product.image}`}
                      alt={product.name}
                    />
                    <div className="product-desc">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <p>
                        <strong>{formatter.format(product.price)}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Products;
