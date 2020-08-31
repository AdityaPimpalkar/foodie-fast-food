import React from 'react';
import { Card } from 'react-bootstrap';

const Products = ({productData,onIncrement,onDecrement}) => {
    return (
        <React.Fragment>
            {productData.map((products, index) => (
                <div className="row" key={index}>
                    {products.map((product) => (
                        <div key={product.ProductId} className="col-lg-3">
                            <Card key={product.ProductId}>
                                <Card.Img variant="top" src="https://picsum.photos/200" />
                                <Card.Body>
                                    <Card.Title>{product.ProductName}</Card.Title>
                                    <Card.Text>{product.ProductDesc}</Card.Text>
                                    <div className="row no-gutters">
                                        <div className="col-sm">
                                            <button
                                                className="btn btn-primary btn-block" 
                                                onClick={() => onIncrement(product)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-sm">
                                            <label className="mt-1">{ product.selectedItems }</label>
                                        </div>
                                        <div className="col-sm">
                                            <button
                                                className="btn btn-danger btn-block"
                                                disabled={product.selectedItems === 0 ? true : false}
                                                onClick={() => onDecrement(product)}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            ))}
        </React.Fragment>
     );
}
 
export default Products;