import React, { Fragment, useContext, useEffect } from "react";
import GoalItem from "./GoalItem";
import Spinner from "../layout/Spinner";
import GoalContext from "../../context/expense/goalContext";

const Goals = () => {
  const goalContext = useContext(GoalContext);

  const {
    goals,
    
    getGoals,
    
    loading
  } = goalContext;

  useEffect(() => {
    (async function() {
      await getGoals();
      
    })();
    
  }, []);

  if (goals !== null && goals.length === 0 && !loading) {
    return <h4>No expenses found</h4>;
  }

  return (
    <Fragment>
      {goals !== null && !loading ? (
        <table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} className='hide-sm' />
            <col style={{ width: "11%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>

          <thead>
            <tr>
              
              <th className='hide-sm'>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filtered !== null
              ? filtered.map(expense => (
                  <ExpenseItem key={expense._id} expense={expense} />
                ))
              : expenses.map(expense => (
                  <ExpenseItem key={expense._id} expense={expense} />
                ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Expenses;
