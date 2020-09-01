import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { getCartItems, getTotalItems, addToCart, removeFromCart } from '../services/cart';
import { getProducts } from '../services/product';
import Cart from './Cart';
import Navbar from './Navbar';
//import Sidenavbar from './Sidenavbar';
import Products from './Products';
import { deleteFromCart } from './../services/cart';


class Container extends Component {
    state = {
        products: [],
        cart: [],
        totalItems: 0
    }
    
    componentDidMount() {
        this.setState({
            products: getProducts(),
            cart: getCartItems(),
            totalItems: getTotalItems()
        });
    }

    addToCart = (product) => {
        const cart = addToCart(product)
        this.setState({ cart, totalItems: getTotalItems() });
    }

    removeFromCart = (product) => {
        const cart = removeFromCart(product);
        this.setState({ cart, totalItems: getTotalItems() });
    }

    deleteFromCart = (product) => {
        const cart = deleteFromCart(product);
        this.setState({ cart, totalItems: getTotalItems() });
    }

    render() {
        const { products, cart, totalItems } = this.state; 
        return (
            <React.Fragment>
            {/* <Sidenavbar totalCartItems={totalItems} /> */}
            <Navbar totalCartItems={totalItems} />

            <main role="main" className="col-md-12 col-lg-12 px-4">
                        {/* <Products
                            productData={products}
                            cartData={cart}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        /> */}
                        <Switch>
                            <Route path="/" exact >
                                <Products
                                    productData={products}
                                    cartData={cart}
                                    addToCart={this.addToCart}
                                    removeFromCart={this.removeFromCart}
                                />    
                            </Route>
                            <Route path="/cart" >
                                <Cart
                                    productData={products}
                                    cartData={cart}
                                    addToCart={this.addToCart}
                                    removeFromCart={this.removeFromCart}
                                    deleteFromCart={this.deleteFromCart}
                                />    
                            </Route>
                            <Redirect to="/not-found" />
                        </Switch>
                {/* <Switch>
                    <Route path="/" component={
                        <Products
                            productData={products}
                            cartData={cart}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        />}
                    />
                    <Route path="/cart" component={
                        <Products
                            productData={products}
                            cartData={cart}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        />} 
                    />
                    <Redirect to="/not-found" />
                </Switch> */}
            </main>
            </React.Fragment>
            
         );
    }
}
 
export default Container;