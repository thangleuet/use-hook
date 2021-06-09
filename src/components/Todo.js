import React,{useContext, useState} from 'react'
import { LogContext } from '../context/LogContext';
import TodoForms from './TodoForms';
import TodoItems from './TodoItems';


const Todo = () => {

    const [todos, setTodos] = useState([
        {id:1, title: 'Việc 1'},
        {id:2, title: 'Việc 2'},
        {id:3, title: 'Việc 3'}
    ]);
    const AddTodo = (todo) =>{
        if(todo.title !=="")
            setTodos([...todos, todo])
        else alert("Chưa nhập thông tin !!!")
    }
    const deleteTodo = (id) =>{
        const newTodo = todos.filter(todo =>{
            return todo.id !== id;
        })
        setTodos(newTodo);
    }
    const {isLog} = useContext(LogContext)
    return (
        <div className="todolist">
            <TodoForms onAddTodo={AddTodo} />
            {   isLog ? (
                <ul>
                    {
                         todos.map ( todo =><TodoItems todo={todo} key={todo.id} onDelete={deleteTodo} /> )
                    }
                </ul>)
            : (<p className ="p-logout">You are Logout !!!</p>)
            }

            
        </div>
    )
}

export default Todo;
