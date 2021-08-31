import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import React from "react";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2021");

  const filterChangeHandler = (selectYear1) => {
    console.log(selectYear1);
    console.log("IN Expense.js");
    setSelectYear(selectYear1);
  };

  const filterData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  // let content = <p>No expenses found.</p>;

  return (
    // <div className = 'expenses'>
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onChangeFilter={filterChangeHandler}
          filterItem={selectYear}
        />

        <ExpensesChart expenses={filterData} />

        <ExpensesList items={filterData} />
      </Card>
    </div>
  );
};

export default Expenses;

// className = 'expenses'
