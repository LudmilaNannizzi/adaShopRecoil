import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/Context/CartContext/CartContext";
import ListOfProducts from "./Components/ListOfProducts";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
