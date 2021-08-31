import React from 'react';
import DropdownBtn from './DropdownBtn';
import Screen from './Screen';
import Keypad from './Keypad';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header>
                    <div className="notch"/>
                    <DropdownBtn />
                </header>
                <Screen />
                <Keypad />
                <div className="home"/>
            </div>
        )
    }
}

export default App;