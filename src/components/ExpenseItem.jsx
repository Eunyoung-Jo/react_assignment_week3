import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Name = styled.h3`
  margin-bottom: 5px;
`;

const Amount = styled.p`
  margin-bottom: 5px;
`;

const ExpenseItem = ({ expense, selectExpense }) => {
  const handleClick = () => {
    selectExpense(expense.id);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Name>{expense.name}</Name>
      <Amount>{expense.amount}</Amount>
      <p>{new Date(expense.date).toLocaleDateString()}</p>
    </Wrapper>
  );
};

export default ExpenseItem;
