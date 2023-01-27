import React from 'react';

function Item ({ todo, setTodo }) {

    function deleteItemTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id);
        setTodo(newTodo);
    }

    function clouseItemTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status;
            } 
            return item;
        })
        setTodo(newTodo);
    }

        return (
            <div>
            {
                todo.map( element => {
                    return (
                        <div>
                            <ul className='Item-ul'>
                                <li className='Item-li'>
                                    <span className='Item-span' key={element.id}>{ element.title }</span>
                                </li>
                                <li className='Item-li'>
                                    <button className='Item-btn' onClick={ () => deleteItemTodo(element.id) }>Удалить</button>
                                </li>
                                <li className='Item-li'>
                                    <button className='Item-btn' onClick={ () => clouseItemTodo(element.id) }>Выполнена</button>
                                </li>
                                <li className='Item-li'>
                                    <button className='Item-btn'>Изменить</button>
                                </li>
                            </ul>
                        </div>
                    )

                    
                })
            }
            </div>
        )

};

export default Item;