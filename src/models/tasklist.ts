import { Task } from "./task";
import { Priority } from "./priority";

class TaskList {
    static NUM_TASK_LIST: number = 0;

    name: string;
    _list: Array<Task>;
    _id: number;

    constructor(name: string) {
        this.name = name;
        this._list = [];

        this._id = TaskList.NUM_TASK_LIST++;
    }

    addToTaskList(
            name: string,
            priority?: Priority, 
            dueDate?: string,
            dueTime?: string, 
            notes?: string) {

        if (typeof priority == 'undefined') {
            priority = Priority.NONE;
        } 

        if (typeof dueDate == 'undefined') {
            dueDate = "";
        }

        if (typeof dueTime == 'undefined') {
            dueTime = "";
        }

        if (typeof notes == 'undefined') {
            notes = ""
        }

        let task = new Task(name, priority, dueDate, dueTime, notes);

        this._list.push(task);
    }



}

export { TaskList };