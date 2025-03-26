import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import Cart from './Cart'

export default function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart/>

    </div>
  );
}
