import Footer from "./Footer";
import Navbar from "./Navbar";
import LogInFirst from "./LogInFirst";
import CartDetails from "./CartDetails";
import NavbarLogged from "./NavbarLogged";

function Cart({loginStatus, setLoggedIn, setLoggedOut, setProductName}) {
    return (
      <>
        {loginStatus ? <NavbarLogged loginStatus={loginStatus} setLoggedOut={setLoggedOut } setProductName={setProductName}/> : <Navbar loginStatus={loginStatus} setLoggedIn={setLoggedIn} setProductName={setProductName}/>}
        {loginStatus ? <CartDetails /> : <LogInFirst />}
        <Footer />
      </>
    );
  }

  export default Cart;
