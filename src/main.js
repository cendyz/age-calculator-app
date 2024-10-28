const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const inputs = [dayInput, monthInput, yearInput];
const finalBirthInfo = document.querySelectorAll(".main__content-text span");
const btn = document.getElementById("btn");
const regexLetters = /^[a-zA-Z]+$/;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearInput.setAttribute("max", currentYear);

const checkInputsError = input => {
	const nameOfTheInput = input.previousElementSibling;
	const errorText = input.nextElementSibling;
	const numMax = parseFloat(input.max);
	const yearErrorText = yearInput.nextElementSibling;

	if (input.value === "") {
		changeColorsToRed(input, nameOfTheInput, errorText);
	} else if (input.value > numMax || input.value < 1) {
		changeColorsToRed(input, nameOfTheInput, errorText);
		errorText.textContent = `Must be a valid ${nameOfTheInput.textContent}`;
		allToRed();
	} else if (yearInput.value > currentYear) {
		changeColorsToRed(yearInput, yearInput.previousElementSibling, yearErrorText);
		yearErrorText.textContent = "Must be in the past";
	} else {
		changeColorsToNormal(input, nameOfTheInput, errorText);
		calculateBirth();
	}
};

const changeColorsToRed = (input, nameOfTheInput, errorText) => {
	nameOfTheInput.style.color = "hsl(0, 100%, 67%)";
	errorText.style.display = "block";
	input.style.border = "1px solid hsl(0, 100%, 67%)";
};

const allToRed = params => {
	inputs.forEach(el => {
		el.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
		el.style.border = "1px solid hsl(0, 100%, 67%)";
	});
};

const changeColorsToNormal = (input, nameOfTheInput, errorText) => {
	nameOfTheInput.style.color = "hsl(0, 1%, 44%)";
	input.style.border = "1px solid hsl(0, 0%, 86%)";
	errorText.style.display = "none";
};

const calculateBirth = () => {
	let birthDay = currentDate.getDate();
	let birthMonth = currentDate.getMonth();
	let birthYear = currentYear;

	birthDay = birthDay - dayInput.value;
	birthMonth = birthMonth - monthInput.value;
	birthYear = birthYear - yearInput.value;

	finalBirthInfo[2].textContent = birthDay;
	finalBirthInfo[1].textContent = birthMonth + 1;
	finalBirthInfo[0].textContent = birthYear;
};

btn.addEventListener("click", () => {
	inputs.forEach(checkInputsError);
});

inputs.forEach(input => {
	input.addEventListener("input", () => {
		input.value = input.value.replace(/^0+/, "");
	});
});

// window.onload = () => {
// 	inputs.forEach(input => {
// 		input.value = "";
// 	});
// };
