import React from 'react';
import { Link } from "react-router-dom";

import '../styles/NavBar.css';

class NavBar extends React.Component{
    state = {currentPage: "/"};

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? "nav-link current" : "nav-link notCurrent";
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render() {
        return (
            <div className="row">
                <h1>Task Board</h1>
                <header className="col-sm">
                    <nav className="navbar navbar-expand-sm">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/')} to="/" onClick={event => this.onTabClick(event, '/')}>Grid View</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/AddTask')} to="/AddTask" onClick={event => this.onTabClick(event, '/AddTask')}>Add Task</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/lists/todo')} to="lists/todo" onClick={event => this.onTabClick(event, '/lists/todo')}>To Do</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/lists/inprogress')} to="/lists/inprogress" onClick={event => this.onTabClick(event, '/lists/inprogress')}>In Progress</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/lists/review')} to="/lists/review" onClick={event => this.onTabClick(event, '/lists/review')}>Review</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.isActiveTab('/lists/done')} to="/lists/done" onClick={event => this.onTabClick(event, '/lists/done')}>Done</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <h5>By Abraar, Andy, and Royer&nbsp;-&nbsp;IS 322 - 102</h5>
            </div>
        )
    }
}

export default NavBar;