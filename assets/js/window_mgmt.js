// By: Me (Online)
// Purpose: Change time on the bottom right
// Source: https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format

setInterval(function () {
	var time = formatAMPM(new Date);
	var clock = document.getElementById('tray-clock');
	clock.innerHTML = time;
}, 1000);

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


// By: Me (AI Custom)
// Purpose: Dragging around anny div with the .draggable calss (Whcih is every windows)
let highestZIndex = 10;

let activeElement = null;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;
let xOffset = 0, yOffset = 0;

document.body.addEventListener('mousedown', function (e) {
	// Only allow drag for elements with the 'draggable' class
	// 🟢 Bring to front
	highestZIndex++;
	ae = e.target.closest('.draggable');
	ae.style.zIndex = highestZIndex;

	if (e.target.closest('.draggable') && e.target.id.endsWith("-bar")) {
		activeElement = e.target.closest('.draggable');
		// Read existing transform values if any
		const transform = activeElement.style.transform;
		const match = /translate\((-?\d+)px,\s*(-?\d+)px\)/.exec(transform);
		xOffset = match ? parseInt(match[1]) : 0;
		yOffset = match ? parseInt(match[2]) : 0;

		startX = e.clientX - xOffset;
		startY = e.clientY - yOffset;

		document.addEventListener('mousemove', mouseMove);
		document.addEventListener('mouseup', mouseUp);
	}
});

function mouseMove(e) {
	if (!activeElement) return;

	currentX = e.clientX - startX;
	currentY = e.clientY - startY;

	xOffset = currentX;
	yOffset = currentY;

	activeElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
}

function mouseUp() {
	document.removeEventListener('mousemove', mouseMove);
	document.removeEventListener('mouseup', mouseUp);
	activeElement = null;
}



// By: Me (Custom)
// Purpose: When bottom left edge or the bar of post-content is double clicked, it will restore it to original size
let lastClick = 0;
let clickCount = 0;

function handleDoubleClickReset(e, fromBox = false) {
	
	const now = Date.now();
	const target = e.currentTarget || e.target;

	// Get the related draggable box
	const box = target.closest('.draggable');
	if (!box) return;

	// If checking from the box, only trigger if near bottom-left corner
	if (fromBox) {
		const rect = box.getBoundingClientRect();
		const edgeMargin = 20;
		const nearCorner = e.clientX < rect.left + edgeMargin && e.clientY > rect.bottom - edgeMargin;
		if (!nearCorner) return;
	}

	if (now - lastClick < 500) {

		clickCount++;
		if (clickCount === 2) {
			box.style.transform = 'translate(0px, 0px)';
			box.removeAttribute('style');

			// Reset offsets if you're using global drag vars
			xOffset = 0;
			yOffset = 0;
			currentX = 0;
			currentY = 0;

			clickCount = 0;
			return;
		}
	} else {
		clickCount = 1;
	}

	lastClick = now;
}

// Want to disable this for now
// document.querySelectorAll('.draggable').forEach(bar => {
// 	bar.addEventListener('mousedown', e => handleDoubleClickReset(e, true));
// });

document.querySelectorAll('.resetable').forEach(bar => {	
	bar.addEventListener('mousedown', (e) => handleDoubleClickReset(e));
});



// By: Me (Custom)
// Purpose: Changes the colour of the window's top bar when clicked at appropriate window
document.body.addEventListener('mousedown', function (event) {
    const clickedInNav = event.target.closest('#nav-box');
    const clickedInPost = event.target.closest('#post-box');
    const clickedInPopup = event.target.closest('#neko-popup');

    if (clickedInNav) {
        document.getElementById('nav-bar').style.background = '#00007f';
        document.getElementById('post-bar').style.background = '#808080';
        document.getElementById('popup-bar').style.background = '#808080';
    } else if (clickedInPost) {
        document.getElementById('nav-bar').style.background = '#808080';
        document.getElementById('post-bar').style.background = '#00007f';
        document.getElementById('popup-bar').style.background = '#808080';
    } else if (clickedInPopup) {
        document.getElementById('nav-bar').style.background = '#808080';
        document.getElementById('post-bar').style.background = '#808080';
        document.getElementById('popup-bar').style.background = '#00007f';
    }
});

// By: Me (Custom)
// Purpose: Makes the top right button function for the navigation section do something. For this, it will "minimize" and "maximize"
var nav_max = document.getElementById("nav-maximize");
var nav_min = document.getElementById("nav-minimize");

function nav_maximize () {
	var tl_box = document.getElementById("tag_list-box");
    var pl_box = document.getElementById("post_list-box");
    var pt_box = document.getElementById("post_total-box");

	tl_box.style.removeProperty('display');
    pl_box.style.removeProperty('display');
    pt_box.style.removeProperty('display');
}

function nav_minimize () {
	var tl_box = document.getElementById("tag_list-box");
    var pl_box = document.getElementById("post_list-box");
    var pt_box = document.getElementById("post_total-box");

	tl_box.style.display="none";
    pl_box.style.display="none";
    pt_box.style.display="none";
}

nav_max.addEventListener('click', nav_maximize, false);
nav_min.addEventListener('click', nav_minimize, false);


// By: h01000110 (hi)
// github.com/h01000110
// Oringally from 001.js

var post_max = document.getElementById("post-maximize");
var post_min = document.getElementById("post-minimize");

function post_maximize () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if (wid > 900) {
		widf = wid * 0.9;
		post.style.width = widf + "px";

		if (wid < 1400) {
			cont.style.width = "99%";
		} else {
			cont.style.width = "99.4%";
		}
	}
}

function post_minimize () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if ( wid > 900 ) {
		post.style.removeProperty('width');
		cont.style.removeProperty('width');
	}
}

post_max.addEventListener('click', post_maximize, false);
post_min.addEventListener('click', post_minimize, false);

// By: h01000110 (hi)
// github.com/h01000110
// Originally From: 002.js

function numbers () {
	var fields = document.getElementsByTagName("code");
	for (field in fields) {
		var num = 0;
		var select = fields[field].innerText;
		var select_f = select.split(/\n/);
		var tab = document.createElement("table");

		// IF YOU USE MARKDOWN AND YOU HAVE BEEN GETTING ONE ADDITIONAL LINE IN YOUR TAG CODE
		// UNCOMMENT THE SECTION BELOW
		
		/* MARKDOWN SECTION /**/

		select_f.splice(-1, 1);

		/* END OF SECTION*/

		fields[field].innerHTML = "";
		fields[field].appendChild(tab);
		for (line in select_f) {
			var row = document.createElement("tr");
			var col = document.createElement("th");
			var colc = document.createElement("th");
			col.innerText = num + 1;
			colc.innerText = select_f[line];
			row.appendChild(col);
			row.appendChild(colc);
			tab.appendChild(row);
			num = num + 1;

			// STYLE SECTION - If you want, change it below

			col.style.textAlign = "right";
			colc.style.textAlign = "left";
			tab.style.border = "0";
			col.style.border = "0";
			colc.style.border = "0";
			col.style.padding = "3px";
			colc.style.padding = "3px";
			col.style.borderRight = "2px solid #777777";

			// END OF SECTION

		}
	}
}

window.onload = numbers();
