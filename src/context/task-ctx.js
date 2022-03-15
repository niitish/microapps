import React, { useState } from "react";
import { v4 } from "uuid";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (title) => {},
  // markComplete: () => {},
  deleteTask: (id) => {},
  updateTask: (id, newTitle, flag) => {},
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

  // const check = (id) => {
  //   const task = tasks.find((t) => t.id === id);
  //   task.done = !task.done;

  //   let updatedTasks = tasks.filter((task) => task.id !== id);
  //   if (task.done) updatedTasks = [...updatedTasks, task];
  //   else updatedTasks = [task, ...updatedTasks];

  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  //   setTasks(updatedTasks);
  // };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const updateTask = (id, newTitle, flag) => {
    const task = tasks.find((t) => t.id === id);
    if (flag) task.done = !task.done;
    else task.title = newTitle;

    let updatedTasks = tasks.filter((task) => task.id !== id);
    if (task.done) updatedTasks = [...updatedTasks, task];
    else updatedTasks = [task, ...updatedTasks];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const ctx = {
    tasks: tasks,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <TaskContext.Provider value={ctx}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
