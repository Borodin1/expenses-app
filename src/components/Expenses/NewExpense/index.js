//styles
import { useState } from "react";
import { ExpenseForm } from "../../forms/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const saveExpenseDataHandler = (enternedData) => {
    const expenseData = {
      ...enternedData,
      id: "e" + Math.random().toString(),
    };

    props.addExpense(expenseData);
  };

  if (!isFormOpen) {
    return (
      <div className="new-expense">
        <button onClick={() => setIsFormOpen(true)} type="submit">
          Add new expense
        </button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        closeForm={setIsFormOpen}
        saveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};
