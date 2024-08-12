import React from "react";
import productsData from "../json-data/products.json";
import "../components-css/LatestProducts.css";

const LatestProducts = () => {
  const products = productsData.products.latestProducts;

  if (!Array.isArray(products)) {
    return <div>Error: Products data is not an array</div>;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div>
      <h1 className="latest-product-header">Latest Products</h1>
      <div className="latest-product-list">
        {products.map((product) => (
          <div key={product.id} className="latest-product-item">
            <img
              className="latest-product-image"
              src={`/images/${product.image}`}
              alt={product.name}
            />
            <div className="latest-product-desc">
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
};

export default LatestProducts;
