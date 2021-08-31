import React from 'react';

class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad">
                <button className="btn clear">C</button>
                <button className="btn operand">÷</button>
                <button className="btn operand">x</button>
                <button className="btn numbtn">7</button>
                <button className="btn numbtn">8</button>
                <button className="btn numbtn">9</button>
                <button className="btn operand">-</button>
                <button className="btn numbtn">4</button>
                <button className="btn numbtn">5</button>
                <button className="btn numbtn">6</button>
                <button className="btn operand">+</button>
                <button className="btn numbtn">1</button>
                <button className="btn numbtn">2</button>
                <button className="btn numbtn">3</button>
                <button className="btn numbtn">0</button>
                <button className="btn numbtn">.</button>
                <button className="btn equals">=</button>
            </div>
        )
    }
}

export default Keypad;