import React from 'react';

const dropdownDisplay = {
    hidden: { display: 'none' },
    visible: { display: 'grid' }
}

class Dropdown extends React.Component {
    render() {
        return (
            // Sets dropdown div display to none when dropdown state is not open.
            <div style={this.props.isDropdownOpen ? dropdownDisplay.visible : dropdownDisplay.hidden} className="dropdown">
                <button onClick={this.props.convertFeet} className="btn dropbtn">Ft / In</button>
                <button onClick={this.props.fahrToCelcius} className="btn dropbtn">F / C</button>
                <button className="btn dropbtn">Dark</button>
                <button className="btn dropbtn">Lite</button>
                <button id="close-dropdown" onClick={this.props.closeDropdown}>
                    <span className="dropdown-anchor" />
                </button>
            </div>
        )
    }
}

export default Dropdown;