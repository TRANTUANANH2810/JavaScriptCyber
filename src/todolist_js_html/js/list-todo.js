class ListTodo {
    constructor(arr) {
        this.__value = arr;
    }

    get value() {
        return this.__value;
    }

    update(arr) {
        this.__value = arr;
    }
    // addTodo(todo)
    addTodo(todo) {
        this.__value.unshift(todo);
    }

    // removeTodoById

    // softTodo(direction)

    // getAllTodoDone

    // getAllTodoInProgress

    // toggleTodoById(id)
}
