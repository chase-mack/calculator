import React from 'react';
import DropdownBtn from './DropdownBtn';
import Screen from './Screen';
import Keypad from './Keypad';
import Dropdown from './Dropdown';

class App extends React.Component {
    state = {
        currentEntry: 0,
        waitingForOperation: 0,
        history: {}
    }
    render() {
        return (
            <div className="container">
                <header>
                    <div className="notch" />
                    <DropdownBtn />
                </header>
                <Screen currentEntry={this.state.currentEntry} />
                <Keypad />
                <div className="home" />
            </div>
        )
    }
}

export default App;