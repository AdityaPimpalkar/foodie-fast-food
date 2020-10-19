import React, { Component } from "react";
import { getProducts } from '../services/product';
import { addToCart, removeFromCart, deleteFromCart, getCartItems } from '../services/cart';
import { getPaymentOptions } from "../services/payments";
import { getAddress } from "../services/address";
import { createOrder } from "../services/orders";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";
import Payments from "./Payments";
import Address from "./Address";



class Cart extends Component {
    state = {
        products: [],
        cart: [],
        address: [],
        payments: [],
        deliveryaddress: {},
        paymentby: {},
        grandtotal: 0
    }
    componentDidMount() {
        let products = getProducts();
        let cart = getCartItems();
        let address = getAddress();
        let payments = getPaymentOptions();
        let deliveryaddress = this.setDeliveryAddress(address);
        products = this.mapProducts(cart,products);
        this.setState({ products, cart, address, deliveryaddress, payments })
    }
    mapProducts = (cart,products) => {
        let grandtotal = 0;
        products = cart.map((cartObj) => {
            let product = products.find(
                (product) => product.id === cartObj.productId
            );
            product = { ...product, total:product.price*cartObj.selectedItems, selectedItems: cartObj.selectedItems };
            grandtotal += product.total;
            return product;
        });
        this.setState({ grandtotal });
        return products;
    }

    setDeliveryAddress = (addressData) => {
        let address = addressData.find((address) => address.isdefault === true)
        address = address ? address: {}
        return address
    }

    choosePaymentBy = (paymentby) => {
        this.setState({ paymentby });
    }

    changeDeliveryAddress = (address) => {
        const addresses = [...this.state.address]
        const index = addresses.indexOf(address);
        addresses.forEach(function(key){
            key.isdefault = false;
        });
        addresses[index].isdefault = true;
        this.setState({ address:addresses,deliveryaddress:address })
    }

    addToCart = (product) => {
        const cart = addToCart(product)
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    removeFromCart = (product) => {
        const cart = removeFromCart(product);
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    deleteFromCart = (product) => {
        const cart = deleteFromCart(product);
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products, cart });
    }

    handlePlaceOrder = (e) => {
        const result = createOrder(this.state);
    }

    render() {
        const { products, payments, address, deliveryaddress, paymentby, grandtotal } = this.state;
        return ( 
            <React.Fragment>
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
                    <>
                        <Address
                        addressData={address}
                        isdelete={false} 
                        selectedAddress={this.changeDeliveryAddress} 
                    />
                    <Payments payments={payments} paymentby={this.choosePaymentBy} />
                    </>
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

