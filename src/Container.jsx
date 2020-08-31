import React, { Component } from 'react';
import { gridCartItems, getCartItems, gridTotalItems } from './services/cart';
import Navbar from './Navbar';
import Sidenavbar from './Sidenavbar';
import Products from './Products';

class Container extends Component {
    state = {
        gridProducts: [],
        products: [],
        totalItems: 0
    }
    
    componentDidMount() {
        this.setState({
            gridProducts: gridCartItems(),
            products: getCartItems(),
            totalItems: gridTotalItems()
        });
    }

    handleIncrement = (product) => {
        console.log(this.state.products)
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].selectedItems++;
        const totalItems = this.state.totalItems+1;
        this.setState({
            products,
            totalItems
        });
    }

    handleDecrement = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].selectedItems--;
        const totalItems = this.state.totalItems-1;
        this.setState({
            products,
            totalItems
        });
    }

    render() {
        const { gridProducts, totalItems } = this.state; 
        return (
            <React.Fragment>
            <Sidenavbar totalCartItems={totalItems} />
            <Navbar />

            <div className="main container">
                <Products
                    productData={gridProducts}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
            </React.Fragment>
            
         );
    }
}
 
export default Container;