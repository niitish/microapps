import ClockImg from "./images/clock.jpg";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <ul className={classes.items}>
      <li>
        <Link to="/clock">
          <img src={ClockImg} alt="clock" />
        </Link>
      </li>
    </ul>
  );
};

export default Home;
