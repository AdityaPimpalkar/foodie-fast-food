import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
 import { getCartItems, addToCart, deleteFromCart } from '../services/cart';
import { getProducts } from '../services/product';

class Products extends Component {
    state = { 
         products: []
    }

    mapProducts = (cart,products) => {
        products = products.map((product) => {
            const inCart = cart.find((item) => item.productId === product._id);
            if(inCart) product = {...product, selectedItems: inCart.selectedItems }
            else delete product.selectedItems;
            return product;
        })
        return products;
    }

    addToCart = async (product) => {
        const cart = await addToCart(product)
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products });
    }

    deleteFromCart = async (product) => {
        const cart = await deleteFromCart(product);
        const products = this.mapProducts(cart,this.state.products)
        this.props.handleCartCount();
        this.setState({ products });
    }

    async componentDidMount() {
        let cart = await getCartItems();
        let products = await getProducts();
        products = this.mapProducts(cart,products);
        this.setState({ products })
    }
    render() {
        const { products } = this.state; 
        return ( 
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-lg-2 pb-2">
                        <Card key={product._id}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <div className="card-title">
                                    {product.name}
                                </div>

                                {/* <Card.Text>{product.desc}</Card.Text> */}
                                {/* ₹{product.price} */}
                                <div className="row no-gutters">
                                    <div className="col-sm-6">
                                        <h5 className="mt-1 text-success">₹{product.price}</h5>
                                    </div>
                                    { product.selectedItems ?
                                    
                                    <div className="col-sm-6">
                                        <button className="btn btn-success btn-circle" onClick={() => this.deleteFromCart(product)} disabled={product.selectedItems ? false : true}>
                                            <i className="fa fa-check"></i>
                                        </button>
                                    </div>
                                    
                                    :
                                    <div className="col-sm-6">
                                        <button className="btn btn-danger btn-circle" onClick={() => this.addToCart(product)}>
                                            <i className="fa fa-shopping-cart fa-lg"></i> 
                                        </button>
                                    </div>
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Products;
