export const setTasks = tasks => {
    return {
        type: 'SET_TASKS',
        payload: tasks
    }
};

export const tasksError = errorMessage => {
    return {
        type: 'TASKS_ERROR'
    }
};

export const markToDo = (taskId )=> {
    return {
        type: 'MARK_TODO',
        payload: taskId
    }
};

export const markInProgress = (taskId )=> {
    return {
        type: 'MARK_INPROGRESS',
        payload: taskId
    }
};

export const markReview = (taskId )=> {
    return {
        type: 'MARK_REVIEW',
        payload: taskId
    }
};

export const markDone = (taskId) => {
    return {
        type: 'MARK_DONE',
        payload: taskId
    }
};

export const addTask = (title, type, column) => {
    return {
        type: "ADD_TASK",
        payload: {
            title, type, column
        }
    };
};

export const deleteTask = (taskId) => {
    return {
        type: "DELETE_TASK",
        payload: taskId
    };
};