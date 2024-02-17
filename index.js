var form = document.getElementById("add-todo");
var listItems = document.getElementById("todo-list");
var buttons;

form.onsubmit = function (e) {
	var textValue = document.querySelector("input").value;
	if (textValue == "" || textValue.trim().length === 0) {
		form.reset();
		return;
	}
	addLi(textValue);
	form.reset();
};

function addLi(item) {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(btn);
	btn.innerHTML = item;
	listItems.appendChild(li);
	buttons = listItems.querySelectorAll("button");
}

listItems.addEventListener("click", function (e) {
	if (e.target.style.textDecoration != "line-through") {
		e.target.style.textDecoration = "line-through";
	} else if ((e.target.style.textDecoration = "line-through")) {
		e.target.parentElement.remove();
	}
});
