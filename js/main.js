

// || VARIABLES
const hum = document.querySelector(".hum");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

let y;

// || SITEWIDE
hum.onclick = function() {
	hum.classList.toggle("hum-close");
	nav.classList.toggle("nav-show");
}

document.addEventListener('scroll', scrolling);

function scrolling() {
	y = window.scrollY;
	if(y > 52) {
		header.classList.add("fixed");
	}
	else {
		header.classList.remove("fixed");
	}
}
