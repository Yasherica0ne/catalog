import React from "react";

class ProductList extends React.Component {
    render() {
        const products = this.props.products;
        let productNames = [];
        for (let product of products) {
            productNames.push(<div key={productNames.length} style={{cursor: 'pointer'}}
                                   onClick={this.props.productSelect}>{product.productName}</div>);
        }
        return (
            <React.Fragment>
                {productNames}
            </React.Fragment>
        );
    }
}

export default ProductList;
