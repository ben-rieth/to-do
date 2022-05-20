const Task = (name: string, 
            priority: "none" | "low" | "mid" | "high" = "none",
            dueDate?: string | "none",
            dueTime?: string | "none", 
            notes?: string) => {

    let dateAdded = Date();
    let complete = false;

    const getDateAdded = () : string => dateAdded;

    const completeTask = () => {
        complete = true;
    }

    const unCompleteTask = () => {
        complete = false;
    }

    const isComplete = () : boolean => complete;

    return {
        name,
        priority,
        dueDate,
        dueTime,
        notes,
        getDateAdded,
        completeTask,
        unCompleteTask,
        isComplete
    }
}

export { Task };