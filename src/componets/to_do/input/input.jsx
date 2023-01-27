import React, {useState} from 'react';
import AddButton from './button';
import uuid from 'react-uuid';

function Input({todo, setTodo}) {
    const [value, setValue] = useState('');

    function addTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true,
            }]
        )
        console.log(todo);
        let newValue = '';
        setValue(newValue);
    }

    return (
        <div>
            <input className='input' type="text" placeholder='Название задачи' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={addTodo}>Добавить задачу</button>
        </div>

        // <AddButton />
    )
}

export default Input;