import React, { useState } from 'react';
import Home from './componets/home';
import './App.css';

function App() {

  const [todo, setTodo] = useState([ // что то вроде локальной базы данных. И вся информация доступна в переменной todo. Settodo - функция, которая будет менять сам to do
    {
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
    },
  ])

  return (
    <div className="App">
      <Home todo={todo} setTodo={setTodo}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
