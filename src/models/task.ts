class Task {
    name: string;
    priority: "none" | "low" | "mid" | "high";
    dueDate?: string;
    dueTime?: string;
    notes?: string;
    _dateAdded: string;
    _complete: boolean;

    constructor(name: string, 
                priority: "none" | "low" | "mid" | "high"="none",
                dueDate?: string,
                dueTime?: string,
                notes?: string) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.notes = notes;

        this._dateAdded = Date();
        this._complete = false;
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

// const Task = (name: string, 
//             priority: "none" | "low" | "mid" | "high" = "none",
//             dueDate?: string | "none",
//             dueTime?: string | "none", 
//             notes?: string) => {

//     let dateAdded = Date();
//     let complete = false;

//     const getDateAdded = () : string => dateAdded;

//     const completeTask = () => {
//         complete = true;
//     }

//     const unCompleteTask = () => {
//         complete = false;
//     }

//     const isComplete = () : boolean => complete;

//     return {
//         name,
//         priority,
//         dueDate,
//         dueTime,
//         notes,
//         getDateAdded,
//         completeTask,
//         unCompleteTask,
//         isComplete
//     }
// }

export { Task };