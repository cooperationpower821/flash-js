
var rods = [
	{ x : 505, y : 330, deg : 0 },
	{ x : 505, y : 200, deg : 0 },
	{ x : 475, y : 200, deg : 45 },
	{ x : 475, y : 290, deg : 30 },
	{ x : 475, y : 370, deg : -25 },
	{ x : 535, y : 200, deg : -45 },
	{ x : 535, y : 290, deg : -30 },
	{ x : 535, y : 370, deg : 25 },
	{ x : 535, y : 330, deg : -45 },
	{ x : 535, y : 430, deg : 20 },
	{ x : 535, y : 530, deg : -30 },
	{ x : 475, y : 330, deg : 45 },
	{ x : 475, y : 430, deg : -20 },
	{ x : 475, y : 530, deg : 30 }
]
var sel_rod_id = '';
var dragging = false;
function mousedown(ev) {
	dragging = true;
	sel_rod_id = ev.target.parentNode.getAttribute('id');
}
function mousemove(ev) {
	if (dragging) {
		var i = sel_rod_id.replace('rod_', '');
		var x, y, m, deg, a;
		x = rods[i].x;
		y = rods[i].y;
		switch (i) {
			case '0':
				a = 0;
				break;
			case '1':
				a = rods[0].deg;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_0')[0].getBoundingClientRect().top;
				}
				break;
			case '2':
				a = rods[0].deg + rods[2].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_2')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg;
				break;
			case '3':
				a = rods[0].deg + rods[2].deg + rods[3].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_3')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[2].deg;
				a = (360 + a) % 360;
				break;
			case '4':
				a = rods[0].deg + rods[2].deg + rods[3].deg + rods[4].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_4')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[2].deg + rods[3].deg;
				a = (360 + a) % 360;
				break;
			case '5':
				a = rods[0].deg + rods[5].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_5')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg;
				break;
			case '6':
				a = rods[0].deg + rods[5].deg + rods[6].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_6')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[5].deg;
				a = (360 + a) % 360;
				break;
			case '7':
				a = rods[0].deg + rods[5].deg + rods[6].deg + rods[7].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_7')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[5].deg + rods[6].deg;
				a = (360 + a) % 360;
				break;
			case '8':
				a = rods[0].deg + rods[8].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_8')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg;
				break;
			case '9':
				a = rods[0].deg + rods[8].deg + rods[9].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_9')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[8].deg;
				a = (360 + a) % 360;
				break;
			case '10':
				a = rods[0].deg + rods[8].deg + rods[9].deg + rods[10].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_10')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[8].deg + rods[9].deg;
				a = (360 + a) % 360;
				break;
			case '11':
				a = rods[0].deg + rods[11].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_11')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg;
				break;
			case '12':
				a = rods[0].deg + rods[11].deg + rods[12].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_12')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[11].deg;
				a = (360 + a) % 360;
				break;
			case '13':
				a = rods[0].deg + rods[11].deg + rods[12].deg + rods[13].deg;
				a = (360 + a) % 360;
				if (a >= 0 && a <= 90) {
					x = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().top;
				} else if (a >= 90 && a <= 180) {
					x = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().right;
					y = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().bottom;
				} else if (a >= 180 && a <= 270) {
					x = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().bottom;
				} else if (a >= 270 && a <= 360) {
					x = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().left;
					y = document.getElementsByClassName('rod_13')[0].getBoundingClientRect().top;
				}
				a = rods[0].deg + rods[11].deg + rods[12].deg;
				a = (360 + a) % 360;
				break;
			default:
				a = 0;
				break;
		}
		x = ev.pageX - x;
		y = ev.pageY - y;
		m = x / y;
		if (i > 1) {
			deg = Math.atan2(y, x)/Math.PI*180 - 90 - a;
		} else {
			deg = Math.atan2(y, x)/Math.PI*180 + 90 - a;
		}
		deg = (deg + 360) % 360;
		rods[i].deg = deg;
		var rod_style =  "transform:rotate("+deg+"deg);";
		document.getElementById(sel_rod_id).setAttribute('style', rod_style);
		document.getElementById(sel_rod_id).setAttribute('deg', deg);
	}
}
function mouseup(ev) {
	dragging = false;
	sel_rod_id = '';
}