import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from './Cart';
import Navbar from './Navbar';
//import Sidenavbar from './Sidenavbar';
import Products from './Products';
import { getTotalItems } from '../services/cart';


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
                    <Redirect to="/not-found" />
                </Switch>
            </main>
            </React.Fragment>
            
         );
    }
}
 
export default Container;