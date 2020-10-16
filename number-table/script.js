total = 100;
count1 = '';
count2 = '';
show = 100;
speed = 5;

function drawRuler () {
	document.getElementById('h_ruler').innerHTML = "";
	document.getElementById('v_ruler').innerHTML = "";
	for (var i = 0; i < 50; i++) {
		var div = document.createElement('div');
		var span = document.createElement('span');
		span.innerHTML = i + 1;
		div.appendChild(span);
		document.getElementById('h_ruler').appendChild(div);
		document.getElementById('v_ruler').appendChild(div.cloneNode(true));
	}
}
function drawMain (method) {
	if (method == 'start') {
		var clips = document.getElementsByClassName('clip');
		for (var i = 0; i < clips.length; i++) {
			clips[i].setAttribute('style', '');
		}
	} else if (method == 'stop') {
		var clips = document.getElementsByClassName('clip');
		for (var i = 1; i <= clips.length; i++) {
			if (Number(count1) > 0 && (i % Number(count1) == 0) && Number(count2) > 0 && (i % Number(count2) == 0)) {
				clips[i-1].setAttribute('style', 'background:#4caf50;');
			} else if (Number(count1) > 0 && (i % Number(count1) == 0)) {
				clips[i-1].setAttribute('style', 'background:#03A9F4;');
			} else if (Number(count2) > 0 && (i % Number(count2) == 0)) {
				clips[i-1].setAttribute('style', 'background:yellow;');
			}
		}
	} else {
		document.getElementById('main_board').innerHTML = "";
		for (var i = 1; i <= Number(total); i++) {
			var div = document.createElement('div');
			if (Math.random() * 100 < Number(show)) {
				var span = document.createElement('span');
				span.innerHTML = i;
				div.appendChild(span);
			}
			if (Number(count1) > 0 && (i % Number(count1) == 0) && Number(count2) > 0 && (i % Number(count2) == 0)) {
				div.setAttribute('style', 'background:#4caf50;');
			} else if (Number(count1) > 0 && (i % Number(count1) == 0)) {
				div.setAttribute('style', 'background:#03A9F4;');
			} else if (Number(count2) > 0 && (i % Number(count2) == 0)) {
				div.setAttribute('style', 'background:yellow;');
			}
			div.setAttribute('class', 'clip');
			document.getElementById('main_board').appendChild(div);
		}
	}
}

var interval, interval_num;
function start () {
	if (interval > 0) {
		clearInterval(interval);
	}
	interval_num = 0;
	drawMain('start');
	if (Number(speed) == 0) {
		interval = setInterval(play, 10);
	} else {
		interval = setInterval(play, 1000 - Number(speed) * 100);
	}
}
function stop () {
	clearInterval(interval);
	interval_num = 0;
	drawMain('stop');
}
function play () {
	interval_num++;
	if (document.getElementsByClassName('active').length >= 1)
		document.getElementsByClassName('active')[0].setAttribute('class', 'clip');
	if (interval_num <= Number(total)) {
		var clips = document.getElementsByClassName('clip');
		clips[interval_num-1].setAttribute('class', 'clip active');
		if (Number(count1) > 0 && (interval_num % Number(count1) == 0) && Number(count2) > 0 && (interval_num % Number(count2) == 0)) {
			clips[interval_num-1].setAttribute('style', 'background:#4caf50;');
			document.getElementById('audio_1').cloneNode(true).play();
			document.getElementById('audio_2').cloneNode(true).play();
		} else if (Number(count1) > 0 && (interval_num % Number(count1) == 0)) {
			clips[interval_num-1].setAttribute('style', 'background:#03A9F4;');
			document.getElementById('audio_1').cloneNode(true).play();
		} else if (Number(count2) > 0 && (interval_num % Number(count2) == 0)) {
			clips[interval_num-1].setAttribute('style', 'background:yellow;');
			document.getElementById('audio_2').cloneNode(true).play();
		}
	} else {
		stop();
	}
}

drawRuler();
drawMain();

function input (ev, type) {
	if (ev.data >= 0 && ev.data <= 9) {
		switch (type) {
			case 'total':
				if (ev.target.value > 999 || ev.target.value.length > 3) {
					ev.target.value = total;
				} else {
					total = ev.target.value;
					drawMain();
				}
				break;
			case 'count1':
				if (ev.target.value > 99 || ev.target.value.length > 2) {
					ev.target.value = count1;
				} else {
					count1 = ev.target.value;
					drawMain();
				}
				break;
			case 'count2':
				if (ev.target.value > 99 || ev.target.value.length > 2) {
					ev.target.value = count2;
				} else {
					count2 = ev.target.value;
					drawMain();
				}
				break;
			case 'show':
				if (ev.target.value > 100 || ev.target.value.length > 3) {
					ev.target.value = show;
				} else {
					show = ev.target.value;
					drawMain();
				}
				break;
			case 'speed':
				if (ev.target.value > 9 || ev.target.value.length > 1) {
					ev.target.value = speed;
				} else {
					speed = ev.target.value;
				}
				break;
			default:
				break;
		}
	} else {
		switch (type) {
			case 'total':
				ev.target.value = total;
				break;
			case 'count1':
				ev.target.value = count1;
				break;
			case 'count2':
				ev.target.value = count2;
				break;
			case 'show':
				ev.target.value = show;
				break;
			case 'speed':
				ev.target.value = speed;
				break;
			default:
				break;
		}
	}
}
var offsetX, offsetY;
var dragging = false;
function mousedown (ev) {
	dragging = true;
	offsetX = ev.offsetX;
	offsetY = ev.offsetY;
}
function mousemove(ev) {
	if (dragging) {
		var str = 'width:' + (ev.pageX-64) + 'px;height:' + (ev.pageY-114) + 'px;';
		document.getElementById('main_board_container').setAttribute('style', str);
	}
}
function mouseup(ev) {
	dragging = false;
}