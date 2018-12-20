import React, { Component } from 'react';
import './App.css';
import Left from '../Left/Left';
import Mid from '../Mid/Mid';
import Right from '../Right/Right';

class App extends Component {
	render() {
    	return (
      		<div className="App" id="appWrapper">
				
				<Left />
				<Mid />
				<Right />

    		</div>
    	);
	}
}

export default App;
