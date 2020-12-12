import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import {Goal} from "./Goal"
export const TransactionList = () => {
  const { transactions, getTransactions, goals, getGoals } = useContext(GlobalContext);

  //we use useEffect when we make http request from a component
  useEffect(() => {
    getTransactions();
    
  }, []); //it will run only once
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <ul className="list">
          {goals.map((goal) => (
            <Goal key={goal.id} goal={goal} />
          ))}
      </ul>
    </div>
  );
};
