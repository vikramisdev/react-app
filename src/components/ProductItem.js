import { StarFill, StarHalf } from "react-bootstrap-icons";

function ProductItem({ product }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <>
      <div
        item-key={product.id}
        key={product.id}
        className="latest-product-item"
      >
        <img
          className="latest-product-image"
          src={`/images/${product.image}`}
          alt={product.name}
        />
        <div className="latest-product-desc">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            <strong>{formatter.format(product.price)}</strong>
          </p>
        </div>

        <div className="product-control-container">
          <div className="product-ratings-container">
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarHalf />
            &nbsp;(4.5)
          </div>

          <div className="product-control">
            <button>Add To Cart</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
