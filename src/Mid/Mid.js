import React, {Component} from 'react';
import Timer from '../Timer/Timer';
import ScrambleBar from '../ScrambleBar/ScrambleBar';
import AverageBar from '../AverageBar/AverageBar';
import './Mid.css';

class Mid extends Component{
	render(){
		return(
			<div id="midWrapper">

				<ScrambleBar />
				<Timer id="timer"/>
				<AverageBar />

			</div>
			);
	}
}

export default Mid;