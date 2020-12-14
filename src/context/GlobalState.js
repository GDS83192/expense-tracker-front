import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  goals: [],
  error: null,
  // if we get any errors in async calls, we will put them into the state in case we need this info for furture
  loading: true,
  //here it will act as a spinner..i.e if it still loading or not..it will be set to true first..but once we make our request we will set it to false in the reducer
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/v1/transactions");
    // url is in proxy
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
      //Here we dispatch json response (res.data) to state
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      // here axios will send the req to delete the transaction of particular id
      //to mongoDB through backend so that it'll get remove from database as well
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "/api/v1/transactions/",
        transaction,
        config
      );
      //it will add the transaction through POST req by taking transaction
      //along as a 2nd parameter and config as 3rd which would conatain
      //the meta data that would specify what kind of data we are sending to database
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };





  const getGoals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/goals");
      // we do need to include the --prefix  i.e http://localhost:5000
      //coz we added it in the proxy in package.json file
      dispatch({
        type: "GET_GOALS",
        payload: res.data.data,
      });
      //we'll dispacth our JSON response i.e res.data.data to our state
    } catch (error) {
      dispatch({
        type: "GOAL_ERROR",
        payload: error.response.data.error,
      });
    }
  };


  const addGoal = async (goal) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/goals/",
        goal,
        config
      );
      //it will add the transaction through POST req by taking transaction
      //along as a 2nd parameter and config as 3rd which would conatain
      //the meta data that would specify what kind of data we are sending to database
      dispatch({
        type: "ADD_GOAL",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "GOAL_ERROR",
        payload: error.response.data.error,
      });
    }
  };


  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        goals: state.goals,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        getGoals,
        addGoal,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
