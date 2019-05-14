import React from 'react';

const TaskItem4 = props => {
    return (
        <div className="card mb-1">
            <div className="card-body">
                <div className="card-title">
                    <h3>{ props.task.title }</h3>
                </div>
                <div className="card-subtitle">
                    <span className="text-muted">ID: </span>
                    { props.task.id }
                </div>
                <div className="card-text">
                    <span className="text-muted">Type: </span>
                    { props.task.type }
                </div>

                <button type="button"
                        onClick={() => props.markToDo(props.task)}
                        className="btn btn-primary mt-3 mr-3">
                    To Do
                </button>
                <button type="button"
                        onClick={() => props.markInProgress(props.task)}
                        className="btn btn-primary mt-3 mr-3">
                    InProgress
                </button>
                <button type="button"
                        onClick={() => props.markDone(props.task)}
                        className="btn btn-primary mt-3 mr-3">
                    Done
                </button>
                <button type="button"
                        onClick={() => props.deleteTask(props.task)}
                        className="btn btn-danger mt-3 mr-3">
                    Delete
                </button>
            </div>
        </div>
    )
};

export default TaskItem4;