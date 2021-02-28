import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { getProducts } from '../services/product';
import { addToCart, removeFromCart, deleteFromCart, getCartItems } from '../services/cart';
import { getSelectedAddress } from "../services/address";
import { createOrder } from "../services/orders";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";
import Payments from "./Payments";
import Address from "./Address";

class Cart extends Component {
    state = {
        products: [],
        cart: [],
        deliveryaddress: {},
        paymentby: {},
        grandtotal: 0,
        redirect: false,
    }
    async componentDidMount() {
        let products = await getProducts();
        let cart = await getCartItems();
        let deliveryaddress = getSelectedAddress();
        products = this.mapProducts(cart,products);
        this.setState({ products, cart, deliveryaddress })
    }
    mapProducts = (cart,products) => {
        let grandtotal = 0;
        products = cart.map((cartObj) => {
            let product = products.find(
                (product) => product._id === cartObj.productId
            );
            product = { ...product, total:product.price*cartObj.selectedItems, selectedItems: cartObj.selectedItems };
            grandtotal += product.total;
            return product;
        });
        this.setState({ grandtotal });
        return products;
    }

    choosePaymentBy = (paymentby) => {
        this.setState({ paymentby });
    }

    changeSelectedAddress = (deliveryaddress) => {
        this.setState({ deliveryaddress });
    }

    addToCart = async (product) => {
        const cart = await addToCart(product)
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    removeFromCart = async (product) => {
        const cart = await removeFromCart(product);
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    deleteFromCart = async (product) => {
        const cart = await deleteFromCart(product);
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    handlePlaceOrder = (e) => {
         const order = createOrder(this.state);
         this.props.handleCartCount();
         this.setState({ redirect: order });
    }

    render() {
        const { products, deliveryaddress, paymentby, grandtotal, redirect } = this.state;
        return ( 
            <React.Fragment>
                { redirect ? (<Redirect push to={"/foodie-fast-food/order/" + redirect}/> ) : null }
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card-header h5 text-left">My Cart</div>
                        <CartProducts
                            products={products}
                            addToCart={this.addToCart}
                            removeFromCart={this.removeFromCart}
                            deleteFromCart={this.deleteFromCart}
                        />
                        {products.length > 0 ?
                            <React.Fragment>
                                <Address isdelete={false} isSelect={true} selectedAddress={this.changeSelectedAddress} />
                                <Payments paymentby={this.choosePaymentBy} isSelect={true} />
                            </React.Fragment>
                        :
                            null
                        }
                    </div>
                    
                    <CartSummary 
                        products={products} 
                        grandtotal={grandtotal} 
                        deliveryaddress={deliveryaddress} 
                        paymentby={paymentby} 
                        handlePlaceOrder={this.handlePlaceOrder} 
                    />
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cart;

