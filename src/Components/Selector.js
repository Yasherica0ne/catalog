import React from "react";

class Selector extends React.Component {
    render() {
        const options = this.props.optionValues;
        if (options.length > 0) {
            let selectedValue = this.props.selectedValue;
            let counter = 0;
            const placeholder = this.props.placeholder;
            selectedValue = selectedValue || 'default';
            let tittle = this.props.select;
            if (!tittle) tittle = '';
            return (
                <select value={selectedValue} onChange={this.props.changeIvent}>
                    <option value="default" disabled hidden>{placeholder}</option>
                    {options.map((option) => {
                        return (
                            <option value={option} title={tittle} key={counter++}>{option}</option>
                        )
                    })}
                </select>
            );
        }
        else return null;
    }
}

export default Selector;
