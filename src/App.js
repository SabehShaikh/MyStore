import { useEffect , useState } from "react";
import AppRouter from "./config/Router";
import CartContext from "./context/cart";


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartData) {
      setCart(cartData);
    }
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <AppRouter />
    </CartContext.Provider>
  );
}

export default App;
