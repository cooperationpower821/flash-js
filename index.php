<!DOCTYPE html>
<html>
<head>
	<title>rods</title>
</head>
<body>
	<audio id="audio_0" autoplay><source src="sounds/C1p.mp3" type="audio/wav"></audio>
	<audio id="audio_1" autoplay><source src="sounds/D1p.mp3" type="audio/wav"></audio>
	<audio id="audio_2" autoplay><source src="sounds/E1p.mp3" type="audio/wav"></audio>
	<audio id="audio_3" autoplay><source src="sounds/F1p.mp3" type="audio/wav"></audio>
	<audio id="audio_4" autoplay><source src="sounds/G1p.mp3" type="audio/wav"></audio>
	<audio id="audio_5" autoplay><source src="sounds/A1p.mp3" type="audio/wav"></audio>
	<audio id="audio_6" autoplay><source src="sounds/B1p.mp3" type="audio/wav"></audio>
	<audio id="audio_7" autoplay><source src="sounds/C2p.mp3" type="audio/wav"></audio>
	<audio id="audio_8" autoplay><source src="sounds/D2p.mp3" type="audio/wav"></audio>
	<audio id="audio_9" autoplay><source src="sounds/E2p.mp3" type="audio/wav"></audio>

	<div id="main_rods" ondrop="drop(event)" ondragover="allowDrop(event)">
		<div id="h_rods">
			<div class="rod-0" draggable="true" ondragstart="drag(event)" style="width:19px;height:19px;" type="0" direction="h"></div>
			<div class="rod-1" draggable="true" ondragstart="drag(event)" style="width:39px;height:19px;" type="1" direction="h"></div>
			<div class="rod-2" draggable="true" ondragstart="drag(event)" style="width:59px;height:19px;" type="2" direction="h"></div>
			<div class="rod-3" draggable="true" ondragstart="drag(event)" style="width:79px;height:19px;" type="3" direction="h"></div>
			<div class="rod-4" draggable="true" ondragstart="drag(event)" style="width:99px;height:19px;" type="4" direction="h"></div>
			<div class="rod-5" draggable="true" ondragstart="drag(event)" style="width:119px;height:19px;" type="5" direction="h"></div>
			<div class="rod-6" draggable="true" ondragstart="drag(event)" style="width:139px;height:19px;" type="6" direction="h"></div>
			<div class="rod-7" draggable="true" ondragstart="drag(event)" style="width:159px;height:19px;" type="7" direction="h"></div>
			<div class="rod-8" draggable="true" ondragstart="drag(event)" style="width:179px;height:19px;" type="8" direction="h"></div>
			<div class="rod-9" draggable="true" ondragstart="drag(event)" style="width:199px;height:19px;" type="9" direction="h"></div>
		</div>
		<div id="v_rods">
			<div class="rod-0" draggable="true" ondragstart="drag(event)" style="width:19px;height:19px;" type="0" direction="v"></div>
			<div class="rod-1" draggable="true" ondragstart="drag(event)" style="width:19px;height:39px;" type="1" direction="v"></div>
			<div class="rod-2" draggable="true" ondragstart="drag(event)" style="width:19px;height:59px;" type="2" direction="v"></div>
			<div class="rod-3" draggable="true" ondragstart="drag(event)" style="width:19px;height:79px;" type="3" direction="v"></div>
			<div class="rod-4" draggable="true" ondragstart="drag(event)" style="width:19px;height:99px;" type="4" direction="v"></div>
			<div class="rod-5" draggable="true" ondragstart="drag(event)" style="width:19px;height:119px;" type="5" direction="v"></div>
			<div class="rod-6" draggable="true" ondragstart="drag(event)" style="width:19px;height:139px;" type="6" direction="v"></div>
			<div class="rod-7" draggable="true" ondragstart="drag(event)" style="width:19px;height:159px;" type="7" direction="v"></div>
			<div class="rod-8" draggable="true" ondragstart="drag(event)" style="width:19px;height:179px;" type="8" direction="v"></div>
			<div class="rod-9" draggable="true" ondragstart="drag(event)" style="width:19px;height:199px;" type="9" direction="v"></div>
		</div>
		<div class="rod_player" style="left:200px;top:140px;" draggable="true" ondragstart="drag_player(event)"></div>
		<div id="rod_merge_v" style="left:200px;top:110px;" draggable="true" ondragstart="drag_merge_v(event)"></div>
		<div id="rod_merge_h" style="left:200px;top:80px;" draggable="true" ondragstart="drag_merge_h(event)"></div>
		<div id="rod_split" style="left:200px;top:50px;" draggable="true" ondragstart="drag_split(event)"></div>
	</div>
	<div id="main_board" ondrop="drop(event)" ondragover="allowDrop(event)">
		<div id="v_bar"></div>
		<div id="h_bar"></div>
	</div>
	<div class="description">
		<p>Drag the rods onto the grid to add them. </p>
		<p>Drag a rod from the grid to the left of the grid to erase it.</p>
		<p>Drop the chisel icon on a rod to break it.</p>
		<p>Drop eiher the vertical or horizontal glue icon on two adjacent rods to join them.</p>
		<p>Drop the ball above some rods to create Xylophone(speakers on please).</p>
	</div>
</body>
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="script.js"></script>
</html>