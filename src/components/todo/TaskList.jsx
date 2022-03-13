import classes from "./TaskList.module.css";
import { useContext } from "react";
import TaskContext from "../../context/task-ctx";
import Checked from "./icons/checked.png";
import Bin from "./icons/bin.png";

const TaskList = () => {
  const ctx = useContext(TaskContext);
  return (
    <ul className={classes.list}>
      {ctx.tasks.length === 0 ? (
        <p>Nothing here yet.</p>
      ) : (
        ctx.tasks.map(({ id, title, done }) => (
          <li key={id}>
            <button onClick={() => ctx.check(id)}>
              <img src={Checked} alt="check" />
            </button>
            <h2>{(done && <strike>{title}</strike>) || title}</h2>
            <button onClick={() => ctx.deleteItem(id)}>
              <img src={Bin} alt="delete" />
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
