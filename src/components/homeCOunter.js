import React from "react";
import ParentCounter from "./parentCounter";
import ChildCounter from "./childCounter";
import { useSelector } from "react-redux";

const HomeCOunter = () => {
  const select = useSelector((state) => state);
  const count = select.CounterReducer.count;
  return (
    <div>
      <ParentCounter />
      <h2>{count}</h2>
      <ChildCounter />
    </div>
  );
};

export default HomeCOunter;
