import React, { useState } from 'react';

const Detail = ({ expense, updateExpense, deleteExpense, setSelectedExpense }) => {
  const [name, setName] = useState(expense.name);
  const [amount, setAmount] = useState(expense.amount);

  const handleUpdate = () => {
    updateExpense({ ...expense, name, amount });
    setSelectedExpense(null);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
    setSelectedExpense(null);
  };

  return (
    <div>
      <h2>지출항목상세</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setSelectedExpense(null)}>Back</button>
    </div>
  );
};

export default Detail;
