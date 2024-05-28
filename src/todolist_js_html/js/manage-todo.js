class ManageTodo {
    constructor(arr) {
        this.__value = arr;
    }

    get value() {
        return this.__value;
    }

    update(arr) {
        // this.value = arr; // ❌

        this.__value = arr;
    }

    // addTodo(todo)
    addTodo(todo) {
        // this.value.unshift(todo); ❌

        this.__value.unshift(todo);
    }

    // removeTodoById(id)
    removeTodoById(id) {
        // Lấy những todo nào có id khác với id truyền vào.
        var newListTodo = this.__value.filter(function (todo) {
            return todo.id != id;
        });

        // gán lại giá trị mới cho __value.
        this.__value = newListTodo;
    }

    // sortTodo(direction) [[ direction = 'asc' | 'desc' ]]

    // getAllTodoDone

    // getAllTodoInProgress

    // toggleTodoById(id)
    toggleStatusTodoById(id) {
        var todo = this.value.find(function (todo) {
            return todo.id == id;
        });

        todo.toggleStatus();
    }

    render() {
        this.renderDone();
        this.renderInProgress();
    }

    getContent(list) {
        return list
            .map(function (item) {
                return `
          <li>
            <span>${item.name}</span>
            <div class="buttons">
              <button class="remove" onclick="handleRemoveTodo(${item.id})">
                  <i class="fa fa-trash-alt"></i>
              </button>
              <button class="complete" onclick="handleToggleStatusTodo(${item.id})" >
                  <i class="far fa-check-circle"></i>
                  <i class="fas fa-check-circle"></i>
              </button>
            </div>
          </li>`;
            })
            .join("");
    }

    findAllTodoDone() {
        return this.value.filter(function (todo) {
            return todo.status == STATUS.DONE; // true
        });
    }

    findAllTodoInProgress() {
        var arr = this.value.filter(function (todo) {
            return todo.status == STATUS.IN_PROGRESS;
        });

        return arr;
    }

    renderDone() {
        var todoPlace = document.getElementById("completed");

        var listTodoDone = this.findAllTodoDone();

        var content = this.getContent(listTodoDone);

        todoPlace.innerHTML = content;
    }

    renderInProgress() {
        var todoPlace = document.getElementById("todo");

        var listTodoInProgress = this.findAllTodoInProgress();

        var content = this.getContent(listTodoInProgress);

        todoPlace.innerHTML = content;
    }

    sortASC() {
        /**
         * 0: Không thay đổi
         * 1:
         * -1:
         */

        var newArr = [...this.__value];

        /**
         * sort: làm thay đổi mảng gốc.
         */
        var result = newArr.sort(function (a, b) {
            // localeCompare: dùng để so sánh 2 chuỗi string.
            return a.name.localeCompare(b.name);
        });

        this.__value = result;
    }

    sortDESC() {
        this.sortASC();
        this.__value.reverse();
    }
}

// var list = new ListTodo([]);
// console.log(list);

// list.update([1, 2, 3]);

// console.log(list);
