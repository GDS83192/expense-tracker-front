import React, { useContext, useEffect } from "react";
import Expenses from "../expenses/Expenses";
import ExpenseForm from "../expenses/ExpenseForm";
import ExpenseFilter from "../expenses/ExpenseFilter";
import ExpenseSortBy from "../expenses/ExpenseSortBy";
import AuthContext from "../../context/auth/authContext";
import Goals from "../goals/Goals";
import GoalForm from "../goals/GoalForm"
import Smart from "../layout/Smart"
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <Smart />
    <div className='grid-custom'>
      <div>
        <ExpenseForm />
        <GoalForm />
      </div>
      <div>
        <ExpenseSortBy />
        <ExpenseFilter />
        <Expenses />
        <Goals />
        
      </div>
    </div>
    </>
  );
};

export default Home;
