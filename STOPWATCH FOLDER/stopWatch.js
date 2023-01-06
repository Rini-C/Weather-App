let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let millisec= 00;

 function start() {
	timer = true;
	stopWatch();
};

 function stop() {
	timer = false;
};

 function reset() {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	millisec = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('millisec').innerHTML = "00";
};

function stopWatch() {
	if (timer) {
		millisec++;

		if (millisec == 100) {
			second++;
			millisec = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let millisecString = millisec;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (millisec < 10) {
			millisecString = "0" + millisecString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('millisec').innerHTML = millisecString;
		setTimeout(stopWatch, 10);
	}
}