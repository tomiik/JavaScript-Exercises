'use strict';

class Car{
	constructor(inputDomElement,model){
		this.domElement=inputDomElement;
		this.domElement.css('left','10px');
		this.domElement.css('top','10px');
		this.direction=0;
		this.increment=true;
		this.model=model;
		this.currentSpeed=0;
		this.crashed = false;
	}
	move(){
		this.setIntervalId=setInterval(moveCar,1)
		const xMin = 0;
		const xMax = 800-35;
		const yMin = 0;
		const yMax = 400-25;
		//console.log(this.currentSpeed);
		// console.log(this.newDirection);
		// console.log(this.increment);
		var currentPosX = parseInt(this.domElement.css("left"));
		var currentPosY = parseInt(this.domElement.css("top"));
		// console.log(this.newDirection);
		console.log("currentPos:" + currentPosX + "," + currentPosY);
		var domElement=this.domElement;
		var carObj=this;
		function moveCar(){
			//console.log(carObj.direction);
			var carDirection = parseInt(carObj.direction);
			var d = (2*Math.PI) * (carDirection/360);
			var directionX = Math.cos(d);
			var directionY = Math.sin(d);

			//console.log(directionX + "," + directionY);
			var currentSpeed = carObj.currentSpeed;
			console.log("currentspeed:" + currentSpeed);
			currentPosX += currentSpeed * directionX;
			currentPosY += currentSpeed * directionY;
			while(carDirection < 0){
				carDirection += 360;
			}
			carDirection = carDirection % 360;
			//console.log("deg:" + (carDirection));

			if(currentPosX >= xMax){
				if(270 <= carDirection && carDirection <= 315){
					carDirection = 270;
				}
				else if(45 <= carDirection && carDirection <= 90){
					carDirection = 90;
				}
				else if(315 < carDirection || carDirection < 45){
					currentSpeed = 0;
					carObj.crash();
					console.log("a:" + currentPosX);
				}
				currentPosX=xMax;
			} else if(currentPosX <= xMin){
				if(90 <= carDirection && carDirection <= 135){
					carDirection = 90;
				}
				else if(225 <= carDirection && carDirection <= 270){
					carDirection = 270;
				}
				else if(135 < carDirection && carDirection < 225){
					currentSpeed = 0;
					carObj.crash();
					console.log("b");
				}
				currentPosX=xMin;
			}

			if(currentPosY >= yMax){
				if(135 <= carDirection && carDirection <= 180){
					carDirection = 180;
				}
				else if(0 <= carDirection && carDirection <= 45 ){
					carDirection = 0;
				}
				else if(45 < carDirection && carDirection < 180){
					currentSpeed = 0;
					carObj.crash();
					console.log("c");
				}
				currentPosY=yMax;
			} else if(currentPosY <= yMin){
				if(180 <= carDirection && carDirection <= 225){
					carDirection = 180;
				}
				else if(315 <= carDirection && carDirection <= 360 || carDirection == 0){
					carDirection = 0;
				}
				else if(225 < carDirection && carDirection < 315){
					currentSpeed = 0;
					carObj.crash();
					console.log("d");
				}
				currentPosY=yMin;
			}
			//console.log(carObj.crashed)
			if(carObj.crashed == false){
				carObj.currentSpeed = currentSpeed;
				carObj.direction = carDirection;
				domElement.css("transform", "rotate(" + (carDirection) + "deg)");
				domElement.css("left",currentPosX+'px');
				domElement.css("top",currentPosY+'px');
			}


		}

	}
	stop(){
		if (this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}

	crash(){
		console.log("crashed");
		$(car).css({"background-image":"url('./images/crashed.png')"});
		this.crashed = true;
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
		this.car.direction+=10;
		this.car.move();
	}
	turnLeft(){
		this.car.stop();
		this.car.direction-=10;
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
	respawn(){
		this.car.stop();
		this.car.currentSpeed = 0;
		this.car.direction = 0;
		//console.log(this.car.crashed);
		$("#car").css({"background-image":"url('./images/omcar.png')",
	"left": "10px",
	"top": "10px",
"transform": "rotate(0deg)"});
		this.car.crashed = false;
		console.log(this.car.crashed);

	}
}

$(document).ready(function(){
	var carDomElement=$('#car');
	var carObject = new Car(carDomElement,"SUV");
	var car1Object=new Car(carDomElement,"Sedan");
	//console.log(carObject);
	//console.log(car1Object);
	var objControlSystem = new ControlSystem(carObject);
	//console.log(objControlSystem);


	$(document).keydown(function(key){
		//console.log(key.keyCode);
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
			objControlSystem.respawn();
			break;
		}
	});
});
