import '../components-css/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar Flex">
        <div className="Navbar-Left Flex">
          <a href="/"><li>Home</li></a>
          <a href="products"><li>Products</li></a>
          <a href="cart"><li>Cart</li></a>
        </div>

        <h3 className="Navbar-Title">ShopAnything</h3>

        <div className="Navbar-Right Flex">
          <input className="Navbar-Search" type="search" ></input>
          <a href="login"><li>Log In</li></a>
          <a href="signup"><li className="Navbar-Signup">Sign Up</li></a>
        </div>
    </div>
  );
}

export default Navbar;
