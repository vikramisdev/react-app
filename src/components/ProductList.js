import productsData from "../json-data/products.json";
import "../components-css/LatestProducts.css";
import NoProductFound from "./NoProductFound";
import { useNavigate } from "react-router-dom";

function ProductList({ itemPrice, itemCategory, productName }) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  // Function to navigate to product view
  const openProductView = (event) => {
    const productId = event.currentTarget.getAttribute('data-key');
    const productCategory = event.currentTarget.getAttribute('data-category');
    navigate(`/productview/${productCategory}/${productId}`, { replace: true });
  }

  let filteredProducts = {};

  // Iterate over each category in the products object
  for (const category in productsData.products) {
    if (itemCategory === "") {
      filteredProducts = productsData.products;
      break;
    }

    if (
      itemCategory &&
      category.trim().toLowerCase() ===
        itemCategory.trim().replaceAll(" ", "").toLowerCase()
    ) {
      filteredProducts[category] = productsData.products[category];
    }
  }

  // Create regex pattern from productName
  const createRegexPattern = (str) => {
    if (!str) return null;
    // Escape special regex characters and create a pattern with optional characters
    const escapedStr = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(escapedStr.split('').join('.*'), 'i');
  };

  const filterRegex = createRegexPattern(productName);

  // Check if there are any matching products
  const hasMatchingProducts = Object.keys(filteredProducts).some((category) => {
    return filteredProducts[category].some((product) => {
      const matchesPrice = itemPrice && itemPrice !== "" ? product.price <= itemPrice : true;
      const matchesFilter = filterRegex ?
        filterRegex.test(product.name) : true;

      return matchesPrice && matchesFilter;
    });
  });

  return (
    <div className="product-categories">
      {hasMatchingProducts ? (
        Object.keys(filteredProducts).map((category) => {
          // Filter products based on itemPrice and productName
          const filteredItems = filteredProducts[category].filter((product) => {
            const matchesPrice = itemPrice && itemPrice !== "" ? product.price <= itemPrice : true;
            const matchesFilter = filterRegex ?
              filterRegex.test(product.name) : true;

            return matchesPrice && matchesFilter;
          });

          // Only render category section if there are filtered items
          return filteredItems.length > 0 ? (
            <div key={category} className="category-section">
              <h1 className="product-header">
                {category
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .toUpperCase()}
              </h1>
              <div className="product-list">
                {filteredItems.map((product) => (
                  <div
                    onClick={openProductView}
                    data-key={product.id}
                    data-category={category}
                    key={product.id}
                    className="product-item"
                  >
                    <img
                      className="product-image"
                      src={`/images/${product.image}`}
                      alt={product.name}
                    />
                    <div className="product-desc">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <p>
                        <strong>{formatter.format(product.price)}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        })
      ) : (
        <NoProductFound /> // Render NoProductFound only if no products match the filter
      )}
    </div>
  );
}

export default ProductList;
