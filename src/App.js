import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Products from "./components/Products";
import SearchResults from "./components/SearchResults";
import ProductView from "./components/ProductView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/signup" element={<Signup /> } />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/productview/:category/:id" element={<ProductView />} />
      </Routes>
    </Router>
  );
}

export default App;
