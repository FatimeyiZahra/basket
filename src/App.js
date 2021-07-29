import React, { useState } from "react"; //rafce
import { Data } from "./Data";
import Products from "./Products";
import Navi from "./Navi";
import "./App.css";
import alertify from "alertifyjs";


const App = () => {
  const [product] = useState(Data);
  const [basket, setBasket] = useState([]);

  const AddToCart = (prd) => {
    let newBasket = basket;
    var addedProduct = newBasket.find((c) => c.product.id === prd.id);
    if (addedProduct) {
      addedProduct.quantity += 1;
    } else {
      newBasket.push({ product: prd, quantity: 1 });
    }
    setBasket(newBasket);
    alertify.success(prd.name + " added to cart!");

  };
  const RemoveFromCart = (bst) => {
    let newBasket = basket.filter(c => c.product.id !== bst.id);
    setBasket(newBasket);
    alertify.error(bst.name + " removed from cart!");

  };
  return (
    <div className="PrdSec">
      <Navi basket={basket} remove={RemoveFromCart} />

      <Products product={product} addtocart={AddToCart} />
    </div>
  );
};

export default App;
