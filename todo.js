const todosDiv = document.getElementById("todos");
const inputField = document.getElementById("buildwebapp");
const items = document.getElementById("items");
const whatToDo = document.getElementsByClassName("whattodo")[0];

todosDiv.style.display = "none";
whatToDo.style.display = "none";
inputField.style.display = "none";
// function to display all available todos (loaded from localStorage)
function displayTodos() {
    const stored_todos = JSON.parse(localStorage.getItem("my-todos"));
    inputField.style.display = "flex";
    if (!stored_todos || stored_todos.length == 0) {
       whatToDo.style.display="block"
        todosDiv.style.display = "none";
        return;
    }
    whatToDo.style.display = "none";
    todosDiv.style.display = "block";
    items.innerHTML = "";
    for (let todo of stored_todos) {
        let newItem = document.createElement("div");
        newItem.setAttribute("class", "item");
        let secondItem = document.createElement("div");
        let icon1 = document.createElement("i");
        let span = document.createElement("span");
        span.append(todo.data)
        if (todo.isCompleted) {
            icon1.setAttribute("class", "fa fa-check-circle");
            span.style.textDecoration = "line-through";
        } else {
            icon1.setAttribute("class", "fa fa-circle-thin");
            span.style.textDecoration = "none";
        }
        secondItem.appendChild(icon1);
        secondItem.appendChild(span);
        let icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa fa-close");
        newItem.appendChild(secondItem);
        newItem.appendChild(icon2);
        // when change completeness icon is clicked
        icon1.onclick = function () {
            changeCompletenessStatus(stored_todos, todo.id);
        }

        // when delete icon is clicked
        icon2.onclick = function () {
            deleteTodo(stored_todos, todo.id);
        }

        items.appendChild(newItem);
    }
}

// function to change completeness status

function changeCompletenessStatus(todosList, idToChange) {
    let todosCopy = [...todosList];
    for (let i = 0; i < todosCopy.length; i++) {
        if (todosCopy[i].id == idToChange) {
            todosCopy[i].isCompleted = !todosCopy[i].isCompleted
        }
    }
    localStorage.setItem("my-todos", JSON.stringify(todosCopy));
    displayTodos();
}

// function to delete a todo
function deleteTodo(todosList, idToDelete) {
    let todosCopy = todosList.filter((todo) => todo.id !== idToDelete)
    localStorage.setItem("my-todos", JSON.stringify(todosCopy));
    displayTodos();
}

// handle ENTER key pressed on input
inputField.onkeydown = function (data) {
    if (data.keyCode == 13) {
        addNewTodo();
    }
}

// function to add a new todo
function addNewTodo() {
    let todos = [];
    const stored_todos = JSON.parse(localStorage.getItem("my-todos"));
    if (stored_todos) {
        todos = stored_todos;
    }
    if (inputField.value == "") {
        return;
    }
    const newTodo = {
        id: todos.length + 1,
        isCompleted: false,
        data: inputField.value
    };

    todos.push(newTodo);
    localStorage.setItem("my-todos", JSON.stringify(todos));
    inputField.value = "";
    displayTodos();
}

window.onload = displayTodos;





let arr= ["wakup","bathe"]
le
localStorage.setItem("todo",JSON.stringify(arr))

let todosjson = localStorage.getItem("todo") // "["wakup","bathe"]"
let todos = JSON.parse(todosjson)
todos.append("Taking breakfast")
localStorage.setItem("todo". JSON.stringify)
