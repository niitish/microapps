import classes from "./TaskList.module.css";
import { useContext } from "react";
import TaskContext from "../../context/task-ctx";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const ctx = useContext(TaskContext);
  const pendingTasks = ctx.tasks.filter((task) => task.done === false);
  const doneTasks = ctx.tasks.filter((task) => task.done === true);

  return (
    <>
      <ul className={classes.list}>
        {(pendingTasks.length === 0 && <p>Nothing here yet!</p>) ||
          pendingTasks.map((task) => <TaskItem {...task} />)}
      </ul>
      <ul className={classes.list}>
        {(doneTasks.length === 0 && <p>Nothing here yet!</p>) ||
          doneTasks.map((task) => <TaskItem {...task} />)}
      </ul>
    </>
  );
};

export default TaskList;
