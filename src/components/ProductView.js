import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from "../json-data/products.json";
import ProductItem from "./ProductItem";
import NavbarLogged from "./NavbarLogged";
import Navbar from "./Navbar";

function ProductView({ loginStatus, setLoggedIn, setLoggedOut }) {
    const { category, id } = useParams();
    const navigate = useNavigate();

    // Find the category in the products data
    const categoryProducts = productsData.products[category];

    // If the category or product ID is invalid, set product to null
    const product = categoryProducts ?
        categoryProducts.find(p => p.id === parseInt(id)) : null;

    useEffect(() => {
        // Redirect to /products if no product is found
        if (!product) {
            navigate('/products', { replace: true });
            return; // Exit early
        }

        // Function to handle back navigation
        const handleBackNavigation = (event) => {
            // Redirect to /products when the back button is pressed
            navigate('/products', { replace: true });
        };

        // Listen for the popstate event
        window.addEventListener('popstate', handleBackNavigation);

        return () => {
            // Clean up the event listener
            window.removeEventListener('popstate', handleBackNavigation);
        };
    }, [product, navigate]);

    return (
        <>
            {loginStatus ? <NavbarLogged loginStatus={loginStatus} setLoggedOut={setLoggedOut} /> : <Navbar loginStatus={loginStatus} setLoggedIn={setLoggedIn}/>}
            {product ? (
                <ProductItem product={product} />
            ) : (
                <div>Loading...</div> // Display a loading message or spinner while redirecting
            )}
        </>
    );
}

export default ProductView;
