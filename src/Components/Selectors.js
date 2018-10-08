import React from "react";
import Selector from "./Selector";

class Selectors extends React.Component {
    render() {
        const attributes = this.props.attributes;
        const selectedValues = this.props.selectedValues;
        let attributesNames = [];
        for (let attributeName of attributes.keys()) {
            let selectedValue = '';
            if (selectedValues.size !== 0) selectedValue = selectedValues.get(attributeName);
            attributesNames.push(<React.Fragment>
                <div>{attributeName + ' '}
                    <Selector placeholder={'Choose value'} selectedValue={selectedValue} select={attributeName}
                              changeIvent={this.props.onAdd} optionValues={attributes.get(attributeName)}></Selector>
                </div>
                <br/></React.Fragment>);
        }
        return (
            <React.Fragment>
                {attributesNames}
            </React.Fragment>
        );
    }
}

export default Selectors;
