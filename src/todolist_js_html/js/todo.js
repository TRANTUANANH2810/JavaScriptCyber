var id = 1;

var STATUS = {
    DONE: "done",
    IN_PROGRESS: "in-progress",
};
class Todo {
    constructor(name) {
        this.name = name;

        // mawcj ddinhj laays tuwf globalThis, ddeer id khoong dducowj trung nhau
        this.__id = id;

        // tang id len +1
        id += 1;

        // mac dinh khoi tao obj se la in-progress
        this.status = "in-progress";
    }

    get id() {
        return this.__id;
    }

    toggleStatus() {
        if (this.isDone) {
            this.status = STATUS.IN_PROGRESS;
        } else {
            this.status = STATUS.DONE;
        }
    }

    get isDone() {
        return this.status == STATUS.DONE;
    }

    isInProgress() {
        return this.status == STATUS.IN_PROGRESS;
    }
}

// console.log(new Todo("js"));
// console.log(new Todo("js2"));
// console.log(new Todo("js3"));
// console.log(new Todo("js3"));
