import Expenses from "./components/Item/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import './App.css';
//import Items from "./components/Items";
//import ExpenseForm from "./components/NewExpense/ExpenseForm";

const examplesData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {
  // {
  //   /******** 1. 定义**** */
  // }

  const [expensesItem, setExpensesItem ] = useState(examplesData);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpensesItem(prevExpenses => {
      console.log("New Item Id:", expense.id);
      return [expense, ...prevExpenses]});
  };

  return (
    <div>
      <h1>Expense Tracker!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesItem} />
    </div>
  );
};

export default App;

// <Items
// title={expenses[0].title}
// amount={expenses[0].amount}
// date={expenses[0].date}
// ></Items>
// <Items
// title={expenses[1].title}
// amount={expenses[1].amount}
// date={expenses[1].date}
// ></Items>
