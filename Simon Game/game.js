var level,k;
var gamePattern = [];
var userPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var color ;
var over = 0;
function nextSequence() {
	var randomNumber = Math.floor(Math.random()*4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	return randomChosenColour;
}

$(document).on("keydown", function () {
	level = 1;
	k = 1;
	over = 0;
	gamePattern = [];
	userPattern = [];
	$("h1").text("level 1");
	color = nextSequence();
	press(color);
	song(color);
});

function song(songname) {
	var audio = new Audio("sounds/"+songname+".mp3");
	audio.play();
	
}

$("[type = button]").click(function () {
	if(over == 0)
	{
		var songname = this.classList[1];
		press(songname);
		song(songname);
		userPattern.push(songname);
		if(isEqual(gamePattern,userPattern)=="True"){
			level++;
			$("h1").text("level "+level);
			userPattern = [];
			color = nextSequence();
			setTimeout(function(){
				press(color);
			},1000); 
			song(color);
			k = 1 ;
		}
		else if(isEqual(gamePattern.slice(0,k),userPattern) == "True")
			k++;
		else
		{ 
			$("h1").text("Game Over, Press Any Key to Restart");
			song("wrong");
			$("body").css("background-color","red");
			setTimeout(function () {
				$("body").css("background-color","#011F3F");
			},100);
			over = 1;
		}
			
	}
	});

function isEqual(a,b) 
{ 
  // if length is not equal 
  if(a.length!=b.length) 
   return "False"; 
  else
  { 
  // comapring each element of array 
   for(var i=0;i<a.length;i++) 
   if(a[i]!= b[i]) 
    return "False"; 
    return "True"; 
  } 
} 

function press(idname) {
	$("#"+idname).addClass("pressed");
	setTimeout(function () {
		$("#"+idname).removeClass("pressed");
		},300);

}
