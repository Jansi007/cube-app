import React, {Component} from 'react';
import Timer from '../Timer/Timer';
import AverageBar from '../AverageBar/AverageBar';
import ResetBar from '../ResetBar/ResetBar';
import './Mid.css';

class Mid extends Component{
	render(){
		return(
			<div id="midWrapper">

				<ResetBar />
				<Timer id="timer"/>
				<AverageBar />

			</div>
			);
	}
}

export default Mid;