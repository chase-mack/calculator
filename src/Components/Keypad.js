import React from 'react';

class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
                <button onClick={e => this.props.handleClick(e.target.name)} name="C" className="btn clear">C</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="/" className="btn operand divider">÷</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="*" className="btn operand multiply">x</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="7" className="btn number seven">7</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="8" className="btn number eight">8</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="9" className="btn number nine">9</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="-" className="btn operand minus">-</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="4" className="btn number four">4</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="5" className="btn number five">5</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="6" className="btn number six">6</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="+" className="btn operand plus">+</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="1" className="btn number one">1</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="2" className="btn number two">2</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="3" className="btn number three">3</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="0" className="btn number zero">0</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="." className="btn number decimal">.</button>
                <button onClick={e => this.props.handleClick(e.target.name)} name="=" className="btn operand equals">=</button>
            </div>
        )
    }
}

export default Keypad;