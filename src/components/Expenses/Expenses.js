import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (filteredYear) => {
    setYear(filteredYear);
  };

  console.log(props.expenses); //Correct list being logged here

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onChangeFilter={filterChangeHandler}
        />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
