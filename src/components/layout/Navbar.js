import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ExpenseContext from "../../context/expense/expenseContext";

const Navbar = ({ title, icon, icon2 }) => {
  const authContext = useContext(AuthContext);
  const expenseContext = useContext(ExpenseContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearExpenses } = expenseContext;

  const onLogout = () => {
    logout();
    clearExpenses();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1 className='text-center'>
        <i className={icon} /> <i className={icon2}/> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  icon2: PropTypes.string
};

Navbar.defaultProps = {
  title: "SMARTSpend",
  icon: "fas fa-graduation-cap",
  icon2: "fas fa-dollar-sign"
};

export default Navbar;
