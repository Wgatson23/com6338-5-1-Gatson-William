var form = document.getElementById('add-todo');
var input = document.getElementById('todo-input');
var list = document.getElementById('todo-list');

form.onsubmit = function(event) {
    event.preventDefault();
    var text = input.value;
    var item = document.createElement('li');
    item.textContent = text;
    list.appendChild(item);
    input.value = '';
    }
    addEventListener(textValue);
    form.reset();
    }

    function addEventListener(textValue) {
        var item = document.createElement('li');
        item.textContent = textValue;
        list.appendChild(item);
    }

    list.addEventListener('click', function(event) {
      if (event.target.style.textDecoration != "line-through"){
        event.target.style.textDecoration = "line-through";

        } else {
          event.target.style.textDecoration = "none";
        }
        