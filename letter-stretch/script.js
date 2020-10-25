
var letters = []; editting = true;

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
	container: 'container2',
	width: width - 50,
	height: height - 180,
});

var layer = new Konva.Layer();
stage.add(layer);

function Letter() {
	
}
Letter.prototype = {
	init: function() {
		this.group = new Konva.Group({
			draggable: true,
		});
		this.group_curve = new Konva.Group({
			draggable: false,
		});
		this.group_origin = new Konva.Group({
			draggable: true,
		});
		for (var i = 0; i < this.curves.length; i++) {
			var points = [];
			for (var j = 0; j < this.curves[i].length; j++) {
				points.push(this.origins[this.curves[i][j]].x+10);
				points.push(this.origins[this.curves[i][j]].y+10);
			}
			var line = new Konva.Line({
				points: points,
				stroke: 'red',
				strokeWidth: 7,
				lineCap: 'round',
				lineJoin: 'round',
				tension: 0.5,
			});
			this.group_curve.add(line);
		}
		for (var i = 0; i < this.origins.length; i++) {
			if (i == 0) {
				this.origins[i].box = new Konva.Rect({
					x: this.origins[i].x,
					y: this.origins[i].y,
					width: 20,
					height: 20,
					fill: '#73f449',
					stroke: 'black',
					strokeWidth: 1
				});
				this.group.add(this.origins[i].box);
			} else {
				this.origins[i].box = new Konva.Rect({
					x: this.origins[i].x,
					y: this.origins[i].y,
					curves: this.curves,
					width: 20,
					height: 20,
					fill: '#00D2FF',
					stroke: 'black',
					strokeWidth: 1,
					draggable: true,
					dragBoundFunc: function(pos) {
						var index = this.index + 1;
						var curves = this.parent.parent.children[1].children;
						var origins = this.parent.parent.children[2].children;
						
						for (var i = 0; i < this.attrs.curves.length; i++) {
							var points = [];
							for (var j = 0; j < this.attrs.curves[i].length; j++) {
								console.log(origins[this.attrs.curves[i][j]-1]);
								points.push(origins[this.attrs.curves[i][j]-1].attrs.x+10)
								points.push(origins[this.attrs.curves[i][j]-1].attrs.y+10)
							}
							curves[i].setPoints(points);
						}

						// this.parent.parent.children[1].children[0].setPoints([100, 100, pos.x, pos.y]);
					}
				});
				this.group_origin.add(this.origins[i].box);
			}
			this.origins[i].box.on('mouseover', function () {
				document.body.style.cursor = 'pointer';
			});
			this.origins[i].box.on('mouseout', function () {
				document.body.style.cursor = 'default';
			});
		}
		this.group.add(this.group_curve);
		this.group.add(this.group_origin);
		layer.add(this.group);
	}
}

function init() {

	layer.draw();
}

