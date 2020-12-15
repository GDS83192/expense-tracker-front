import React, { useContext } from "react";
import PropTypes from "prop-types";
import GoalContext from "../../context/goal/goalContext";

const GoalItem = ({ goal }) => {
  const goalContext = useContext(GoalContext);
  const { deleteGoal, setCurrent, clearCurrent } = goalContext;

  const { _id, description } = goal;

  const onDelete = () => {
    deleteGoal(_id);
    clearCurrent();
  };

  

  

 

  return (
    <tr>
      
      <td className='hide-sm'>{description}</td>
      <td style={{ textAlign: "center" }}>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(goal)}
        >
          Edit
        </button>
      </td>
      <td style={{ textAlign: "center" }}>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

GoalItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default GoalItem;
