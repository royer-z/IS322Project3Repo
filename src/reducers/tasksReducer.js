const tasksReducer = (state = [], action) => {
    let taskList = [ ...state ];
    switch (action.type) {
        case 'SET_TASKS':
            return action.payload;
        case 'ADD_TASK':
            return [
                ...state,
                { title: action.payload.title, type: action.payload.type, column: action.payload.column, id: state.length + 1 }
            ];
        case 'MARK_TODO':
            taskList.forEach(task => {
               if (task.id === action.payload) {
                   task.column = "todo";
               }
            });
            return taskList;
        case 'MARK_INPROGRESS':
            taskList.forEach(task => {
                if (task.id === action.payload) {
                    task.column = "in-progress";
                }
            });
            return taskList;
        case 'MARK_REVIEW':
            taskList.forEach(task => {
                if (task.id === action.payload) {
                    task.column = "review";
                }
            });
            return taskList;
        case 'MARK_DONE':
            taskList.forEach(task => {
                if (task.id === action.payload) {
                    task.column = "done";
                }
            });
            return taskList;
        case "DELETE_TASK":
            const taskIndex = state.findIndex(t => t.id === action.payload);
            taskList.splice(taskIndex, 1);
            return taskList;
        default:
            return state;
    }
};

export default tasksReducer;