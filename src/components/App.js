import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import HomeView from "./HomeView";
import AddTaskView from "./AddTaskView";
import TaskList from "./TaskList";

const App = () => {
    return (
        // listTitle options: todo, inprogress, review, done
        <div>
            <BrowserRouter>
                <NavBar/>
                <div>
                    <Route path="/" exact component={ HomeView } />
                    <Route path="/AddTask" exact component={ AddTaskView } />
                    <Route path="/lists/:listTitle" exact component={ TaskList } />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;