document.querySelector("button").onclick = displayPercent ;
function displayPercent(){
	var x = document.getElementsByClassName("names");
	var name = x[0].value;
	var crushname = x[1].value;
	var pre = Math.floor(Math.random()*100+1);
	document.getElementById("percent").innerHTML = "Love percent of "+name+" and "+crushname+" is "+ pre +"%";
	if ( pre > 90 && pre <=100)
		document.querySelector("p").innerHTML ="Your love is an example of Love Of Heavens.";
	else if (pre > 80 && pre <=90)
		document.querySelector("p").innerHTML ="You are lucky you got a love in your life.";
	else if( pre > 50 && pre <=80)
		document.querySelector("p").innerHTML ="You care for each other.";
	else 
		document.querySelector("p").innerHTML ="Both of you do lot of compromise";
}
