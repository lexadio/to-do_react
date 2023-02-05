import React, { useState } from 'react';
import Home from './componets/home';
import './App.css';

function App() {

  let todoItem = '';

  if(localStorage.todo != null) {
    todoItem = JSON.parse( localStorage.todo );
  } else {
    todoItem = [{
      id: 1,
      title: 'Написать ToDo',
      status: true,
    },
    {
      id: 2,
      title: 'Сходить в магазин',
      status: true,
    },
    {
      id: 3,
      title: 'Сдать отчет',
      status: false,
    },]
  }

  const [todo, setTodo] = useState(todoItem)

  return (
    <div className="App">
      <Home todo={todo} setTodo={setTodo}/></div>
  );
}

export default App;
