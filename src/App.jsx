import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { Adding } from "./redux/counterSlice";

const App = () => {
  const counting = useSelector((e) => e.counter.name);
  const sending = useDispatch();
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      {/* <p>{counting}</p>
      <button onClick={()=>sending(Adding())}>Click me</button> */}
    </>
  );
};

export default App;
