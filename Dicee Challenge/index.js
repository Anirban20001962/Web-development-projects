var x = Math.ceil(Math.random()*6);
var y = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src","images/dice"+x+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+y+".png");

if( x == y)
	document.querySelector("h1").innerHTML = "Draw !";
else if( x > y) 
	document.querySelector("h1").innerHTML = "🚩 Player 1 wins !";
else 
	document.querySelector("h1").innerHTML = "Player 2 wins ! 🚩";