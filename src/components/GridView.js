import React from 'react';
import { connect } from "react-redux";

import { markToDo } from "../actions";
import { markInProgress } from "../actions";
import { markReview} from "../actions";
import { markDone } from "../actions";
import { deleteTask } from "../actions";

import TaskItem from './TaskItem';
import TaskItem2 from './Taskitem2';
import TaskItem3 from './Tastitem3';
import TaskItem4 from './TaskItem4';

import '../styles/GridView.css';

class GridView extends React.Component {

    markToDo = (task) => {
        this.props.markToDo(task.id);
    };

    markInProgress = (task) => {
        this.props.markInProgress(task.id);
    };

    markReview = (task) => {
        this.props.markReview(task.id);
    };

    markDone = (task) => {
        this.props.markDone(task.id);
    };

    deleteTask = (task) => {
        this.props.deleteTask(task.id);
    };

    render() {
        const taskItems3 = this.props.tasks.map(task => {
            if(task.column === "todo") {
                return <TaskItem3 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
            }
        });

        const taskItems2 = this.props.tasks.map(task => {
            if(task.column === "in-progress") {
                return <TaskItem2 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
            }
        });

        const taskItems4 = this.props.tasks.map(task => {
            if(task.column === "review") {
                return <TaskItem4 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
            }
        });

        const taskItems = this.props.tasks.map(task => {
            if(task.column === "done") {
                return <TaskItem task={task} key={task.id} markToDo={this.markToDo}  markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
            }
        });

        return (
            <div className="row">
                <div className="col p-0">
                    <div className="card oddCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h2>To Do</h2></div>
                                {taskItems3}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card evenCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h2>In Progress</h2></div>
                            {taskItems2}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card oddCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h2>Review</h2></div>
                            {taskItems4}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card evenCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h2>Done</h2></div>
                            {taskItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps, { markToDo, markInProgress, markReview, markDone, deleteTask })(GridView);
