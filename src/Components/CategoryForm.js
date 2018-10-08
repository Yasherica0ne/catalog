import React from "react";

function GetEmptyCategory() {
    return {
        id: -1,
        categoryName: '',
        categoryAttributes: new Map()
    }
}

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: GetEmptyCategory(),
            categoryAttribute: '',
            categoryAttributeValue: '',
            categoriesCounter: this.props.categoriesCount,
            isAttributeSaved: false
        };
        this.onCategoryNameChange = (e) => {
            const category = this.state.category;
            category.categoryName = e.target.value;
            this.setState({
                category: category
            })
        }
        this.onAttributeChange = (e) => {
            const attribute = e.target.value;
            this.setState({
                categoryAttribute: attribute
            })
        }
        this.onAttributeValueChange = (e) => {
            const attributeValue = e.target.value;
            this.setState({
                categoryAttributeValue: attributeValue
            })

        }
        this.onAttributeAddButtonClick = () => {
            const attribute = this.state.categoryAttribute;
            this.state.category.categoryAttributes.set(attribute, []);
            this.setState({
                isAttributeSaved: true
            })
        }
        this.onAttributeValueAddButtonClick = () => {
            const attribute = this.state.categoryAttribute;
            const attributes = this.state.category.categoryAttributes.get(attribute);
            const attributeValue = this.state.categoryAttributeValue;
            attributes.push(attributeValue);
            this.setState({
                categoryAttributeValue: ''
            })
        }
        this.onAttributeSaved = () => {
            this.setState({
                isAttributeSaved: false,
                categoryAttribute: '',
                categoryAttributeValue: ''
            })
        }
        this.onAddCategorySaveButtonClick = () => {
            const category = this.state.category;
            if(!category.categoryName)
            {
                alert("You shold enter category name!");
                return null;
            }
            const categoriesCount = this.state.categoriesCounter;
            category.id = categoriesCount;
            const AddCategory = this.props.addCategory;
            AddCategory(category);
            this.setState({
                categoriesCounter: categoriesCount + 1,
                category: GetEmptyCategory(),
                categoryAttribute: '',
                categoryAttributeValue: '',
                isAttributeSaved: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add category form</h3>
                <input value={this.state.category.categoryName} onChange={this.onCategoryNameChange} placeholder={'Category name'} />
                <br />

                <input value={this.state.categoryAttribute} onChange={this.onAttributeChange} placeholder={'Attribute name'} />
                <button disabled={this.state.isAttributeSaved} onClick={this.onAttributeAddButtonClick}>Add attribute</button>
                <br />

                <input value={this.state.categoryAttributeValue} onChange={this.onAttributeValueChange} placeholder={'Attribute value'} />
                <button disabled={!this.state.isAttributeSaved} onClick={this.onAttributeValueAddButtonClick}>Add value</button>
                <br />

                <button disabled={!this.state.isAttributeSaved} onClick={this.onAttributeSaved}>Save attribute</button>
                <br />

                <button style={{ marginTop: '2vh' }} onClick={this.onAddCategorySaveButtonClick}>Save category</button>
            </React.Fragment>
        );
    }
}

export default CategoryForm;
