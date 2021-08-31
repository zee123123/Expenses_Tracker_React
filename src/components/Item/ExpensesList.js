import "./ExpensesList.css";
import Items from "./Items";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No content for this year.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      <li>
        {props.items.map((expense) => (
          <Items
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </li>
    </ul>
  );
};

export default ExpensesList;
