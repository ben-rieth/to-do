import { TaskList } from "./tasklist";

class User {
    _taskLists: Array<TaskList>;

    createTaskList(name: string) {
        let newList = new TaskList(name);

        this._taskLists.push(newList);
    }
}