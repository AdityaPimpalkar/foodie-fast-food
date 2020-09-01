import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { chunk } from '../services/common';

const Cart = ({productData, cartData, addToCart, removeFromCart, deleteFromCart}) => {
    const products = cartData.map((cartObj) => {
        let product = productData.find((product) => product.id === cartObj.productId)
        product = {...product, selectedItems: cartObj.selectedItems }
        return product;
        
    })
    const productsGrid = chunk(products, 4);
    return (
        <React.Fragment>
            {productsGrid.map((products, index) => (
                <div className="row pb-2" key={index}>
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3">
                            <Card key={product.id}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>
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
                                    <div className="row no-gutters mb-2">
                                        <div className="col-sm">
                                            <button className="btn btn-primary btn-block" onClick={() => addToCart(product)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-sm">
                                            <label className="mt-1">{ product.selectedItems ? product.selectedItems : 0 }</label>
                                        </div>
                                        <div className="col-sm">
                                            <button className="btn btn-danger btn-block" onClick={() => removeFromCart(product)} disabled={product.selectedItems ? false : true}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                       
                                        
                                    </div>
                                    <button className="btn btn-danger btn-block" onClick={() => deleteFromCart(product)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            ))}
        </React.Fragment>
     );
}
 
export default Cart;