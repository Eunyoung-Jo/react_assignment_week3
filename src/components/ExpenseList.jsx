import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, selectExpense }) => {
  return (
    <div>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} selectExpense={selectExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
