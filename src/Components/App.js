import React from 'react';
import DropdownBtn from './DropdownBtn';
import Screen from './Screen';
import Keypad from './Keypad';
import Dropdown from './Dropdown';

class App extends React.Component {
    state = {
        isDropdownOpen: false,
        display: "0",
        history: {}
    }
    // Uses the eval method to take a string and evaluate the Math.
    calculate = () => {
        this.setState({ display: eval(this.state.display) })
    }
    clear = () => {
        this.setState({ display: '0' })
    }
    fahrToCelcius = () => {
        this.setState({ display: (this.state.display - 32) * 5 / 9 })
        this.closeDropdown();
    }
    convertFeet = () => {
        this.setState({ display: this.state.display * 12 })
        this.closeDropdown();
    }
    // Takes the button "name" value and saves it in state.
    handleClick = (button) => {
        if (button === 'C') {
            this.clear();
        } else if (button === '=') {
            this.calculate();
        } else if (this.state.display === '0') {
            this.setState({ display: button });
        } else if (this.state.display.length < 9) {
            this.setState({ display: this.state.display + button });
        }
    }
    handleDropdownClick = () => {
        this.setState({ isDropdownOpen: true })
    }
    closeDropdown = () => {
        this.setState({ isDropdownOpen: false })
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
                    convertFeet={this.convertFeet}
                    fahrToCelcius={this.fahrToCelcius}
                    closeDropdown={this.closeDropdown}
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