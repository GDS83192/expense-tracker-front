import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const Goal = ({ goal }) => {
  const { deleteGoal } = useContext(GlobalContext);

  
  return (
    <li>
      {goal.goalText}{" "}
      <span>
       
      </span>
      <button
        onClick={() => deleteGoal(goal._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
