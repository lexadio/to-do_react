import React, { useState } from 'react';

function Item ({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    function deleteItemTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id);
        localStorage.todo = JSON.stringify(newTodo);
        setTodo(newTodo);
    }

    function clouseItemTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status;
            } 
            return item;
        })
        localStorage.todo = JSON.stringify(newTodo);
        setTodo(newTodo);
    }

    function editTodo(id, value) {
        setEdit(id);
        setValue(value);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value; 
            }
            return item;
        })
        localStorage.todo = JSON.stringify(newTodo);
        setTodo(newTodo);
        setEdit(null);
    }

        return (
            <div className='item'>
            {
                todo.map( element => {
                    return (
                        <div key={element.id} className={!element.status ? 'item-li open' : 'item-li clouse'}>
                        {
                            edit == element.id ?
                            <div>
                                <input className='input-change_active input-item' value={value} onChange={(e) => setValue(e.target.value)} />
                            </div>
                            : 
                            <h2 className='item-title'>{ element.title }</h2>
                        }

                        {
                            edit == element.id ?
                            <div>
                                <button className='item-btn btn-change' onClick={() => saveTodo(element.id)}>Сохранить</button>
                            </div> :
                            <div className='item-block-btn'>
                                <button className='item-btn btn-del' onClick={ () => deleteItemTodo(element.id) }>Удалить</button>
                                <button className='item-btn btn-ok' onClick={ () => clouseItemTodo(element.id) }>{!element.status ? 'Выполнена' : 'Вернуть'}</button>
                                <button className='item-btn btn-change' onClick={ () => editTodo(element.id, element.title) }>Изменить</button>
                            </div>
                        }
                        </div>
                    )

                    
                })
            }
            </div>
        )

};

export default Item;