import React, { useState, useEffect } from "react"; //rafce
import Products from "./Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navi from "./Navi";
import "./App.css";
import alertify from "alertifyjs";
import ProductItem from "./pages/ProductItem";
import NotFound from "./pages/NotFound";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Category from "./component/Category";

const App = () => {
  // const [product] = useState(Data);
  const [categories, setCategory] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44394/V1/HomePage/categories")
      .then((res) => setCategory(res.data));
  });

  const AddToCart = (prd) => {
    const newBasket = [...basket];

    var addedProduct = newBasket.find((c) => c.product.id === prd.id);
    if (addedProduct) {
      Number((addedProduct.quantity += 1));
      console.log(addedProduct.quantity);
    } else {
      newBasket.push({ product: prd, quantity: 1 });
    }
    setBasket(newBasket);
    alertify.success(prd.name + " added to cart!");
  };
  const RemoveFromCart = (bst) => {
    let newBasket = basket.filter((c) => c.product.id !== bst.id);
    setBasket(newBasket);
    alertify.error(bst.name + " removed from cart!");
  };

  return (
    <div className="PrdSec">
      <Container>
        <Navi basket={basket} remove={RemoveFromCart} />
        <Row>
          <Col xs="3">
            <Category categories={categories}/>
          </Col>
          <Col xs="9">
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Products {...props} addtocart={AddToCart} />
                  )}
                />
                <Route
                  path="/products"
                  render={(props) => <Products addtocart={AddToCart} />}
                />
                <Route path="/product-item" component={ProductItem} exact/>
                <Route component={NotFound} />
                <Route
                  exact
                  path="/products"
                  render={(props) => (
                    <Products {...props} addtocart={AddToCart} />
                  )}
                />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
