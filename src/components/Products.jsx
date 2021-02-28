import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
 import { getCartItems, addToCart, removeFromCart } from '../services/cart';
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

    removeFromCart = async (product) => {
        const cart = await removeFromCart(product);
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
                    <div key={product._id} className="col-sm-2 pb-2">
                        <Card key={product._id}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title className="h6">
                                    {product.name}
                                    &nbsp;
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip> {product.desc} </Tooltip>}
                                    >
                                    <i className="fa fa-info-circle"></i>
                                    </OverlayTrigger>
                                </Card.Title>

                                <Card.Text>₹{product.price}</Card.Text>

                                <div className="row no-gutters">
                                    <div className="col-sm">
                                        <button className="btn btn-primary btn-block" onClick={() => this.addToCart(product)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="col-sm">
                                        <label className="mt-1">{ product.selectedItems ? product.selectedItems : 0 }</label>
                                    </div>
                                    <div className="col-sm">
                                        <button className="btn btn-danger btn-block" onClick={() => this.removeFromCart(product)} disabled={product.selectedItems ? false : true}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
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
