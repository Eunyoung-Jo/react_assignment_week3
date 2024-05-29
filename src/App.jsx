import React, { useState } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(expenses.map(expense => (expense.id === updatedExpense.id ? updatedExpense : expense)));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const selectExpense = (id) => {
    setSelectedExpense(expenses.find(expense => expense.id === id));
  };

  return (
    <div>
      {selectedExpense ? (
        <Detail
          expense={selectedExpense}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
          setSelectedExpense={setSelectedExpense}
        />
      ) : (
        <Home
          expenses={expenses}
          addExpense={addExpense}
          selectExpense={selectExpense}
        />
      )}
    </div>
  );
};

export default App;
