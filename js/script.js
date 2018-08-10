// JavaScript Document
var acc = document.getElementsByClassName("moreinfo");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
		'use strict';
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  };
}

var div = document.getElementById('logo');
var opacity = 1;
var fader = setInterval(function() {
	'use strict';
	opacity -= 0.02; //Decrease the opacity
	if (opacity >= 0.10) { //Stop at negative numbers
		if (typeof div.style.opacity == 'string') {
			div.style.opacity = opacity;
		} else {
			div.style.filters = 'alpha(opacity=' + (opacity * 100) +
				')';
		}
		} else { //Stop timer!
		clearInterval(fader);
		}
}, 100); //Every 100 milliiseconds


//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}