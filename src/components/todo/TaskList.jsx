import { useContext } from "react";
import TaskContext from "../../context/task-ctx";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const ctx = useContext(TaskContext);
  return (
    <>
      <TaskItem tasks={ctx.tasks.filter((task) => task.done === false)} />
      <TaskItem tasks={ctx.tasks.filter((task) => task.done === true)} />
    </>
  );
};

export default TaskList;
