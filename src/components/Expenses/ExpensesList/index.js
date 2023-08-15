//components
import ExpenseItem from "../ExpenseItem";

//styles
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found not expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};
