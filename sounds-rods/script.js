var rod_num = 0;
var rod_background = ['']
var offsetX, offsetY, layerX, layerY;
var rod_player_x, rod_player_y, interval_play, rod_player_id, played_rod;

function drawGrid (count) {
	var v_bar = document.getElementById('v_bar');
	v_bar.innerHTML = "";
	for (var i = 0; i <= count * 2; i ++) {
		var new_grid = document.createElement('div');
		v_bar.appendChild(new_grid);
	}
	var h_bar = document.getElementById('h_bar');
	h_bar.innerHTML = "";
	for (var i = 0; i <= count * 2; i ++) {
		var new_grid = document.createElement('div');
		h_bar.appendChild(new_grid);
	}
}

drawGrid(17);

var offset = 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
if (!isFirefox && false) {
	offset = 0.2;
}


function startPlayRods (x, y) {
	rod_player_x = x;
	rod_player_y = y;
	played_rod = "";
	document.getElementById(rod_player_id).setAttribute('style', 'left:'+rod_player_x+'px;top:'+rod_player_y+'px;');
	if (interval_play > 0) clearInterval(interval_play);
	interval_play = setInterval(playRods, 20);
}

function playSounds (rod_ids) {
	rod_ids = rod_ids.split('&');
	console.log(rod_ids);
	for (var i = 1; i < rod_ids.length; i++) {
		var type = document.getElementById(rod_ids[i]).getAttribute('type')
		if (type < 10) {
			var audio_id = "audio_" + type;
			var cln = document.getElementById(audio_id).cloneNode(true);
			cln.play();
		}
	}
}

function playRods () {
	if (rod_player_y > 400) {
		document.getElementById(rod_player_id).remove();
		clearInterval(interval_play);
		return;
	}
	var rods = document.getElementsByClassName('rod');
	var play_num = 0;
	rod_player_y = rod_player_y + 3;
	document.getElementById(rod_player_id).setAttribute('style', 'left:'+rod_player_x+'px;top:'+rod_player_y+'px;');
	var tmp_played_rod = "";
	for (var i = 0; i < rods.length; i++) {
		var type = rods[i].getAttribute('type');
		var direction = rods[i].getAttribute('direction');
		var x = rods[i].getAttribute('x');
		var y = rods[i].getAttribute('y');
		//check if rods[i] is belong to the current player position
		if (direction == 'h') {
			if (((rod_player_x - x) > -10 && (rod_player_x - x) < (type * 20 + 10)) && (Math.abs(y - rod_player_y) < 10)) {
				tmp_played_rod = tmp_played_rod + '&' + rods[i].getAttribute('id');
			}
		} else {
			if (((rod_player_y - y) > -10 && (rod_player_y - y) < (type * 20 + 10)) && (Math.abs(x - rod_player_x) < 10)) {
				tmp_played_rod = tmp_played_rod + '&' + rods[i].getAttribute('id');
			}
		}
	}
	if (played_rod != tmp_played_rod && tmp_played_rod != "") {
		played_rod = tmp_played_rod;
		playSounds(played_rod);
	}
}

function splitRod (x, y) {
	x = x + 20;
	y = y + 20;
	var rods = document.getElementsByClassName('rod');
	for (var i = rods.length - 1; i >= 0; i--) {
		var type = rods[i].getAttribute('type');
		var direction = rods[i].getAttribute('direction');
		var x1 = rods[i].getAttribute('x');
		var y1 = rods[i].getAttribute('y');
		if (direction == 'h' && type != 0) {
			if (((x - x1) > 10 && (x - x1) < (type * 20 + 10)) && ((y - y1) > 0) && ((y - y1) < 20)) {
				var type1 = Math.round((x - x1) / 20);
				var type2 = type - type1;
				var x2 = Number(x1) + 20 * type1;
				type1 = type1 - 1;
				rods[i].remove();
				drawRod(x1, y1, type1, direction, "null");
				drawRod(x2, y1, type2, direction, "null");
				break;
			}
		} else if (type != 0) {
			if (((y - y1) > 10 && (y - y1) < (type * 20 + 10)) && ((x - x1) > 0) && ((x - x1) < 20)) {
				var type1 = Math.round((y - y1) / 20);
				var type2 = type - type1;
				var y2 = Number(y1) + 20 * type1;
				type1 = type1 - 1;
				rods[i].remove();
				drawRod(x1, y1, type1, direction, "null");
				drawRod(x1, y2, type2, direction, "null");
				break;
			}
		}
	}
}

