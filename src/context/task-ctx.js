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
    setTasks((tasks) => [item, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, item]));
  };

  const check = (id) => {
    const task = tasks.find((t) => t.id === id);
    task.done = !task.done;
    deleteItem(id);
    if (task.done) setTasks((tasks) => [...tasks, task]);
    else setTasks((tasks) => [task, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
  };

  const deleteItem = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
