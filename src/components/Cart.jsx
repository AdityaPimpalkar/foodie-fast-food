import React, { Component } from "react";
import Address from "./Address";
import { getProducts } from '../services/product';
import { addToCart, removeFromCart, deleteFromCart, getCartItems } from '../services/cart';
import { getAddress } from "../services/address";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";

class Cart extends Component {
    state = {
        products: [],
        cart: [],
        address: [],
        deliveryaddress: {},
        grandtotal: 0
    }
    componentDidMount() {
        let products = getProducts();
        let cart = getCartItems();
        let address = getAddress();
        let deliveryaddress = this.setDeliveryAddress(address);
        products = this.mapProducts(cart,products);
        this.setState({ products, cart, address, deliveryaddress })
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

    render() {
        const { products, address, grandtotal } = this.state;
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
                    <Address
                        addressData={address}
                        isdelete={false} 
                        selectedAddress={this.changeDeliveryAddress} 
                    />
                    :
                    null
                    }
                </div>
                
                <CartSummary products={products} grandtotal={grandtotal} />
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cart;

