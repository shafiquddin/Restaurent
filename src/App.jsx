import React, { useContext } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Store/Cart-Context";

function App() {
  const ctx = useContext(CartContext);
  return (
    <div>
      {ctx.showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
