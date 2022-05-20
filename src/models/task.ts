import { Priority } from './priority';

class Task {
    static NUM_TASK: number = 0;

    name: string;
    priority: Priority;
    dueDate: string;
    dueTime: string;
    notes: string;
    _dateAdded: string;
    _complete: boolean;
    _id: number;

    constructor(name: string, 
                priority: Priority,
                dueDate: string,
                dueTime: string,
                notes: string) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.notes = notes;

        this._dateAdded = Date();
        this._complete = false;

        this._id = Task.NUM_TASK++;
    }

    get dateAdded() : string {
        return this._dateAdded;
    }

    get isComplete() : boolean {
        return this._complete;
    }

    toggleComplete() {
        this._complete = !this._complete;
    } 

}

export { Task };