import React, { Component } from 'react';
import Cars from './Cars'

class Products extends Component{
    printProduct(product){
        return 'Product Name: ' + product
    }
    render(){
        let myProduct = {itemName: 'computer', model: 'Macbook Pro'};

        return(
            <div>
                Hello World: I'm inside Products {this.printProduct(myProduct.itemName)} {this.printProduct(myProduct.model)}
                <Cars />
                {this.props.productName}
            </div>
        )
    }
}

export default Products