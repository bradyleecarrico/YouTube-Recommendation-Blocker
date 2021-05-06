var loaded = 1;

while (loaded = 1) {
document.getElementById("secondary").style.display="none";
document.getElementById("contents").style.display="none";
document.getElementById("chips-wrapper").style.display="none";

var element = document.getElementById("secondary");
var element2 = document.getElementById("contents");
var element3 = document.getElementById("chips-wrapper");

if (element != null){
	element.remove();
	}
	if (element2 != null){
	element2.remove();
	}
	if (element3.parentElement != null){
	element3.parentElement.remove();
	}

window.addEventListener('load', (event) => {  

	var loaded = 2;

});
}