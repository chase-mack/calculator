import React from 'react';

class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
                <button onClick={this.props.handleCalcBtnClick} value="C" className="btn clear">C</button>
                <button onClick={this.props.handleCalcBtnClick} value="÷" className="btn operand divider">÷</button>
                <button onClick={this.props.handleCalcBtnClick} value="x" className="btn operand multiply">x</button>
                <button onClick={this.props.handleCalcBtnClick} value="7" className="btn number seven">7</button>
                <button onClick={this.props.handleCalcBtnClick} value="8" className="btn number eight">8</button>
                <button onClick={this.props.handleCalcBtnClick} value="9" className="btn number nine">9</button>
                <button onClick={this.props.handleCalcBtnClick} value="-" className="btn operand minus">-</button>
                <button onClick={this.props.handleCalcBtnClick} value="4" className="btn number four">4</button>
                <button onClick={this.props.handleCalcBtnClick} value="5" className="btn number five">5</button>
                <button onClick={this.props.handleCalcBtnClick} value="6" className="btn number six">6</button>
                <button onClick={this.props.handleCalcBtnClick} value="+" className="btn operand plus">+</button>
                <button onClick={this.props.handleCalcBtnClick} value="1" className="btn number one">1</button>
                <button onClick={this.props.handleCalcBtnClick} value="2" className="btn number two">2</button>
                <button onClick={this.props.handleCalcBtnClick} value="3" className="btn number three">3</button>
                <button onClick={this.props.handleCalcBtnClick} value="0" className="btn number zero">0</button>
                <button onClick={this.props.handleCalcBtnClick} value="." className="btn number decimal">.</button>
                <button onClick={this.props.handleCalcBtnClick} value="=" className="btn operand equals">=</button>
            </div>
        )
    }
}

export default Keypad;