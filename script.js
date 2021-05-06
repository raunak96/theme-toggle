const checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener("change", e => {
	document.body.classList.toggle("dark");
	const sunMoonContainer = document.querySelector(".sun-moon-container");
	const currentRotation = parseInt(
		getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
	);
	sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
