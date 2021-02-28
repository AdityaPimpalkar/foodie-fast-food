import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { getTotalItems } from '../services/cart';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import Cart from './Cart';
import Navbar from './Navbar';
import Products from './Products';
import User from './User';
import { url } from '../config.json';

class Container extends Component {
    state = {
        totalCartItems: 0
    }
    async componentDidMount() {
        const totalCartItems = await getTotalItems()
        this.setState({ totalCartItems })
    }
     handleCartCount = async () => {
        const totalCartItems = await getTotalItems()
        this.setState({ totalCartItems })
    } 
    render() {
        return (
            <React.Fragment>
            <Navbar totalCartItems={this.state.totalCartItems} />
            <main role="main" className="col-md-12 col-lg-12 px-4">
                <Switch>
                    <Route path={url} exact > <Products handleCartCount={() => this.handleCartCount()} /> </Route>
                    <Route path={url+ "cart"} > <Cart handleCartCount={() => this.handleCartCount()} /> </Route>
                    <Route path={url+ "orders"} > <Orders /> </Route>
                    <Route path={url+ "user"} > <User /> </Route>
                    <Route path={url+ "order/:id"} > <OrderDetails /> </Route>
                    <Redirect to="/not-found" />
                </Switch>
            </main>
            </React.Fragment>
            
         );
    }
}
 
export default Container;