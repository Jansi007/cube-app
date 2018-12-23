import React,{Component} from 'react';
import './Timer.css';

class Timer extends Component{

	componentDidMount(){
		const time = document.getElementById('time');
		const timer = document.getElementById('timer');
		const watch = new Stopwatch(time);
		const borderStyle = 'border: 1vh solid';
		const avrgBar = document.getElementById('avrgBar');
		let preAvrg = 0;
		let avrg;
		let results = [];
		let spaceReact = 0;
		let avrgFormatted;


		function Stopwatch(element){
			this.result = 0;
			this.isOn = false;
			let time = 0;
			let interval;
			let offset;
			let formattedTime;

			function delta(){
				let now = Date.now();
				let timePassed = now - offset;
				offset = now;
				return timePassed;
			}

			function update(){
				time += delta();
				formattedTime = format(time);
				element.textContent = formattedTime;
			}

			this.start = () =>{
				if(!this.isOn){
					interval = setInterval(update, 10);
					offset = Date.now();
					this.isOn = true;
				}
			}

			this.stop = () =>{
				if (this.isOn) {
					clearInterval(interval);
					this.result = time;
					interval = null;
					this.isOn = false;
				}
			}

			this.reset = () =>{
				time = 0;
				formattedTime = format(time);
				element.textContent = formattedTime;
			}
		}

		document.addEventListener('keypress', (event) => {
			if(event.keyCode === 32){
				switch (spaceReact){
					case 0:
						spaceReact = 1;
						break;
					case 2:
						spaceReact = 3;
						break;
					case 3:
						spaceReact = 4;
						break;
				}
			}
			switch(spaceReact){
			case 1:
				timer.style = borderStyle + '#888888';
				break;
			case 3:
				watch.stop();
				results.unshift(watch.result);
				calculateAvrg();
				avrgFormatted = format(avrg);
				avrgBar.innerHTML = avrgFormatted;
				if(avrgBar.innerHTML === 'average'){
						avrgBar.innerHTML =  avrgFormatted;
					}
				timer.style = borderStyle + '#a03c3c';
				updateResultMenu()
				break;
			case 4:
				watch.reset();
				spaceReact = 0;
				timer.style = borderStyle + '#eeeeee';
				break;
			}
		})

		document.addEventListener('keyup', (event) =>{
			if (event.keyCode === 32) {
				if(spaceReact === 1){
				spaceReact = 2;
				watch.start()
				timer.style = borderStyle + '#3C785A';		
				}
			}
		})

		function calculateAvrg(){
			let lenght = results.length;
			preAvrg = 0;
			for(let i = 0; i < results.length; i++){
				preAvrg += results[i];
			}
			avrg = preAvrg/lenght;
		}

		function format(num){
			const format = new Date(num);
			let min = format.getMinutes().toString();
			let sec = format.getSeconds().toString();
			let milsec = format.getMilliseconds().toString().slice(0, -1);
			if(min.length < 2){
				min = '0' + min;
			}
			if(sec.length < 2){
				sec = '0' + sec;
			}
			while(milsec.length < 2){
				milsec = '0' + milsec;
			}
			return min + ' : ' + sec + ' : ' + milsec;
		}

		function resetCount(){
			if(watch.isOn === false){
				results = [];
				avrg = 0;
				preAvrg = 0;
				avrgBar.innerHTML = 'average'
				watch.reset();
				timer.style = borderStyle + '#eeeeee';
				spaceReact = 0;
			}
		}

		document.addEventListener('keypress', (event) =>{
			if(event.keyCode === 114){
				resetCount();
			}
		})

		function updateResultMenu(){
			for(let i = 0; i < results.length; i++){
				
			}
		}
	}

	render(){
		return(
			<div>

				<div className="" id="timeBase">
						<div className="" id="timer">
							<h1 id="time">00 : 00 : 00</h1>
						</div>
				</div>
		
			</div>
		);
	}
}

export default Timer;