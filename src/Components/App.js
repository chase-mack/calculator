import React from 'react';
import DropdownBtn from './DropdownBtn';
import Screen from './Screen';
import Keypad from './Keypad';
import Dropdown from './Dropdown';

class App extends React.Component {
    state = {
        isDropdownOpen: false,
        screenValue: '0',
        firstOperand: null,
        secondOperand: null,
        operator: null,
        history: {}
    }
    handleCalcBtnClick = (e) =>{
        this.setState({screenValue: e.target.value})
    }
    handleScreenChange = (e) => {
        this.setState({screenValue: e.target.value})
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
                    screenValue={this.state.screenValue}
                    handleScreenChange={this.handleScreenChange} />
                <Keypad
                    screenValue={this.state.screenValue}
                    handleCalcBtnClick={this.handleCalcBtnClick} />
                <div className="home" />
            </div>
        )
    }
}

export default App;