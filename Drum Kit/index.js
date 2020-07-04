var x = document.getElementsByTagName("button");

function sound(buttonInnerHTML){
	switch(buttonInnerHTML){
		case "w":
			var audio = new Audio("sounds/crash.mp3");
			audio.play();
			break;
		case "a":
			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;
		case "s":
			var audio = new Audio("sounds/snare.mp3");
			audio.play();
			break;
		case "d": 
			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();
			break;
		case "j":
			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();
			break;
		case "k":
			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();
			break;
		case "l":
			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();
			break;
	}
}

for (var i = 0; i < x.length; i++) {
	x[i].addEventListener("click",function () {
	var buttonInnerHTML = this.innerHTML;
	sound(buttonInnerHTML);
	buttonAnimation(buttonInnerHTML);
	
	});
}



document.addEventListener("keydown" , function(event) {
	sound(event.key);
	buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("."+currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	} ,100);
}



