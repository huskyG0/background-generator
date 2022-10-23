var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	 return input.value.length;
}// Created input function() to reduce and make code 
//more efficient.


button.addEventListener("click", function() {
	//if(input.value.length > 0) {
	  if(inputLength() > 0) {var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
input.value ="";}
		
	})




input.addEventListener("keypress", function(event) {
	if(input.value.length > 0 && event.which === 13){
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
input.value ="";} 
		
})


// On certain browsers !!!! event.which === 13 // WORKS 
//else try // event.keycode === 13 // 
//OR // event.code === "Enter"







