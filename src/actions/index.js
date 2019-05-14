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
    }
};