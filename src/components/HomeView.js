import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import GridView from './GridView';
import { setTasks, tasksError } from "../actions";

class HomeView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {view: "gridView"};
    }

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

    onAddTask = () => {
        this.setState({view: "gridView"})
    };

    render() {
        return (
            <div>
                <GridView />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        errorMessage: state.errors.getTasks
    };
};

export default connect(mapStateToProps, { setTasks, tasksError })(HomeView);