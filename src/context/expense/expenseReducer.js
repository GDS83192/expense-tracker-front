import {
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSES,
  CLEAR_FILTER,
  EXPENSE_ERROR,
  SORT_EXPENSES,
  SET_ORDER,
  SET_SORT,
  CLEAR_EXPENSES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        loading: false
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense._id === action.payload._id ? action.payload : expense
        ),
        loading: false
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_EXPENSES:
      return {
        ...state,
        expenses: null,
        filtered: null,
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
    case FILTER_EXPENSES:
      return {
        ...state,
        filtered: state.expenses.filter(expense => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            expense.category.match(regex) || expense.description.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload
      };
    case SORT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.sort((a, b) => {
          switch (state.sortBy) {
            case "Date":
              if (state.order === "asc") {
                return new Date(a.date) - new Date(b.date);
              } else {
                return new Date(b.date) - new Date(a.date);
              }

            case "Amount":
              if (state.order === "asc") {
                return a.amount - b.amount;
              } else {
                return b.amount - a.amount;
              }

            case "Category":
              if (state.order === "asc") {
                return a.category > b.category ? 1 : -1;
              } else {
                return a.category > b.category ? -1 : 1;
              }

            default:
              return state;
          }
        })
      };
    case EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