function mergeVRod (x, y) {
	var rods = document.getElementsByClassName('rod');
	var rod1 = -1;
	for (var i = rods.length - 1; i >= 0; i--) {
		var type = rods[i].getAttribute('type');
		var direction = rods[i].getAttribute('direction');
		var x1 = rods[i].getAttribute('x');
		var y1 = rods[i].getAttribute('y');
		if (direction == 'h') {
			if (((x - x1) > -10 && (x - x1) < (type * 20 + 10)) && ((y - y1) > -19) && ((y - y1) < 19)) {
				if (rod1 != -1) {
					type = Number(type) + Number(rods[rod1].getAttribute('type')) + 1;
					direction = rods[rod1].getAttribute('direction');
					if (rods[i].getAttribute('x') > rods[rod1].getAttribute('x')) {
						x = rods[rod1].getAttribute('x');
						y = rods[rod1].getAttribute('y');
					} else {
						x = rods[i].getAttribute('x');
						y = rods[i].getAttribute('y');
					}
					rods[rod1].remove();
					rods[i].remove();
					drawRod(x, y, type, direction, "null");
					break;
				} else {
					rod1 = i;
				}
			}
		} else {
			if ((((y - y1) > -19 && (y - y1) < 0) || ((y - y1) > (type * 20) && (y - y1) < (type * 20 + 19))) && ((x - x1) > -10) && ((x - x1) < 10)) {
				if (rod1 != -1) {
					type = Number(type) + Number(rods[rod1].getAttribute('type')) + 1;
					direction = rods[rod1].getAttribute('direction');
					if (rods[i].getAttribute('x') > rods[rod1].getAttribute('x')) {
						x = rods[rod1].getAttribute('x');
						y = rods[rod1].getAttribute('y');
					} else {
						x = rods[i].getAttribute('x');
						y = rods[i].getAttribute('y');
					}
					rods[rod1].remove();
					rods[i].remove();
					drawRod(x, y, type, direction, "null");
					break;
				} else {
					rod1 = i;
				}
			}
		}
	}
}

function mergeHRod (x, y) {
	var rods = document.getElementsByClassName('rod');
	var rod1 = -1;
	for (var i = rods.length - 1; i >= 0; i--) {
		var type = rods[i].getAttribute('type');
		var direction = rods[i].getAttribute('direction');
		var x1 = rods[i].getAttribute('x');
		var y1 = rods[i].getAttribute('y');
		if (direction == 'v') {
			if (((y - y1) > -10 && (y - y1) < (type * 20 + 10)) && ((x - x1) > -19) && ((x - x1) < 19)) {
				if (rod1 != -1) {
					type = Number(type) + Number(rods[rod1].getAttribute('type')) + 1;
					direction = rods[rod1].getAttribute('direction');
					if (rods[i].getAttribute('y') > rods[rod1].getAttribute('y')) {
						x = rods[rod1].getAttribute('x');
						y = rods[rod1].getAttribute('y');
					} else {
						x = rods[i].getAttribute('x');
						y = rods[i].getAttribute('y');
					}
					rods[rod1].remove();
					rods[i].remove();
					drawRod(x, y, type, direction, "null");
					break;
				} else {
					rod1 = i;
				}
			}
		} else {
			if ((((x - x1) > -19 && (x - x1) < 0) || ((x - x1) > (type * 20) && (x - x1) < (type * 20 + 19))) && ((y - y1) > -10) && ((y - y1) < 10)) {
				if (rod1 != -1) {
					type = Number(type) + Number(rods[rod1].getAttribute('type')) + 1;
					direction = rods[rod1].getAttribute('direction');
					if (rods[i].getAttribute('y') > rods[rod1].getAttribute('y')) {
						x = rods[rod1].getAttribute('x');
						y = rods[rod1].getAttribute('y');
					} else {
						x = rods[i].getAttribute('x');
						y = rods[i].getAttribute('y');
					}
					rods[rod1].remove();
					rods[i].remove();
					drawRod(x, y, type, direction, "null");
					break;
				} else {
					rod1 = i;
				}
			}
		}
	}
}

