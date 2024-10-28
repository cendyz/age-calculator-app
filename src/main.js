const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const finalBirthInfo = document.querySelectorAll(".main__content-text span");
const btn = document.getElementById("btn");
const inputs = [dayInput, monthInput, yearInput];
const currentDate = new Date();

const setInputStyles = (input, isValid, message = "") => {
	const color = isValid ? "hsl(0, 1%, 44%)" : "hsl(0, 100%, 67%)";
	const borderColor = isValid ? "hsl(0, 0%, 86%)" : "hsl(0, 100%, 67%)";
	const display = isValid ? "none" : "block";

	input.previousElementSibling.style.color = color;
	input.style.border = `1px solid ${borderColor}`;
	input.nextElementSibling.style.display = display;
	input.nextElementSibling.textContent = message;
};

const validateInput = (input, min, max, message) => {
	const value = parseInt(input.value);
	if (value < min || value > max || isNaN(value)) {
		setInputStyles(input, false, message);
		return false;
	}
	setInputStyles(input, true);
	return true;
};

const checkInputsError = () => {
	let isValid = true;

	isValid &= validateInput(dayInput, 1, 31, "Must be a valid day");
	isValid &= validateInput(monthInput, 1, 12, "Must be a valid month");
	isValid &= validateInput(yearInput, 1900, currentYear, "Must be in the past");

	inputs.forEach(input => {
		if (input.value.trim() === "") {
			setInputStyles(input, false, "This field is required");
			isValid = false;
		}
	});

	if (isValid) calculateBirth();
};

const calculateBirth = () => {
	const numDay = parseFloat(dayInput.value);
	const numMonth = parseFloat(monthInput.value) - 1;
	const numYear = parseFloat(yearInput.value);

	bornDate = new Date(numYear, numMonth, numDay);

	let years = currentDate.getFullYear() - bornDate.getFullYear();
	let months = currentDate.getMonth() - bornDate.getMonth();
	let days = currentDate.getDate() - bornDate.getDate();

	if (days < 0) {
		months--;
		days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	[years, months, days].forEach((val, i) => (finalBirthInfo[i].textContent = val));
};

btn.addEventListener("click", checkInputsError);

// window.onload = () => {
// 	inputs.forEach(input => {
// 		input.value = "";
// 	});
// };
