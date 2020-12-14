import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import {Goal} from "./Goal"
export const GoalList = () => {
  const { goals, getGoals } = useContext(GlobalContext);

  //we use useEffect when we make http request from a component
  useEffect(() => {
    getGoals();
    
  }, []); //it will run only once
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {goals.map((goal) => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </ul>
     {/* Need to fix Goal Model to not allow empty goals */}
    </div>
  );
};
