var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("randomize");


body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

function hue () {
	
	var hue = 'rgb(' 
	+ (Math.floor(Math.random() * 256)) 
	+ ',' + (Math.floor(Math.random() * 256)) 
	+ ',' + (Math.floor(Math.random() * 256)) 
	+ ')';
	console.log(hue);
	return(hue);
}

function setRandom() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ hue()
	+ ", " 
	+ hue() 
	+ ")";

	css.textContent = body.style.background + ";";
}

randomize.addEventListener("click", setRandom);

