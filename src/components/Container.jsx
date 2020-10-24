import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { getTotalItems } from '../services/cart';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import Cart from './Cart';
import Navbar from './Navbar';
import Products from './Products';
//import Sidenavbar from './Sidenavbar';

class Container extends Component {
    state = {
        totalCartItems: 0
    }
    componentDidMount() {
        this.setState({ totalCartItems: getTotalItems() })
    }
    handleCartCount = () => {
        this.setState({ totalCartItems: getTotalItems() })
    } 
    render() {
        return (
            <React.Fragment>
            <Navbar totalCartItems={this.state.totalCartItems} />
            <main role="main" className="col-md-12 col-lg-12 px-4">
                <Switch>
                    <Route path="/foodie-fast-food/" exact > <Products handleCartCount={() => this.handleCartCount()} /> </Route>
                    <Route path="/foodie-fast-food/cart" > <Cart handleCartCount={() => this.handleCartCount()} /> </Route>
                    <Route path="/foodie-fast-food/orders" > <Orders /> </Route>
                    <Route path="/foodie-fast-food/order/:id" > <OrderDetails /> </Route>
                    <Redirect to="/not-found" />
                </Switch>
            </main>
            </React.Fragment>
            
         );
    }
}
 
export default Container;