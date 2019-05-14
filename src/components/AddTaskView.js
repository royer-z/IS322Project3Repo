import React from 'react';
import { connect } from "react-redux";

import { addTask } from "../actions";

class AddTaskView extends React.Component {

    state = { newTask: 'Untitled', type: "task", column: "todo" };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addTask(this.state.newTask, this.state.type, this.state.column);
        this.setState({ newTask: 'Untitled', type: "task", column: "todo" });
        this.props.history.goBack();
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <h2>Add Task</h2>
                <label htmlFor="newTask"><h3>Title</h3></label>
                <input type="text" className="form-control" name="newTask" value={this.state.newTask} onChange={(e) => this.setState({ newTask: e.target.value })} />
                <br></br>
                <label><h3>Type</h3></label>
                    <select onChange={(e) => this.setState({ type: e.target.value })} className="form-control">
                        <option value="task">task</option>
                        <option value="bug">bug</option>
                        <option value="feature">feature</option>
                    </select>
                <br></br>
                <input type="submit" value="Add Task" className="btn btn-success mt-1"/>
            </form>
        );
    };
}

export default connect(null, { addTask })(AddTaskView);