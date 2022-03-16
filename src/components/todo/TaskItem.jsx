import classes from "./TaskItem.module.css";
import { useState, useRef, useContext } from "react";
import TaskContext from "../../context/task-ctx";
import Modal from "../UI/Modal";
import { Check, Edit, Uncheck, Bin, Cancel, Update } from "./icons/Icons";

const TaskItem = ({ tasks }) => {
  const ctx = useContext(TaskContext);
  const newTitleRef = useRef();
  const [modal, setModal] = useState(false);

  const visibilityHandler = () => {
    setModal((modal) => !modal);
  };

  const submitHandler = (id) => {
    const newTitle = newTitleRef.current.value;
    if (newTitle.trim() === "") {
      newTitleRef.current.value = "";
      visibilityHandler();
      return;
    }

    ctx.updateTask(id, newTitle, false);
    newTitleRef.current.value = "";
    visibilityHandler();
  };

  return (
    <ul className={classes.list}>
      {tasks.length === 0 ? (
        <p>Nothing here yet.</p>
      ) : (
        tasks.map(({ id, title, done }) => (
          <li key={id}>
            <h2>{(done && <strike>{title}</strike>) || title}</h2>
            <span>
              <button onClick={() => ctx.updateTask(id, null, true)}>
                <img src={done ? Uncheck : Check} alt="check" />
              </button>
              <button onClick={visibilityHandler}>
                <img src={Edit} alt="edit" />
              </button>

              {modal && (
                <Modal className={classes.modal} onCancel={visibilityHandler}>
                  <form onSubmit={() => submitHandler(id)}>
                    <label>
                      <h2> Enter new title</h2>
                    </label>
                    <input
                      autoFocus
                      defaultValue={title}
                      ref={newTitleRef}
                      type="text"
                    />
                    <div>
                      <button type="reset" onClick={visibilityHandler}>
                        <img src={Cancel} alt="cancel" />
                      </button>
                      <button type="submit">
                        <img src={Update} alt="update" />
                      </button>
                    </div>
                  </form>
                </Modal>
              )}

              <button onClick={() => ctx.deleteTask(id)}>
                <img src={Bin} alt="delete" />
              </button>
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskItem;
