import React, { useReducer } from "react";
import axios from "axios";
import GoalContext from "./goalContext";
import goalReducer from "./goalReducer";
import {
  GET_GOALS,
  ADD_GOAL,
  DELETE_GOAL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GOAL,
 
  CLEAR_GOALS,
  
 
 
  GOAL_ERROR
} from "../types";

const GoalState = props => {
  const initialState = {
    goals: null,
    current: null,
    
    error: null
  };

  const [state, dispatch] = useReducer(goalReducer, initialState);

  // Get Expenses
  const getGoals = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/goals`);

      dispatch({
        type: GET_GOALS,
        payload: res.data
      });
      
    } catch (err) {
      dispatch({
        type: GOAL_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Expense
  const addGoal = async goal => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/goals`, goal, config);

      dispatch({
        type: ADD_GOAL,
        payload: res.data
      });
      
    } catch (err) {
      dispatch({ type: GOAL_ERROR, payload: err.response.msg });
    }
  };

  // Delete Expense
  const deleteGoal = async id => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/goals/${id}`);

      dispatch({
        type: DELETE_GOAL,
        payload: id
      });
    } catch (err) {
      dispatch({ type: GOAL_ERROR, payload: err.response.msg });
    }
  };

  // Update Expense
  const updateGoal = async goal => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/goals/${goal._id}`,
        goal,
        config
      );

      dispatch({
        type: UPDATE_GOAL,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GOAL_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Goals
  const clearGoals = () => {
    dispatch({ type: CLEAR_GOALS });
  };

  // Set Current Goal
  const setCurrent = goal => {
    dispatch({ type: SET_CURRENT, payload: goal });
  };

  // Clear Current Goal
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };


 

 
  


  return (
    <GoalContext.Provider
      value={{
        goals: state.goals,
        current: state.current,
        
       
        
        error: state.error,
        
        
        addGoal,
        deleteGoal,
        setCurrent,
        clearCurrent,
        updateGoal,
      
       
        getGoals,
        clearGoals
      }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};

export default GoalState;
