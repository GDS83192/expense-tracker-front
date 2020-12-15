import React, { useContext } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseSortBy = () => {
  const expenseContext = useContext(ExpenseContext);
  const { setOrder, setSort, sortExpenses, order, sortBy } = expenseContext;

  const onChange = e => {
    if (e.target.name === "order") {
      setOrder(e.target.value);
      sortExpenses();
    } else {
      setSort(e.target.value);
      sortExpenses();
    }
  };

  return (
    <div>
      <h4>Sort By</h4>
      <select name='sort' value={sortBy} onChange={onChange}>
        <option value='Date'>Date</option>
        <option value='Amount'>Amount</option>
        <option value='Category'>Category</option>
      </select>
      <input
        type='radio'
        name='order'
        value='asc'
        checked={order === "asc"}
        onChange={onChange}
      />{" "}
      Ascending <br />
      <input
        type='radio'
        name='order'
        value='desc'
        checked={order === "desc"}
        onChange={onChange}
      />{" "}
      Descending
    </div>
  );
};

export default ExpenseSortBy;
