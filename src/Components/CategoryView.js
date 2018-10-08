import React from "react";

function GetValues(attributeValues)
{
    const values = [];
    for (let value of attributeValues) {
        values.push(<li key={value}>{value}</li>);
    }
    return values;
}

class CategoryView extends React.Component {
    render() {
        const category = this.props.category;
        const attributes = category.categoryAttributes;
        let productNames = [];
        for (let attribute of attributes.keys()) {
            productNames.push(<li key={attribute}>{attribute}<ul>{GetValues(attributes.get(attribute))}</ul></li>);
        }
        return (
            <React.Fragment>
            <h3>{category.categoryName}</h3>
                <ul>{productNames}</ul>
            </React.Fragment>
        );
    }
}

export default CategoryView;
