import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: lightgrey;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !date) {
      setError('모든 부분을 입력해주세요!');
      return;
    }

    const newExpense = { id: Date.now(), name, amount, date };
    addExpense(newExpense);
    setName('');
    setAmount('');
    setDate('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="어디에 지출했나요?"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="얼마나 지출했나요?"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="date"
        placeholder="날짜"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button type="submit">지출 등록!</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

export default ExpenseForm;
