import "../components-css/Navbar.css";
import { Search } from "react-bootstrap-icons";

function NavbarLogged() {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      window.open("search", "_self");
    }
  }

  return (
    <div className="Navbar Flex">
      <div className="Navbar-Left Flex">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="products">
          <li>Products</li>
        </a>
        <a href="cart">
          <li>Cart</li>
        </a>
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
        <a href="/">
          <li className="Navbar-LoggedOut">Log Out</li>
        </a>
      </div>
    </div>
  );
}

export default NavbarLogged;
