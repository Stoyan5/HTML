<script>
	var N;
	var LIVELLO_MASSIMO;
	var TEMPO_ATTESA;
	var TEMPO_DI_GIOCO;
	var PADS;//array with length number of pads
	
	
	function play(){
		var i;
		for(i=0;i<N;i++){
			lightPad(Math.floor(Math.random() * PADS.length));
			
			
		}
	}
	function lightPad(pad){
		
	}
	function newGame(){
		clearGame();
	}
	
	function clearGame(){
		N=0;
		TEMPO_DI_GIOCO=0;
	}
	//https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
</script>

