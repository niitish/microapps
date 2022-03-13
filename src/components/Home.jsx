import ClockImg from "./images/clock.png";
import ToDoImg from "./images/todo.png";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <ul className={classes.items}>
      <li>
        <Link to="/clock">
          <img src={ClockImg} alt="clock" />
          <span>Digital Clock</span>
        </Link>
      </li>
      <li>
        <Link to="/todo">
          <img src={ToDoImg} alt="todo" />
          <span>To Do</span>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
