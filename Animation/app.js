
$(document).ready(function(){

// Create a game object


var game={
	init: function(domElement){
		this.domElement = domElement;
		console.log(this);
		$(this.domElement).css('left','0px');
	},
	move:function(){
		this.setIntervalId = setInterval(frame, 1);
		var posx=parseInt($(this.domElement).css('left'));
		var posy=parseInt($(this.domElement).css('top'));
		var count = 0;
		var direction = "right";
		var domElement = this.domElement;
		console.log("Inside move");
		console.log(this);
	  	function frame() {
				if(count < 400){
					switch(direction){
						case 'right'	:	posx++;
											break;
						case 'down'	:	posy++;
											break;
						case 'left': 	posx--;
											break;
						case 'up'		: posy--;
											break;
					}
				}
				else{
					switch(direction){
						case 'right'	:	direction = 'down';
											break;
						case 'down'	:	direction = 'left';
											break;
						case 'left': 	direction = 'up';
											break;
						case 'up'		: direction = 'right';
											break;
					}
					count = 0;
				}
	  		  console.log("Inside frame");
	  		  console.log(this);
					console.log(posx + ":" + posy + ":" + direction + ":" + count);
	  		  // $(this.domElement).css('left',pos + 'px');
		      // domElement.style.left = pos + 'px';
					$(domElement).css('left',posx + 'px');
					$(domElement).css('top',posy + 'px');

					count++;
		    }
	},
	stop:function(){
		if(this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}
};

var car=$('#car');
console.log(game);
console.log('Before calling init');
game.init(car);
// console.log(game.init);

// Add the click listener
$('#start').click(function(){
	game.move();
});
$('#stop').click(function(){
	game.stop();
});

});
