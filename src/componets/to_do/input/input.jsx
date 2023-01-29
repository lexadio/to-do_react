import React, {useState} from 'react';
import AddButton from './button';
import uuid from 'react-uuid';

function Input({todo, setTodo}) {
    const [value, setValue] = useState('');

    function addTodo() {
        const newTodo = setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: false,
            }]
        )

        // const newTodo = 
        //     [...todo, {
        //         id: uuid(),
        //         title: value,
        //         status: false,
        //     }]
        // localStorage.todo = JSON.stringify(newTodo);
        // setTodo(newTodo);
        // setValue('');
    }

    return (
        <div className='input'>
            <input className='input-item' type="text" placeholder='Название задачи' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className='input-btn' onClick={addTodo}>Добавить задачу</button>
        </div>

        // <AddButton />
    )
}

export default Input;