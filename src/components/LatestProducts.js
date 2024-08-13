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

  const openProductView = (event) => {
    const productId = event.currentTarget.getAttribute('item-key');
    window.open(`productview/latestProducts/${productId}`, "_self");

  }

  return (
    <div>
      <h1 className="latest-product-header">Latest Products</h1>
      <div className="latest-product-list">
        {products.map((product) => (
          <div onClick={openProductView} item-key={product.id} key={product.id} className="latest-product-item">
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
