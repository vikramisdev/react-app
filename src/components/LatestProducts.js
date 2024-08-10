import data from "../json-data/products.json";

function LatestProducts() {
  return (
    <div>
      {data.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

export default LatestProducts;
