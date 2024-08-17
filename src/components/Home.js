import LatestProducts from "../components/LatestProducts";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarLogged from "./NavbarLogged";

function Home({ loginStatus, setLoggedIn, setLoggedOut, setProductName}) {
  return (
    <>
      {loginStatus ? <NavbarLogged loginStatus={loginStatus} setLoggedOut={setLoggedOut}/> : <Navbar loginStatus={loginStatus} setLoggedIn={setLoggedIn} setProductName={setProductName}/>}
      <LatestProducts />
      <Footer />
    </>
  );
}

export default Home;
