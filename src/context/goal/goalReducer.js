import {
    GET_GOALS,
    ADD_GOAL,
    DELETE_GOAL,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_GOAL,
    
    GOAL_ERROR,
    
  
    CLEAR_GOALS
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case GET_GOALS:
        return {
          ...state,
          goals: action.payload,
          loading: false
        };
      case ADD_GOAL:
        return {
          ...state,
          goals: [...state.goals, action.payload],
          loading: false
        };
      case UPDATE_GOAL:
        return {
          ...state,
          goals: state.goals.map(goal =>
            goal._id === action.payload._id ? action.payload : goal
          ),
          loading: false
        };
      case DELETE_GOAL:
        return {
          ...state,
          goals: state.goals.filter(
            goal => goal._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_GOALS:
        return {
          ...state,
          goals: null,
          
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
  
     
     
     
      case GOAL_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  