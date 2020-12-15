import React, { useContext } from "react";
import PropTypes from "prop-types";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseItem = ({ expense }) => {
  const expenseContext = useContext(ExpenseContext);
  const { deleteExpense, setCurrent, clearCurrent } = expenseContext;

  const { _id, date, amount, description, category } = expense;

  const onDelete = () => {
    deleteExpense(_id);
    clearCurrent();
  };

  const newDate = new Date(date);
  const year = newDate.getUTCFullYear();
  const month = newDate.getUTCMonth() + 1;
  const day = newDate.getUTCDate();
  const formattedDate = month + "/" + day + "/" + year;

  const formattedAmount =
    "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const displayLogo = category => {
    switch (category) {
      case "Automobile":
        return <i className='fas fa-car' />;
      case "Bills/Utilities":
        return <i className='fas fa-money-check-alt' />;
      case "Clothing":
        return <i className='fas fa-tshirt' />;
      case "Entertainment":
        return <i className='fas fa-theater-masks' />;
      case "Fitness":
        return <i className='fas fa-running' />;
      case "Food":
        return <i className='fas fa-utensils' />;
      case "Gift":
        return <i className='fas fa-gift' />;
      case "Health":
        return <i className='fas fa-heartbeat' />;
      case "Home":
        return <i className='fas fa-home' />;
      case "Internet":
        return <i className='fas fa-wifi' />;
      case "Telephone":
        return <i className='fas fa-mobile-alt' />;
      case "Transportation/Transit":
        return <i className='fas fa-bus' />;
      case "Travel":
        return <i className='fas fa-plane' />;
      default:
        return null;
    }
  };

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{formattedAmount}</td>
      <td>
        {displayLogo(category)} {category}
      </td>
      <td className='hide-sm'>{description}</td>
      <td style={{ textAlign: "center" }}>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(expense)}
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

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default ExpenseItem;
