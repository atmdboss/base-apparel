{
	//declarations
	let input;
	const form = document.querySelector("form");
	const message = document.getElementById("message");

	//event listener
	form.addEventListener("submit", validateForm);

	//function declarations
	function validateForm(evt) {
		evt.preventDefault();
		input = getInput();
		if (input.value.length < 1) {
			input.style.borderColor = "hsl(0, 93%, 68%)";
			message.textContent = "Please input a valid email address";
			message.style.color = "hsl(0, 93%, 68%)";
			setTimeout(() => {
				input.style.borderColor = "unset";
				message.textContent = "";
				message.style.color = "unset";
			}, 2000);
		}
	}
	function getInput() {
		return document.getElementById("email");
	}
}
