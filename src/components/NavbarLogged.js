import { useState } from "react";
import "../components-css/Navbar.css";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function NavbarLogged({ loginStatus, setLoggedOut, setProductName }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setProductName(event.target.value);
      navigateToSearch();
    }
  };

  const navigateToHome = () => navigate("/");
  const navigateToProducts = () => navigate("/products");
  const navigateToCart = () => navigate("/cart");
  const navigateToSearch = () => navigate("/search");


  const navigate = useNavigate();

  return (
    <>
      <div className="Navbar Flex">
        <div className="Navbar-Left Flex">
          <div className="Navbar-Left Flex">
            <li className="Navbar-Btn" onClick={navigateToHome}>
              Home
            </li>
            <li className="Navbar-Btn" onClick={navigateToProducts}>
              Products
            </li>
            <li className="Navbar-Btn" onClick={navigateToCart}>
              Cart
            </li>
          </div>
        </div>

        <h3 className="Navbar-Title">ShopAnything</h3>

        <div className="Navbar-Right Flex">
          <div className="Navbar-Container">
            <Search className="Search-Icon" />
            <input
              onKeyDown={handleKeyDown}
              className="Navbar-Search"
              type="text"
              placeholder="Search ..."
            ></input>
          </div>
          <li onClick={setLoggedOut} className="Navbar-LoggedOut">
            Log Out
          </li>
        </div>
      </div>
    </>
  );
}

export default NavbarLogged;
