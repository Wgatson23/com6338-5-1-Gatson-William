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
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
        if (event.target.classList.contains('done')) {
          event.target.classList.remove('done');
        }
        }
