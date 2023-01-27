import React from 'react';
import Input from './to_do/input/input';
import Item from './to_do/li/Item'

const Home = ({todo, setTodo}) => {
    return (
        <div>
            <h1>Home</h1>
            <Input todo={todo} setTodo={setTodo}/>
            <Item todo={todo} setTodo={setTodo}/>
        </div>

    )
    
}

export default Home;