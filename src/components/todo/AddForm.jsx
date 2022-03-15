import classes from "./AddForm.module.css";
import { useRef, useContext } from "react";
import TaskContext from "../../context/task-ctx";
import Add from "./icons/add.png";

const AddForm = () => {
  const ctx = useContext(TaskContext);

  const taskRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const title = taskRef.current.value;

    if (title.trim() === "") {
      return;
    }

    ctx.addTask(title);
    taskRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="task">Enter task</label>
      <section>
        <input autoFocus ref={taskRef} type="text" name="task" id="task" />
        <button type="submit">
          <img src={Add} alt="add" />
        </button>
      </section>
    </form>
  );
};

export default AddForm;
