import React from "react";
import TodoTask from "./TodoTask";
import { useSelector } from "react-redux";

const ListTask = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoTask id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default ListTask;
