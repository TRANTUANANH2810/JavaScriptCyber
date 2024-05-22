var listTodoObj = new ListTodo([]);

function render(listTodo) {
    var todoPlace = document.getElementById("todo");

    var content = "";
    length = listTodo.length;
    for (var i = 0; i < length; i++) {
        content += " <li>" + listTodo[i].name + "</li>";
    }

    ///// c2
    // listTodo.forEach((item) => {
    //     content += `<li> ${item.name}</li>`;
    // });

    todoPlace.innerHTML = content;
}

function handleAddTodo() {
    /**
     * 1: lay gia tri input
     * 2: khoi tao obj todo
     * 3: Luu obj vao mang
     */

    var valueInput = document.getElementById("newTask").value;

    var todo = new Todo(valueInput);

    listTodoObj.addTodo(todo);
    render(listTodoObj.value);

    // console.log(listTodo.value);
}

document.getElementById("addItem").onclick = handleAddTodo;
