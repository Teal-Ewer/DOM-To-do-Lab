/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector("#input");
const button = document.querySelector("#submit-button");
const listUl = document.querySelector("#todo-list");

/*----------------------------- Event Listeners -----------------------------*/
button.addEventListener("click", function (e) {
	let newLi = document.createElement("li");
	if (input.value === "") {
		return alert("Please enter a valid To-do");
	}
	newLi.innerText = input.value;
	input.value = "";
	listUl.appendChild(newLi);
});

/*-------------------------------- Functions --------------------------------*/
