import React from "react"; //rafce
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Toolbar, AppBar, makeStyles, TextField } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
const Navi = ({ basket, remove }) => {
  const classes = useStyles();
  // const bst = useContext(ContextProducts);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className="nav-icons">
            <BrowserRouter>
              <ul>
                <li>
                  <Link to="/"><p>Home</p></Link>
                </li>
                <li>
                  <Link to="/product-item"><p>Product-item</p></Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                  <a
                    href="!#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="badge badge-info badge-counter">
                      {basket.length}
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow-sm">
                    <h6 className="dropdown-header">Your Basket</h6>
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">Mehsulun Adi</th>
                          <th scope="col">Qiymet</th>
                          <th scope="col">Miqdar</th>
                          <th scope="col"> </th>
                        </tr>
                      </thead>
                      <tbody>
                        {basket.map((bst) => {
                          return (
                            <tr key={bst.product.id}>
                              <td>{bst.product.id}</td>
                              <td>{bst.product.name}</td>
                              <td>{bst.product.price}</td>
                              <td>
                                <TextField
                                  id="standard-number"
                                  label="Number"
                                  type="number"
                                  value={bst.quantity}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </td>
                              <td>
                                <button
                                  onClick={() => remove(bst.product)}
                                  className="btn btn-danger"
                                >
                                  delete
                                </button>
                                <button className="btn btn-success">+1</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </li>
                <ShoppingBasketIcon></ShoppingBasketIcon>
              </ul>
            </BrowserRouter>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navi;
