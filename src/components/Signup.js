import Navbar from "./Navbar";
import NavbarLogged from "./NavbarLogged";
import "../components-css/Login.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login({ loginStatus, setLoggedIn, setProductName }) {
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    setLoggedIn();
    navigate("/");
  }

  return (
    <>
      <Navbar setProductName={setProductName} />

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogIn}>
          <h2 className="login-title">Sign Up</h2>
          <label>Email</label>
          <br />
          <input type="email" required></input>
          <br />
          <br />

          <label>Password</label>
          <br />
          <input type="password" required></input>
          <br />
          <br />

          <label>Confirm Password</label>
          <br />
          <input type="password" required></input>
          <br />
          <br />

          <div className="login-submit-container">
            <button type="submit" >Sign Up</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
