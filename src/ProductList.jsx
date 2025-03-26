import { useCart } from "./CartContext";
const ProductList = () => {
  const { Add } = useCart();
  const productData = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];

  return (
    <div className="container mt-4">
      <h2>Product</h2>
      <div className="row">
        {productData.map((product) => (
          <div className="card p-3  mb-4">
            <h5>{product.name}</h5>
            <h6 className="">{product.price}</h6>
            <button className="btn btn-danger" onClick={() => Add(product)}>
              ADD CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
