import classes from "./ToDo.module.css";
import { TaskProvider } from "../../context/task-ctx";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

const ToDo = () => {
  return (
    <TaskProvider>
      <div className={classes.todo}>
        <h1>To Do</h1>
        <AddForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default ToDo;
