<script>
	//variables
	var N;
	var LIVELLO_MASSIMO;
	var TEMPO_ATTESA;
	var TEMPO_DI_GIOCO;
	var PADS;//array with length number of pads
	
	//Buttons
	var btnRed = document.getElementById("redDot");
	var btnGreen = document.getElementById("greenDot");
	var btnBlue = document.getElementById("blueDot");
	
	//labels
	var labelLevel = document.getElementById("level");
	var labelTempo = document.getElementById("tempo");
	var labelIsFinished = document.getElementById("isFinished");
	
	PADS=[btnRed, btnGreen, btnBlue];//red, green, blue
	function lightPad(pad){
		if(pad==PADS[0]){
			//light red
		}else if(pad=PADS[1]){
			//light green
		}else{
			//light blue
		}
	}
	function newGame(){
		clearGame();
	}
	
	
	function clearGame(){
		N=0;
		TEMPO_DI_GIOCO=0;
		prossimaMossa();
	}
	function prossimaMossa(){
		N++;
		
	}
	
	function generateMove(){
		lightPad(Math.floor(Math.random() * PADS.length));
		showMoves();
	}
	
	function showMoves() {
		var i = 0;
		var moves = setInterval(function(){
		  playGame();
		  i++;
		  if (i >= game.currentGame.length) {
			clearInterval(moves);
		  }
		}, 600)
		clearPlayer();
	}
	//https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
</script>

