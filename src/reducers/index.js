import { combineReducers} from "redux";

const DEFAULT_STATE = {
    tasks: [
    {
        "id": 1,
        "title": "Install React",
        "type": "task",
        "column": "done"
    },
    {
        "id": 2,
        "title": "Setup GitHub",
        "type": "task",
        "column": "review"
    },
    {
        "id": 3,
        "title": "Invite Collaborators",
        "type": "task",
        "column": "done"
    },
    {
        "id": 4,
        "title": "Install Dependencies",
        "type": "task",
        "column": "in-progress"
    },
    {
        "id": 5,
        "title": "Create App Component",
        "type": "feature",
        "column": "review"
    },
    {
        "id": 6,
        "title": "Plan Component Diagram",
        "type": "task",
        "column": "review"
    },
    {
        "id": 7,
        "title": "Create Grid View",
        "type": "feature",
        "column": "in-progress"
    },
    {
        "id": 8,
        "title": "Create List View",
        "type": "feature",
        "column": "todo"
    },
    {
        "id": 9,
        "title": "Create Add Form",
        "type": "feature",
        "column": "todo"
    },
    {
        "id": 10,
        "title": "App Crashs! :(",
        "type": "bug",
        "column": "done"
    }
    ]
};

const taskReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case "ADD_TASK":
      case "DELETE_TASK":
      default:
          return state;
  }
};

export default combineReducers({
    tasks: taskReducer
});