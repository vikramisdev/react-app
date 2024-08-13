import Navbar from "./Navbar";
import NavbarLogged from "./NavbarLogged";
import "../components-css/Login.css";
import Footer from "./Footer";

function Login({ loggedin }) {
  function handleLogin(e) {
    alert("Login Success!");
  }

  return (
    <>
      {loggedin ? <NavbarLogged /> : <Navbar />}
      <div className="login-container">
        <form className="login-form">
          <h2 className="login-title">Log In</h2>
          <label>Email</label>
          <br />
          <input type="email"></input>
          <br />
          <br />

          <label>Password</label>
          <br />
          <input type="password"></input>
          <br />
          <br />

          <div className="login-submit-container">
            <input onSubmit={handleLogin} type="submit" value="Login" />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
