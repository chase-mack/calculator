import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <h2></h2>
                <input type="text" value={this.props.screenValue} onChange={this.props.handleScreenChange} />
            </div>
        )
    }
}

export default Screen;