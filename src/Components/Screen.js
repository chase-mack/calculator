import React from 'react';

class Screen extends React.Component {
    render() {
        // Sets the h1 to the display state.
        let { display } = this.props
        return (
            <div className="screen">
                <h1>{display}</h1>
            </div>
        )
    }
}

export default Screen;