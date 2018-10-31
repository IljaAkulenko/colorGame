var numberOfSquares = 6
var colors = generateRandomColors(numberOfSquares);
var pickedColor = colorPick(colors);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetBt = document.getElementById("reset");
var hesh1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		reset();
		
	});
}

colorDisplay.textContent = pickedColor;
	
resetBt.addEventListener("click", function(){
	reset();
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			resetBt.textContent = "Play Again";
			message.textContent = "You Guessed Right";			
			changeColors(clickedColor);
			hesh1.style.backgroundColor = clickedColor;		
		}else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Trye Again ! ! !";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function colorPick(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g + ", " + b +")";
};

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor =colorPick(colors);
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	message.textContent = "";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

		} else {
			squares[i].style.display = "none";
		}	
	}

	hesh1.style.backgroundColor = "steelblue";
}