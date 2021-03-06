import React, { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./components/Home";
const Clock = React.lazy(() => import("./components/clock/Clock"));
const ToDo = React.lazy(() => import("./components/todo/ToDo"));

const App = () => {
  return (
    <div>
      <header className={classes.header}>
        <NavLink to="/">MicroApps</NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="clock" exact element={<Clock />} />
            <Route path="todo" exact element={<ToDo />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
