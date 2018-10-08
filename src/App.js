import React from "react";
import './App.css';
import CategoryForm from "./Components/CategoryForm";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    productName: 'Product1',
                    createDate: '06.10.2018',
                    category: 'Category1',
                    categoryAttributes: new Map([
                        ['attribute1', 'value1'],
                        ['attribute2', 'value4']
                    ])
                },
                {
                    id: 2,
                    productName: 'Product2',
                    createDate: '06.10.2018',
                    category: 'Category2',
                    categoryAttributes: new Map([
                        ['attribute3', 'value6'],
                        ['attribute4', 'value7']
                    ])
                }
            ],
            categories: [
                {
                    id: 1,
                    categoryName: 'Category1',
                    categoryAttributes: new Map([
                        ['attribute1', ['value1', 'value2']],
                        ['attribute2', ['value3', 'value4']]
                    ])
                },
                {
                    id: 2,
                    categoryName: 'Category2',
                    categoryAttributes: new Map([
                        ['attribute3', ['value5', 'value6']],
                        ['attribute4', ['value7', 'value8']]
                    ])
                }
            ],
            selectedProduct: null
        };

        this.CategoryAdd = (category) => {
            const categories = [...this.state.categories];
            categories.push(category);
            this.setState({
                categories: categories,
            })
        }

        this.ProductAdd = (product) => {
            const products = [...this.state.products];
            products.push(product);
            this.setState({
                products: products,
                selectedProduct: null
            })
        }
        this.onProductChanged = () => {
            const products = this.state.products;
            this.setState({
                products: products,
                selectedProduct: null
            })
        }
        this.onProductSelect = (e) => {
            const product = this.state.products.find(product => product.productName === e.target.textContent);
            debugger;
            this.setState({
                selectedProduct: product
            })
        }
    }

    render() {
        return (
            <React.Fragment>

                <div style={{position: 'absolute'}}>
                    <CategoryForm categoriesCount={this.state.categories.length} addCategory={this.CategoryAdd}/>
                </div>

                <div style={{borderLeft: '2px solid gray', paddingLeft: '1vw', position: 'absolute', marginLeft: '33vw'}}>
                    <ProductForm productsCount={this.state.products.length} selectedProduct={this.state.selectedProduct}
                                 categories={this.state.categories}
                                 addProduct={this.ProductAdd} onProductChange={this.onProductChanged}/>
                </div>

                <div style={{borderLeft: '2px solid gray', paddingLeft: '1vw', position: 'absolute', marginLeft: '66vw'}}>
                    <ProductList productSelect={this.onProductSelect} products={this.state.products}/>
                </div>

            </React.Fragment>
        );
    }
}

export default App;