function drawRod (x, y, type, direction, id) {
	// console.log(x, y, type, direction, id)
	var rod_id = "rod_" + rod_num;
	rod_num++;
	var rod_style =  'position:absolute;left:' + x + 'px;top:' + y + 'px;';
	if (direction == 'h') {
		rod_style = rod_style + "height:17px;width:" + (type * 20 + 20 - 2) + "px;";
	} else {
		rod_style = rod_style + "width:17px;height:" + (type * 20 + 20 - 2) + "px;";
	}
	if (id == null || id == "null") {
		var new_rod = document.createElement('div');
		new_rod.setAttribute('style', rod_style);
		new_rod.setAttribute('class', 'rod rod-' + type);
		new_rod.setAttribute('id', rod_id);
		new_rod.setAttribute('draggable', 'true');
		new_rod.setAttribute('type', type);
		new_rod.setAttribute('x', x);
		new_rod.setAttribute('y', y);
		new_rod.setAttribute('direction', direction);
		new_rod.setAttribute('ondragstart', 'drag(event)');
		document.getElementById('main_board').appendChild(new_rod);
	} else {
		document.getElementById(id).setAttribute('style', rod_style);
		document.getElementById(id).setAttribute('x', x);
		document.getElementById(id).setAttribute('y', y);
	}
}

function allowDrop (ev) {
  ev.preventDefault();
}

function drag (ev) {
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', ev.target.getAttribute('type'));
	ev.dataTransfer.setData('rod_direction', ev.target.getAttribute('direction'));
	ev.dataTransfer.setData('rod_id', ev.target.getAttribute('id'));
}

//type: 11=player, 12=split, 13=merge_v, 14=merge_h
function drag_player (ev) {
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', '1001');
	ev.dataTransfer.setData('rod_player_id', 'rod_player_' + rod_num);
	var clone_rod_player = ev.target.cloneNode(true);
	clone_rod_player.setAttribute('style', 'display:none');
	clone_rod_player.setAttribute('id', 'rod_player_' + rod_num);
	rod_num++;
	document.getElementById('main_board').appendChild(clone_rod_player);
}
function drag_split (ev) {
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', '1002');
}
function drag_merge_v (ev) {
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', '1003');
}
function drag_merge_h (ev) {
	offsetX = ev.offsetX - ev.offsetX * offset;
	offsetY = ev.offsetY - ev.offsetY * offset;
	ev.dataTransfer.setData('rod_type', '1004');

}

function drop (ev) {
	//get position
	ev.preventDefault();
	layerX = ev.clientX - 368;
	layerY = ev.clientY - 28;

	if (ev.dataTransfer.getData('rod_type') > 1000) {
		var x = layerX - Math.round(offsetX) + 20;
		var y = layerY - Math.round(offsetY) + 20;
		switch (ev.dataTransfer.getData('rod_type')) {
			case '1001':
				rod_player_id = ev.dataTransfer.getData('rod_player_id');
				startPlayRods(x, y);
				break;
			case '1002':
				splitRod(x, y);
				break;
			case '1003':
				mergeVRod(x, y);
				break;
			case '1004':
				mergeHRod(x, y);
				break;
		}
	} else {
		var x = 21 + Math.round((layerX - offsetX)/20) * 20;
		var y = 21 + Math.round((layerY - offsetY)/20) * 20;
		//draw droped rod. data from dataTransfer
		if (ev.clientX > 340) {
			drawRod(x, y, ev.dataTransfer.getData('rod_type'), ev.dataTransfer.getData('rod_direction'), ev.dataTransfer.getData('rod_id'));
		} else {
			if (ev.dataTransfer.getData('rod_id') != "null") {
				document.getElementById(ev.dataTransfer.getData('rod_id')).remove();
			}
		}
	}
}
