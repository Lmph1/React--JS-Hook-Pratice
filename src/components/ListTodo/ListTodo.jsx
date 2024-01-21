import React, { useState } from 'react'
import { ButtonGroup, Button, ListGroup } from 'react-bootstrap'
const ListTodo = ({todos, setTodos}) => {
    const [isOnPending, setIsOnPending] = useState(true);
    const [list, slist] = useState([]);
    // const pendingList = todos.filter(todo => todo.isPending)
    //                          .map(todo => <ListGroup.Item key={todo.id}>{todo.text}</ListGroup.Item> )
    const pendingList = todos.filter((todo) => todo.isPending)
        .map((todo) => 
            <ListGroup.Item  
            key={todo.id}  
            onClick={()=>{
                let todoList = todos;
                let id = todo.id;
                if(todoList[id -1].isPending=== true){
                    todoList[id -1].isPending = false;
                }
                setTodos((todos = todoList));
                slist(todo);
                }}
            >
            {todo.text}
            </ListGroup.Item> )
    const completedList = todos.filter((todo) => !todo.isPending).map((todo) =>( 
        <ListGroup.Item onClick={()=>{
            todo.isPending = true;
            slist(todo);
            console.log(todo.isPending);
        }}
        className='text-decoration-line-through' key={todo.id}>
            {todo.text}
        </ListGroup.Item>
    ));
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="warning" onClick={()=>setIsOnPending(true)}>Pending</Button>
                <Button variant="danger" onClick={()=>setIsOnPending(false)}>Complete</Button>
            </ButtonGroup>
            <ListGroup className='my-4'>
                { isOnPending ? pendingList : completedList}
            </ListGroup>
        </div>
    )
}

export default ListTodo