total = 100;
count1 = '';
count2 = '';
show = 100;
speed = 5;
type = 'number';

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
		show = Number(show); total = Number(total);
		var hide_num = (100 - show) * total / 100;
		var hide_index = [];
		while (hide_num > hide_index.length) {
			var index = Math.floor(Math.random()*total)+1;
			if (!hide_index.includes(index)) hide_index.push(index)
			// console.log(hide_index)
		}
		for (var i = 1; i <= total; i++) {
			var div = document.createElement('div');
			// if (Math.random() * 100 < show) {
			if (!hide_index.includes(i)) {
				var span = document.createElement('span');
				var x = document.getElementById('main_board_container').getAttribute('x');
				x = Number(x);
				if (type == 'plus') {
					span.innerHTML = Math.floor((i-1)/x)+((i-1)%x+1)+1;
				} else if (type == 'times') {
					span.innerHTML = (Math.floor((i-1)/x)+1)*((i-1)%x+1);
				} else {
					span.innerHTML = i;
				}
				
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
		var width = ev.pageX-64;
		var str = 'width:' + width + 'px;height:' + (ev.pageY-114) + 'px;';
		document.getElementById('main_board_container').setAttribute('style', str);

		var current_x = document.getElementById('main_board_container').getAttribute('x');
		var x = Math.floor((width - 2) / 40);
		if (current_x != x) {
			document.getElementById('main_board_container').setAttribute('x', x);
			drawMain();
		}
	}
}
function mouseup(ev) {
	dragging = false;
}

var rad = document.getElementsByClassName('radio_type');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        type = this.value;
        drawMain();
    });
}
