setPopBgColor = (color) => {
	const root = document.documentElement;
	root.style.setProperty('--bg-color', color);
};

toggleVisibility = () => {
	document.getElementById('toggle-demo').toggleAttribute('data-pop-show');
}