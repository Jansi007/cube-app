import React, {Component} from 'react';
import './ScrambleBar.css';

class ScrambleBar extends Component{
	componentDidMount(){
		const scrambleBar = document.getElementById('scrambleBar');
		const scrambleList = ["R ", "R' ", "R2 ", "L ", "L' ", "L2 ", "U ", "U' ", "U2 ", "D ", "D' ", "D2 ", "F ", "F' ", "F2 ", "B ", "B' ", "B2 "];
		let scramble = '';

		for(let i = 0; i < 16; i++){
			scramble += scrambleList[Math.random() * scrambleList.length];
		}

		console.log(scramble)
	}
	render(){
		return(
				<div>
					<h1 id="scrambleBar"></h1>
				</div>
			);
	}
}

export default ScrambleBar;