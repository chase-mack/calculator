import React from 'react';

class Screen extends React.Component {
    render() {
        let { display } = this.props;
        return (
            <div className="screen">
                <h2></h2>
                <h1>{display}</h1>
            </div>
        )
    }
}

export default Screen;