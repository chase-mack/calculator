import React from 'react';

const dropdownDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'block' }
}

class Dropdown extends React.Component {
    render() {
        return (
            <div
            style={this.props.isDropdownOpen ? dropdownDisplay.visible : dropdownDisplay.hidden}
            className="dropdown"
            >

                <div className="home"></div>
            </div>
        )
    }
}

export default Dropdown;