function keyDown(e) {
	if (e.keyCode == 32) {
		if (editting) {
			for (var i = 0; i < letters.length; i++) {
				letters[i].group_origin.hide();
				letters[i].group.children[0].hide();
				layer.draw();
			}
		} else {
			for (var i = 0; i < letters.length; i++) {
				letters[i].group_origin.show();
				letters[i].group.children[0].show();
				layer.draw();
			}
		}
		editting = !editting;
		return;
	}
	switch (e.key) {
		case 'a':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:100, y:20, },
				{ x:60, y:100 },
				{ x:20, y:180 },
				{ x:140, y:100 },
				{ x:180, y:180 },
				{ x:100, y:100 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 5],
				[2, 6, 4]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'b':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20, },
				{ x:30, y:100 },
				{ x:30, y:180 },
				{ x:120, y:60 },
				{ x:50, y:100 },
				{ x:120, y:140 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 5],
				[5, 6, 3]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'c':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:130, y:45, },
				{ x:85, y:20 },
				{ x:40, y:40 },
				{ x:20, y:100 },
				{ x:40, y:160 },
				{ x:85, y:180 },
				{ x:130, y:155 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'd':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20, },
				{ x:30, y:100 },
				{ x:30, y:180 },
				{ x:100, y:40 },
				{ x:130, y:100 },
				{ x:100, y:160 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 5],
				[5, 6, 3]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'e':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:130, y:20 },
				{ x:60, y:20 },
				{ x:30, y:20, },
				{ x:30, y:100 },
				{ x:30, y:180 },
				{ x:60, y:180 },
				{ x:130, y:180 },
				{ x:60, y:100 },
				{ x:90, y:100 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7],
				[4, 8, 9]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'f':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:130, y:20 },
				{ x:60, y:20 },
				{ x:30, y:20, },
				{ x:30, y:100 },
				{ x:30, y:180 },
				{ x:60, y:100 },
				{ x:90, y:100 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[4, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'g':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:130, y:40 },
				{ x:75, y:20 },
				{ x:20, y:100 },
				{ x:75, y:180 },
				{ x:130, y:130 },
				{ x:110, y:130 },
				{ x:90, y:130 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'h':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:100 },
				{ x:40, y:180 },
				{ x:80, y:100 },
				{ x:120, y:20 },
				{ x:120, y:100 },
				{ x:120, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[2, 4, 6],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'i':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:80, y:20 },
				{ x:120, y:20 },
				{ x:80, y:100 },
				{ x:40, y:180 },
				{ x:80, y:180 },
				{ x:120, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[2, 4, 6],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'j':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:80, y:20 },
				{ x:120, y:20 },
				{ x:80, y:80 },
				{ x:80, y:140 },
				{ x:50, y:180 },
				{ x:20, y:140 }
			];
			letter.curves = [
				[1, 2, 3],
				[2, 4, 5],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'k':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:100 },
				{ x:40, y:180 },
				{ x:120, y:20 },
				{ x:90, y:50 },
				{ x:90, y:150 },
				{ x:120, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[2, 4, 5],
				[2, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'l':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:100 },
				{ x:40, y:180 },
				{ x:100, y:180 },
				{ x:150, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'm':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:100 },
				{ x:40, y:180 },
				{ x:70, y:100 },
				{ x:100, y:180 },
				{ x:130, y:100 },
				{ x:160, y:20 },
				{ x:160, y:100 },
				{ x:160, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 5],
				[5, 6, 7],
				[7, 8, 9]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'n':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:100 },
				{ x:40, y:180 },
				{ x:100, y:100 },
				{ x:160, y:20 },
				{ x:160, y:100 },
				{ x:160, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 7],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'o':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:100, y:20 },
				{ x:50, y:50 },
				{ x:30, y:100 },
				{ x:50, y:150 },
				{ x:100, y:180 },
				{ x:150, y:150 },
				{ x:170, y:100 },
				{ x:150, y:50 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7],
				[7, 8, 1]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'p':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:110 },
				{ x:40, y:180 },
				{ x:120, y:65 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 2]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'q':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:100, y:20 },
				{ x:50, y:50 },
				{ x:30, y:100 },
				{ x:50, y:150 },
				{ x:100, y:180 },
				{ x:150, y:150 },
				{ x:170, y:100 },
				{ x:150, y:50 },
				{ x:125, y:125 },
				{ x:175, y:175 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7],
				[7, 8, 1],
				[9, 6, 10]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'r':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:40, y:20 },
				{ x:40, y:110 },
				{ x:40, y:180 },
				{ x:120, y:65 },
				{ x:80, y:140 },
				{ x:130, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[1, 4, 2],
				[2, 5, 6]
			]
			letter.init();
			letters.push(letter);
			break;
		case 's':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:160, y:20 },
				{ x:30, y:60 },
				{ x:100, y:100 },
				{ x:170, y:140 },
				{ x:40, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 't':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:95, y:20 },
				{ x:160, y:20 },
				{ x:95, y:100 },
				{ x:95, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[2, 4, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'u':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:30, y:140 },
				{ x:95, y:180 },
				{ x:160, y:140 },
				{ x:160, y:20 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'v':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:60, y:100 },
				{ x:95, y:180 },
				{ x:130, y:100 },
				{ x:160, y:20 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'w':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:45, y:100 },
				{ x:60, y:180 },
				{ x:75, y:130 },
				{ x:90, y:80 },
				{ x:110, y:130 },
				{ x:130, y:180 },
				{ x:145, y:100 },
				{ x:160, y:20 }
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7],
				[7, 8, 9]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'x':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:95, y:100 },
				{ x:160, y:180 },
				{ x:160, y:20 },
				{ x:30, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[4, 2, 5]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'y':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:60, y:60 },
				{ x:95, y:100 },
				{ x:160, y:20 },
				{ x:130, y:60 },
				{ x:95, y:140 },
				{ x:95, y:180 }
			];
			letter.curves = [
				[1, 2, 3],
				[4, 5, 3],
				[3, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
		case 'z':
			letter = new Letter();
			letter.origins = [
				{ x:20, y:20 },
				{ x:30, y:20 },
				{ x:95, y:20 },
				{ x:160, y:20 },
				{ x:95, y:100 },
				{ x:30, y:180 },
				{ x:95, y:180 },
				{ x:160, y:180 },
			];
			letter.curves = [
				[1, 2, 3],
				[3, 4, 5],
				[5, 6, 7]
			]
			letter.init();
			letters.push(letter);
			break;
	}
	layer.draw();
}



init();
