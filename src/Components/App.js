import React from 'react';
import DropdownBtn from './DropdownBtn';
import Screen from './Screen';
import Keypad from './Keypad';
import Dropdown from './Dropdown';

class App extends React.Component {
    state = {
        isDropdownOpen: false,
        display: 0,
        firstOperand: null,
        secondOperand: null,
        operator: null,
        history: {}
    }

    calculate = () => {
        this.setState({ display: '' })
    }

    handleClick = () => {

    }
    allClear = () => {
        this.setState({ screenvalue: 0 })
    }
    handleDropdownClick = () => {
        this.setState({ isDropdownOpen: true })
    }
    render() {
        return (
            <div className="container">
                <header>
                    <div className="notch" />
                    <DropdownBtn
                        handleDropdownClick={this.handleDropdownClick}
                        isDropdownOpen={this.state.isDropdownOpen} />
                </header>
                <Dropdown
                    handleDropdownClick={this.handleDropdownClick}
                    isDropdownOpen={this.state.isDropdownOpen} />
                <Screen
                    display={this.state.display} />
                <Keypad
                    handleClick={this.handleClick} />
                <div className="home" />
            </div>
        )
    }
}

export default App;