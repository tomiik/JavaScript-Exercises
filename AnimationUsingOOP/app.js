'use strict';

class Car{
	constructor(inputDomElement,model){
		this.domElement=inputDomElement;
		this.domElement.css('left','10px');
		this.domElement.css('top','10px');
		this.direction=90;
		this.increment=true;
		this.model=model;
		this.currentSpeed=1;
	}
	move(){
		this.setIntervalId=setInterval(moveCar,5)
		console.log(this.currentSpeed);
		// console.log(this.newDirection);
		// console.log(this.increment);
		var currentPosX = parseInt(this.domElement.css("left"));
		var currentPosY = parseInt(this.domElement.css("top"));
		// console.log(this.newDirection);
		console.log("currentPos:" + currentPosX + "," + currentPosY);
		var domElement=this.domElement;
		var carObj=this;
		function moveCar(){
			console.log(carObj.direction);
			var carDirection = parseInt(carObj.direction);
			var d = (2*Math.PI) * (carDirection/360);
			var directionX = Math.sin(d);
			var directionY = Math.cos(d);

			console.log(directionX + "," + directionY);

			currentPosX += carObj.currentSpeed * directionX;
			currentPosY += carObj.currentSpeed * directionY;
			domElement.css("transform", "rotate(" + (-carDirection-270) + "deg)");

			domElement.css("left",currentPosX+'px');
			domElement.css("top",currentPosY+'px');
		}

	}
	stop(){
		if (this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}

	increaseSpeed(){
		if (this.currentSpeed<=5){
			this.currentSpeed++;
		}
	}
	decreaseSpeed(){
		if (this.currentSpeed>-1){
			this.currentSpeed--;
		}
	}
}

class ControlSystem{
	constructor(car){
		this.car=car;
	}
	turnRight(){
		this.car.stop();
		this.car.direction-=10;
		this.car.move();
	}
	turnLeft(){
		this.car.stop();
		this.car.direction+=10;
		this.car.move();
	}
	start(){
		this.car.move();
	}
	stop(){
		this.car.stop();
	}
	accelerate(){
		this.car.stop();
		this.car.increaseSpeed();
		this.car.move();
	}
	slowDown(){
		//this.car.stop();
		this.car.decreaseSpeed();
		//this.car.move();
	}
}

$(document).ready(function(){
	var carDomElement=$('#car');
	var carObject = new Car(carDomElement,"SUV");
	var car1Object=new Car(carDomElement,"Sedan");
	console.log(carObject);
	console.log(car1Object);
	var objControlSystem = new ControlSystem(carObject);
	console.log(objControlSystem);


	$(document).keydown(function(key){
		console.log(key.keyCode);
		switch(key.keyCode){
			case 37://Left Arrow
			objControlSystem.turnLeft();
			break;
			case 39:// Right arrow
			objControlSystem.turnRight();
			break;
			case 38:// Up arrow
			objControlSystem.accelerate();
			break;
			case 40:// Down arrow
			objControlSystem.slowDown();
			break;
			case 32://When space, stop the car
			objControlSystem.stop();
			break;
			case 65: // accelerate when a is pressed
			objControlSystem.accelerate();
			break;
		}
	});
});
