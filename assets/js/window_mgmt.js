document.body.addEventListener('click', function (event) {
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
