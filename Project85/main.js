canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

greencarx = 5
greencary = 225

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imageTag = new Image()
	background_imageTag.upload = uploadBackground()
	background_imageTag.src = background_image;

	greencar_imageTag = new Image()
	greencar_imageTag.upload = uploadgreencar()
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imageTag,greencarx,greencary,greencar_width,greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencary >= 0)
	{
		greencary = greencary - 10
		uploadBackground()
		uploadgreencar()
	}
}

function down()
{
	//Define function to move the car downward
	if (greencary <= canvas.height)
	{
		greencary = greencary + 10
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	//Define function to move the car left side
	if (greencarx >= 0)
	{
		greencarx = greencarx - 10
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	//Define function to move the car right side
	if (greencarx <= canvas.width)
	{
		greencarx = greencarx + 10
		uploadBackground()
		uploadgreencar()
	}
}
