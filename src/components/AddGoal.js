import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddGoal = () => {
  const [goalText, setGoal] = useState("");
  

  const { addGoal } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 100000000), //coz uuid wasn't working
      goalText,
      
    };

    addGoal(newGoal);
  };

  return (
    <div>
      <h3>Add new Goal</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={goalText}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
       
        <button className="btn">Add Goal</button>
      </form>
    </div>
  );
};
