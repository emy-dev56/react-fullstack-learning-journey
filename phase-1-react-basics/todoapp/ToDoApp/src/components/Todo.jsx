import React, { useState } from 'react';
import Form from './Form';
import TodosList from './TodosList';

export default function Todo() {
  const[todos, setTodos] = useState([]);  
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} />
    </>
  )
}
