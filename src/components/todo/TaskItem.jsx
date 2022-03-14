import classes from "./TaskItem.module.css";
import Checked from "./icons/checked.png";
import Bin from "./icons/bin.png";
import Uncheck from "./icons/uncheck.png";
import TaskContext from "../../context/task-ctx";
import { useContext } from "react";

const TaskItem = ({ tasks }) => {
  const ctx = useContext(TaskContext);

  return (
    <ul className={classes.list}>
      {tasks.length === 0 ? (
        <p>Nothing here yet.</p>
      ) : (
        tasks.map(({ id, title, done }) => (
          <li key={id}>
            <button onClick={() => ctx.check(id)}>
              <img src={done ? Uncheck : Checked} alt="check" />
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

export default TaskItem;
