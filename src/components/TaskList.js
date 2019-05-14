import React from 'react';

import { connect } from "react-redux";

import { markToDo } from "../actions";
import { markInProgress } from "../actions";
import { markReview} from "../actions";
import { markDone } from "../actions";
import { deleteTask } from "../actions";

import { setTasks, tasksError } from "../actions";

import TaskItem from './TaskItem';
import TaskItem2 from './Taskitem2';
import TaskItem3 from './Tastitem3';
import TaskItem4 from './TaskItem4';

import '../styles/GridView.css';
import axios from "axios";

class TaskList extends React.Component {

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        if (this.props.tasks.length === 0) {
            axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
                .then(response => {
                    this.props.setTasks(response.data);
                }).catch(error => {
                this.props.tasksError();
            });
        }
    };

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
        let listTitle = "";
        const taskItem = this.props.tasks.map(task => {
            if (this.props.match.params.listTitle === "todo") {
                listTitle = "To Do";
                if (task.column === "todo") {
                    return <TaskItem3 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
                }
            }
            if (this.props.match.params.listTitle === "inprogress") {
                if (task.column === "in-progress") {
                    listTitle = "In Progress";
                    return <TaskItem2 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>                }
            }
            if (this.props.match.params.listTitle === "review") {
                listTitle = "Review";
                if (task.column === "review") {
                    return <TaskItem4 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
                }
            }
            if (this.props.match.params.listTitle === "done") {
                listTitle = "Done";
                if (task.column === "done") {
                    return <TaskItem task={task} key={task.id} markToDo={this.markToDo}  markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone} deleteTask={this.deleteTask}/>
                }
            }
        });

        return (
            <div className="row">
                <div className="col p-0">
                    <div className="card oddCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h2>{ listTitle }</h2></div>
                            {taskItem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps, { setTasks, tasksError, markToDo, markInProgress, markReview, markDone, deleteTask })(TaskList);