import React, { useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.selected ? 'lightgrey' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`;

const Home = ({ expenses, addExpense, selectExpense }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ];

  const filterExpensesByMonth = (month) => {
    setSelectedMonth(month);
  };

  const filteredExpenses = selectedMonth !== null
    ? expenses.filter(expense => new Date(expense.date).getMonth() === selectedMonth)
    : expenses;

  return (
    <div>
      <h1>월별 지출 관리</h1>
      <ExpenseForm addExpense={addExpense} />
      <Container>
        {months.map((month, index) => (
          <Button
            key={index}
            onClick={() => filterExpensesByMonth(index)}
            selected={selectedMonth === index}
          >
            {month}
          </Button>
        ))}
        <Button onClick={() => setSelectedMonth(null)}>전체</Button>
      </Container>
      <ExpenseList expenses={filteredExpenses} selectExpense={selectExpense} />
    </div>
  );
};

export default Home;
