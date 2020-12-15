import React, { Fragment, useContext, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import Spinner from "../layout/Spinner";
import ExpenseContext from "../../context/expense/expenseContext";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);

  const {
    expenses,
    filtered,
    getExpenses,
    sortExpenses,
    loading
  } = expenseContext;

  useEffect(() => {
    (async function() {
      await getExpenses();
      //sortExpenses();
    })();
    // eslint-disable-next-line
  }, []);

  if (expenses !== null && expenses.length === 0 && !loading) {
    return <h4>No expenses found</h4>;
  }

  return (
    <Fragment>
      {expenses !== null && !loading ? (
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
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
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
