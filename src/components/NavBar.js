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
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;