/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector("#input");
const addBtn = document.querySelector("#submit-button");
const listUl = document.querySelector("#todo-list");
const resetBtn = document.querySelector("#reset");

/*----------------------------- Event Listeners -----------------------------*/
addBtn.addEventListener("click", addNewTodo);
resetBtn.addEventListener("click", resetList);

/*-------------------------------- Functions --------------------------------*/
function addNewTodo() {
	let newLi = document.createElement("li");
	if (input.value === "") {
		return alert("Please enter a valid To-do");
	}
	newLi.addEventListener("click", function () {
		if (newLi.style.listStyle === "circle") {
			newLi.style.listStyle = '"\\2713"';
		} else newLi.style.listStyle = "circle";
	});
	newLi.innerText = input.value;
	input.value = "";
	listUl.appendChild(newLi);
}

function resetList() {
	listUl.innerHTML = "";
}
