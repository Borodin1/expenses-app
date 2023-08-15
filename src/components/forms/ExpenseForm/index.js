//styles
import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [isAmount, setIsAmount] = useState();
  const [date, setDate] = useState();

  const inputChangeHandler = (name, value) => {
    if (name === "title") {
      setTitle(value);
    } else if (name === "amount") {
      setIsAmount(value);
    } else {
      setDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +isAmount,
      date: new Date(date),
    };

    props.saveExpenseData(expenseData);
    setTitle("");
    setIsAmount("");
    setDate("");

    props.closeForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={isAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            type="date"
            min="2023-01-01"
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button onClick={() => props.closeForm(false)}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
