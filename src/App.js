import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Products from "./components/Products";
import SearchResults from "./components/SearchResults";
import ProductView from "./components/ProductView";
import { useState } from "react";

function App() {

  const [loggedin, updateLoggedin] = useState(false);
  const [productName, setProductName] = useState("");

  const setLoggedOut = () => updateLoggedin(false);
  const setLoggedIn = () => updateLoggedin(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} setProductName={setProductName}/>} />
        <Route path="/login" element={<Login loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} setProductName={setProductName}/> } />
        <Route path="/cart" element={<Cart loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} setProductName={setProductName} /> } />
        <Route path="/signup" element={<Signup loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} setProductName={setProductName} /> } />
        <Route path="/products" element={<Products loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} setProductName={setProductName} />} />
        <Route path="/search" element={<SearchResults productName={productName} setProductName={setProductName} />} />
        <Route path="/productview/:category/:id" element={<ProductView loginStatus={loggedin} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} />} />
      </Routes>
    </Router>
  );
}

export default App;
