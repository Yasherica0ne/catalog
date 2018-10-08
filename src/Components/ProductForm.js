import React from "react";
import Selectors from "./Selectors";
import Selector from "./Selector";

function GetDate() {
    const date = new Date();
    return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
}

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.GetEmptyProduct = () => {
            return {
                id: -1,
                productName: '',
                createDate: '',
                category: '',
                categoryAttributes: new Map()
            }
        }

        this.state = {
            product: this.GetEmptyProduct(),
            productsCounter: this.props.productsCount
        };
        this.onProductNameChange = (e) => {
            this.state.product.productName = e.target.value;
            const product = this.state.product;
            this.setState({
                product: product
            })
        }
        this.onAttributeValueAdd = (e) => {
            const selectedTittle = e.target.selectedOptions[0].title;
            const product = this.state.product;
            product.categoryAttributes.set(selectedTittle, e.target.value);
            this.setState({
                product: product
            })
        }
        this.onCategoryChange = (e) => {
            const category = e.target.value;
            let product = this.state.product;
            product.category = category;
            product.categoryAttributes = new Map();
            this.setState({
                product: product
            })
        }
        this.onProductAddButtonClick = () => {
            if (this.state.product.id === -1) {
                const product = this.state.product;
                const productsCount = this.state.productsCounter;
                product.id = productsCount;
                const AddProduct = this.props.addProduct;
                AddProduct(product);
                this.setState({
                    productsCounter: productsCount + 1,
                    product: this.GetEmptyProduct()
                })
            }
            else {
                let ProductChange = this.props.onProductChange;
                this.setState({
                    product: this.GetEmptyProduct()
                })
                ProductChange();
            }
        }
    }


    render() {
        const categories = this.props.categories;
        if (categories.length > 0) {
            const selectedProduct = this.props.selectedProduct;
            if (selectedProduct) {
                this.state.product = selectedProduct;
            }
            const categoryNames = categories.map(category => category.categoryName);
            const category = categories.find(category => category.categoryName === this.state.product.category);
            let attributes = new Map();
            if (category) {
                attributes = category.categoryAttributes;
            }
            return (
                <React.Fragment>
                    <h3>Add product form</h3>
                    <input value={this.state.product.productName} onChange={this.onProductNameChange}
                        placeholder={'Product name'} />
                    <br />

                    <Selector placeholder={'Choose category'} selectedValue={this.state.product.category} changeIvent={this.onCategoryChange}
                        optionValues={categoryNames} />
                    <br />

                    <Selectors selectedValues={this.state.product.categoryAttributes} onAdd={this.onAttributeValueAdd}
                        attributes={attributes} />
                    <br />

                    <button disabled={this.state.product.productName === '' ? true : false} onClick={this.onProductAddButtonClick}>Save</button>
                </React.Fragment>
            );
        }
        return null;
    }
}

export default ProductForm;
