import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import HomeView from "./HomeView";
import AddTaskView from "./AddTaskView";
import VariableTask from "./VariableTask";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <div>
                    <Route path="/" exact component={ HomeView } />
                    <Route path="/AddTask" exact component={ AddTaskView } />
                    <Route path="/tasks/:id" component={ VariableTask } />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;