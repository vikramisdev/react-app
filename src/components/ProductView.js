import NavbarLogged from "./NavbarLogged";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import productsData from "../json-data/products.json";
import ProductItem from "./ProductItem";

function ProductView({loggedin}) {
    const {category, id} = useParams();

    const product = productsData.products.latestProducts.find(
        p => p.id === parseInt(id)
    );

    return(
        <>
          {loggedin ? <Navbar /> : <NavbarLogged />}
          <ProductItem product={product} />

        </>
    )
}

export default ProductView;
