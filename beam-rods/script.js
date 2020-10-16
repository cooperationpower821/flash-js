
var hooks = 10;
var operator = 0;
var rod_top = 73;
var backgrounds = [
	'#f65e2f',
	'#3f51b5',
	'#bc9110',
	'#000000',
	'#2f8f33',
	'#ffeb3b',
	'#9c27b0',
	'#7cdb7f',
	'#fc1605',
	'#fef8ba',
	'grey'
];
var rod_num = 0;
var offsetX, offsetY, layerX, layerY;
var offset = 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
if (!isFirefox && false) {
	offset = 0.2;
}

function setHooks () {
	var input = document.getElementsByTagName('input')[0];
	hooks = input.value;
	rod_num = 0;
	document.getElementById('rods_container').innerHTML = "";
	drawBeamBar();
}

function drawBeamBar() {
	document.getElementById('beam_bar').setAttribute('class', 'equal');
	var beam_v_bar = document.getElementById('beam_v_bar');
	beam_v_bar.innerHTML = "";
	for (var i = 0; i < hooks; i++) {
		var left_div = document.createElement('div');
		var right_div = document.createElement('div');
		var left = 300 / hooks * i - 5;
		left_div.setAttribute('style', 'left:'+left+'px;background:'+backgrounds[i+10-hooks]);
		beam_v_bar.appendChild(left_div);
		var left = 600 - 300 / hooks * i - 5;
		right_div.setAttribute('style', 'left:'+left+'px;background:'+backgrounds[i+10-hooks]);
		beam_v_bar.appendChild(right_div);
	}
}

drawBeamBar(hooks);


function drawRod (x, y, type, id) {
	var rod_id = "rod_" + rod_num;
	rod_num++;
	var rod_style =  'position:absolute;left:' + x + 'px;top:' + y + 'px;';
	rod_style = rod_style + "width:17px;height:" + (type * 20 + 20 -1) + "px;";
	if (id == null || id == "null") {
		var new_rod = document.createElement('div');
		new_rod.setAttribute('style', rod_style);
		new_rod.setAttribute('class', 'rod rod-' + type);
		new_rod.setAttribute('id', rod_id);
		new_rod.setAttribute('type', type);
		new_rod.setAttribute('x', x);
		new_rod.setAttribute('y', y);
		// new_rod.setAttribute('ondragstart', 'drag(event)');
		// new_rod.setAttribute('ondrag', 'dragging(event)');
		new_rod.setAttribute('onmousedown', 'mousedown(event)');
		document.getElementById('rods_container').appendChild(new_rod);
	} else {
		document.getElementById(id).setAttribute('style', rod_style);
		document.getElementById(id).setAttribute('x', x);
		document.getElementById(id).setAttribute('y', y);
	}
}

var dragging = false;
var sel_rod_id = '';
function mousedown(ev) {
	dragging = true;
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	sel_rod_id = ev.target.getAttribute('id');
}
function mousemove(ev) {
	if (dragging) {
		layerX = Math.round(ev.clientX - 348 - offsetX);
		layerY = Math.round(ev.clientY - 8 - offsetY);
		var type = document.getElementById(sel_rod_id).getAttribute('type');
		var rod_style =  'position:absolute;left:' + layerX + 'px;top:' + layerY + 'px;';
		rod_style = rod_style + "width:17px;height:" + (type * 20 + 20 -1) + "px;";
		document.getElementById(sel_rod_id).setAttribute('style', rod_style);
	}
}
function mouseup(ev) {
	dropRod(ev.clientX, ev.clientY, document.getElementById(sel_rod_id).getAttribute('type'), document.getElementById(sel_rod_id).getAttribute('id'));
	dragging = false;
	sel_rod_id = '';
}

function allowDrop (ev) {
  ev.preventDefault();
}

function drag (ev) {
	document.getElementById('main_board').setAttribute('ondragover', 'allowDrop(event)');
	document.getElementById('main_board').setAttribute('ondrop', 'drop(event)');
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', ev.target.getAttribute('type'));
	ev.dataTransfer.setData('rod_id', ev.target.getAttribute('id'));
}

function drop (ev) {
	ev.preventDefault();
	dropRod(ev.clientX, ev.clientY, ev.dataTransfer.getData('rod_type'), ev.dataTransfer.getData('rod_id'));
	document.getElementById('main_board').removeAttribute('ondragover');
	document.getElementById('main_board').removeAttribute('ondrop');
}

function dropRod(clientX, clientY, type, id) {
	layerX = Math.round(clientX - 368 + 10 - offsetX);
	layerY = Math.round(clientY - 28 + 10 - offsetY);

	//calculate x position from layerX, hooks
	var pos_num = Math.round((layerX - offsetX)/(300/hooks));
	if (pos_num < 0 || pos_num == -0) pos_num = 0;
	var x = pos_num * 300 / hooks + 10;
	var y = rod_top;
	var rods = document.getElementsByClassName('rod');

	//draw droped rod. data from dataTransfer
	if (clientX > 340) {
		drawRod(x, y, type, id);
	} else {
		if (id != "null") {
			document.getElementById(id).remove();
		}
	}

	var left_rods = 0;
	var right_rods = 0;
	var rods_y = {};
	for (var i = 0; i < rods.length; i++) {
		pos_num = Math.round((rods[i].getAttribute('x') - 10) / (300 / hooks));
		if (rods_y[pos_num] != null && rods_y[pos_num] > 0) {
			y = rods_y[pos_num] * 20 + rod_top;
			rods_y[pos_num] = Number(rods_y[pos_num]) + Number(rods[i].getAttribute('type')) + 1;
		} else {
			y = rod_top;
			rods_y[pos_num] = Number(rods[i].getAttribute('type')) + 1;
		}
		if (pos_num < hooks) {
			left_rods = Number(left_rods) + Number((hooks - pos_num) * (Number(rods[i].getAttribute('type')) + 1));
		} else {
			right_rods = Number(right_rods) + Number((pos_num - hooks) * (Number(rods[i].getAttribute('type')) + 1));
		}
		drawRod(rods[i].getAttribute('x'), y, rods[i].getAttribute('type'), rods[i].getAttribute('id'));
	}
	if (left_rods < right_rods) {
		document.getElementById('beam_bar').setAttribute('class', 'small');
	} else if (left_rods > right_rods) {
		document.getElementById('beam_bar').setAttribute('class', 'big');
	} else {
		document.getElementById('beam_bar').setAttribute('class', 'equal');
	}
	if (left_rods != right_rods) {
		for (var i = 0; i < rods.length; i++) {
			pos_num = Math.round((rods[i].getAttribute('x') - 10) / (300 / hooks));
			y = Number(rods[i].getAttribute('y'));
			if (left_rods < right_rods) {
				if (pos_num < hooks) {
					y = y + 300 * (hooks - pos_num) / hooks * Math.cos(8);
				} else if (pos_num > hooks) {
					y = y - Math.round(300 * (pos_num - hooks) / hooks * Math.cos(8));
				}
			} else if (left_rods > right_rods) {
				if (pos_num < hooks) {
					y = y - 300 * (hooks - pos_num) / hooks * Math.cos(8);
				} else if (pos_num > hooks) {
					y = y + 300 * (pos_num - hooks) / hooks * Math.cos(8);
				}
			}
			drawRod(rods[i].getAttribute('x'), y, rods[i].getAttribute('type'), rods[i].getAttribute('id'));
		}
	}
}