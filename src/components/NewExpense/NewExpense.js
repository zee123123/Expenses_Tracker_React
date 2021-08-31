import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const showFormHandler = () => {
    setIsShowForm(true);
  };

  const hideFormHandler = () => {
    setIsShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // copy the child component (ExpenseForm) data
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log("In NewExpense");
    console.log(expenseData);
    setIsShowForm(false);
  };

  return (
    <div className="new-expense">
      {!isShowForm && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {isShowForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
