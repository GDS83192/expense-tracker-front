import React, { useState, useContext, useEffect } from "react";
import GoalContext from "../../context/goal/goalContext";

const GoalForm = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  const goalContext = useContext(GoalContext);

  const {
    addGoal,
    updateGoal,
    clearCurrent,
    current
  } = goalContext;

  useEffect(() => {
    if (current !== null) {
      setGoal(current);
    } else {
      setGoal({
        date: today,
        description: ""
      });
    }
    // eslint-disable-next-line
  }, [goalContext, current]);

  const [goal, setGoal] = useState({
    description: ""
  });

  const { description } = goal;

  const onChange = e =>
    setGoal({ ...goal, [e.target.name]: e.target.value });

  const onInput = e => {
    if (e.target.value.length > 15)
      e.target.value = e.target.value.slice(0, 15);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (current === null) {
      await addGoal(goal);
      
    } else {
      await updateGoal(goal);
      
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? "Edit Goal" : "Add Goal"}</h2>
     
    
      
      <h4>Description</h4>
      <input
        type='text'
        placeholder='(optional)'
        name='description'
        value={description}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? "Update Goal" : "Add Goal"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default GoalForm;
