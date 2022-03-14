import React, { useState } from "react";
import { v4 } from "uuid";

const TaskContext = React.createContext({
  tasks: [],
  addTask: () => {},
  markComplete: () => {},
  deleteItem: () => {},
});

export const TaskProvider = (props) => {
  const localStored = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(localStored);

  const addTask = (title) => {
    const item = {
      id: v4(),
      title,
      done: false,
    };
    localStorage.setItem("tasks", JSON.stringify([item, ...tasks]));
    setTasks((tasks) => [item, ...tasks]);
  };

  const check = (id) => {
    const task = tasks.find((t) => t.id === id);
    task.done = !task.done;

    let updatedTasks = tasks.filter((task) => task.id !== id);
    if (task.done) updatedTasks = [...updatedTasks, task];
    else updatedTasks = [task, ...updatedTasks];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const deleteItem = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const ctx = {
    tasks: tasks,
    addTask,
    check,
    deleteItem,
  };

  return (
    <TaskContext.Provider value={ctx}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
