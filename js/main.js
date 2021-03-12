
// || VARIABLES
const hum = document.querySelector(".hum");
const nav = document.querySelector("nav");

// || SITEWIDE
hum.onclick = function() {
	hum.classList.toggle("hum-close");
	nav.classList.toggle("nav-show");
}
