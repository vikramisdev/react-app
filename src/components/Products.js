import Navbar from "./Navbar";
import React, { useState } from "react";
import "../components-css/LatestProducts.css";
import Footer from "./Footer";
import ProductList from "./ProductList";
import NavbarLogged from "./NavbarLogged";

const Products = ({ loginStatus, setLoggedIn, setLoggedOut, setProductName }) => {
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const updateFilters = () => {
    const price = document.getElementById("price").value;
    const category = document.querySelector('select').value;

    setItemPrice(price);
    setItemCategory(category);
  };

  return (
    <>
      {loginStatus ? <NavbarLogged loginStatus={loginStatus} setLoggedOut={setLoggedOut} setProductName={setProductName}/> : <Navbar loginStatus={loginStatus} setLoggedIn={setLoggedIn} setProductName={setProductName}/>}

      <div className="filter-container">
        <div className="range-filter-container">
          <p>Filters: </p>
          <input
          id="price"
            type="number"
            min={1}
            placeholder="Set Price"
            onChange={updateFilters}
          />
        </div>
        <select id="select" onChange={updateFilters}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Sports Equipment">Sports Equipment</option>
          <option value="Beauty & Health">Beauty and Health</option>
          <option value="Books & Media">Books and Media</option>
        </select>
      </div>

      <ProductList itemPrice={itemPrice} itemCategory={itemCategory} />
      <Footer />
    </>
  );
};

export default Products;
