const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const inputs = [dayInput, monthInput, yearInput];
const btn = document.getElementById("btn");
const regexLetters = /^[a-zA-Z]+$/;
const date = new Date().getFullYear();

const checkInputsError = input => {
	const nameOfTheInput = input.previousElementSibling;
	const errorText = input.nextElementSibling;
	const numMax = parseFloat(input.max);
	const yearErrorText = yearInput.nextElementSibling;

	if (input.value === "") {
		changeColorsToRed(input, nameOfTheInput, errorText);
	} else if (input.value > numMax || input.value < 1) {
		changeColorsToRed(input, nameOfTheInput, errorText);
		errorText.textContent = "Must be a valid day";
	} else if (yearInput.value > date) {
		changeColorsToRed(yearInput, yearInput.previousElementSibling, yearErrorText);
		yearErrorText.textContent = "Must be a valid day";
	} else {
		changeColorsToNormal(input, nameOfTheInput, errorText);
	}
};

const changeColorsToRed = (input, nameOfTheInput, errorText) => {
	nameOfTheInput.style.color = "hsl(0, 100%, 67%)";
	input.style.border = "1px solid hsl(0, 100%, 67%)";
	errorText.style.display = "block";
};

const changeColorsToNormal = (input, nameOfTheInput, errorText) => {
	nameOfTheInput.style.color = "hsl(0, 1%, 44%)";
	input.style.border = "1px solid hsl(0, 0%, 86%)";
	errorText.style.display = "none";
};

btn.addEventListener("click", () => {
	inputs.forEach(checkInputsError);
});

inputs.forEach(input => {
	input.addEventListener("input", () => {
		input.value = input.value.replace(/^0+/, "");
	});
});

window.onload = () => {
	inputs.forEach(input => {
		input.value = 1;
	});
	yearInput.value = date;
};
