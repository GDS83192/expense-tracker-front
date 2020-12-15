import React, { useContext, useRef, useEffect } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseFilter = () => {
  const expenseContext = useContext(ExpenseContext);
  const text = useRef("");

  const { filterExpenses, clearFilter, filtered } = expenseContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterExpenses(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Expenses'
        onChange={onChange}
      />
    </form>
  );
};

export default ExpenseFilter;
