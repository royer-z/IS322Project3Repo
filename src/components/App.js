import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomeView from "./HomeView";
import AddTaskView from "./AddTaskView";
import NavBar from "./NavBar";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <div>
                    <Route path="/" exact component={ HomeView } />
                    <Route path="/AddTask" exact component={ AddTaskView } />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;