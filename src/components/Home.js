import LatestProducts from "../components/LatestProducts";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarLogged from "./NavbarLogged";

function Home({ loggedin }) {
  return (
    <>
      {loggedin ? <NavbarLogged /> : <Navbar />}
      <LatestProducts />
      <Footer />
    </>
  );
}

export default Home;
