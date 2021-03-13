import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getTotalItems } from "../services/cart";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Products from "./Products";
import User from "./User";
import { url } from "../config.json";

class Container extends Component {
  state = {
    user: {},
    isLoggedIn: false,
    totalCartItems: 0,
  };
  async componentDidMount() {
    const totalCartItems = await getTotalItems();
    this.setState({ totalCartItems });
  }
  handleCartCount = async () => {
    const totalCartItems = await getTotalItems();
    this.setState({ totalCartItems });
  };
  handleLoginSuccess = (response) => {
    const { profileObj: user } = response;
    console.log(user);
    this.setState({ user, isLoggedIn: true });
  };
  handleLoginError = (error) => {
    console.log(error);
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const { user, isLoggedIn, totalCartItems } = this.state;
    return (
      <React.Fragment>
        <Navbar
          totalCartItems={totalCartItems}
          handleLogout={this.handleLogout}
          isLoggedIn={isLoggedIn}
          user={user}
          handleLoginSuccess={this.handleLoginSuccess.bind(this)}
          handleLoginError={this.handleLoginError}
        />
        <main role="main" className="col-md-12 col-lg-12 px-4">
          <Switch>
            <Route path={url} exact>
              <Products handleCartCount={() => this.handleCartCount()} />
            </Route>
            <Route path={url + "cart"}>
              <Cart handleCartCount={() => this.handleCartCount()} />
            </Route>
            <Route path={url + "orders"}>
              <Orders />
            </Route>
            <Route path={url + "user"}>
              <User />
            </Route>
            <Route path={url + "order/:id"}>
              <OrderDetails />
            </Route>
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Container;
