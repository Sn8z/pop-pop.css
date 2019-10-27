setPopBgColor = function(color) {
	var root = document.documentElement;
	root.style.setProperty('--bg-color', color);
};

toggleVisibility = function() {
	document.getElementById('toggle-demo').toggleAttribute('data-pop-show');
};