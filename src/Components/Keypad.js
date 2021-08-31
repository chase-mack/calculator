import React from 'react';

class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
                <button className="btn clear">C</button>
                <button className="btn operand divider">÷</button>
                <button className="btn operand multiply">x</button>
                <button className="btn numbtn seven">7</button>
                <button className="btn numbtn eight">8</button>
                <button className="btn numbtn nine">9</button>
                <button className="btn operand minus">-</button>
                <button className="btn numbtn four">4</button>
                <button className="btn numbtn five">5</button>
                <button className="btn numbtn six">6</button>
                <button className="btn operand plus">+</button>
                <button className="btn numbtn one">1</button>
                <button className="btn numbtn two">2</button>
                <button className="btn numbtn three">3</button>
                <button className="btn numbtn zero">0</button>
                <button className="btn numbtn decimal">.</button>
                <button className="btn operand equals">=</button>
            </div>
        )
    }
}

export default Keypad;