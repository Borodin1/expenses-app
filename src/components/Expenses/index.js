//Core
import { useState } from "react";

//components
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

//styles
import "./Expenses.css";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
