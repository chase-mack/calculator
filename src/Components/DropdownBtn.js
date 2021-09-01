import React from 'react';

class DropdownBtn extends React.Component {
    render() {
        return (
            <button className="dropdown-btn" onClick={this.props.handleDropdownClick}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        )
    }
}

export default DropdownBtn;