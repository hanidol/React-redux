import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import TotalCompleteItems from "./components/TotalCompleteItems";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>My Todo List</h1>
      <AddTask />
      <ListTask />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
