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
            categoriesCounter: this.props.categoriesCount
        };
        this.onCategoryNameChange = (e) => {
            this.state.category.categoryName = e.target.value;
        }
        this.onAttributeChange = (e) => {
            const attribute = e.target.value;
            this.state.categoryAttribute = attribute;
        }
        this.onAttributeValueChange = (e) => {
            const attribueValue = e.target.value;
            this.state.categoryAttributeValue = attribueValue;
        }
        this.onAttributeAddButtonClick = () => {
            const attribute = this.state.categoryAttribute;
            this.state.category.categoryAttributes.set(attribute, []);
        }
        this.onAttributeValueAddButtonClick = () => {
            const attribute = this.state.categoryAttribute;
            const attributes = this.state.category.categoryAttributes.get(attribute);
            const attributeValue = this.state.categoryAttributeValue;
            attributes.push(attributeValue);
        }
        this.onAddCategorySaveButtonClick = () => {
            const category = this.state.category;
            const categoriesCount = this.state.categoriesCounter;
            category.id = categoriesCount;
            const AddCategory = this.props.addCategory;
            AddCategory(category);
            this.setState({
                categoriesCounter: categoriesCount + 1,
                category: GetEmptyCategory()
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.onCategoryNameChange} placeholder={'Category name'}/>
                <br/>

                <input onChange={this.onAttributeChange} placeholder={'Attribute name'}/>
                <button onClick={this.onAttributeAddButtonClick}>Add attribute</button>
                <br/>

                <input onChange={this.onAttributeValueChange} placeholder={'Attribute value'}/>
                <button onClick={this.onAttributeValueAddButtonClick}>Add value</button>
                <br/>

                <button onClick={this.onAddCategorySaveButtonClick}>Save</button>
            </React.Fragment>
        );
    }
}

export default CategoryForm;
