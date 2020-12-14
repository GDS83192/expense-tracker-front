import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import {AddGoal} from "./components/AddGoal"
import {GoalList} from "./components/GoalList"
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <GoalList />
        <AddTransaction />
        <AddGoal />
      </div>
    </GlobalProvider>
  );
}

export default App;
