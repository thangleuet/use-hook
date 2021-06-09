import React,{useState, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const TodoForms = ({onAddTodo}) => {

    const [title, setTitle] = useState("")
    const {theme} = useContext(ThemeContext)
    const {isLightTheme , light , dark} = theme;
    const style = isLightTheme ? light : dark;
    const handlTitle =(event) =>{
        setTitle(event.target.value)
    }
    const handlSubmit = (event) => {
        event.preventDefault();
        onAddTodo({
            id: Math.random(),
            title: title
        })
        setTitle("")
    }
    return (
        <form onSubmit={handlSubmit}>
           <input type="text" name="title" value={title} onChange={handlTitle} placeholder="Enter Title"/> 
           <input type="submit" value="Add Title" style={style} />
        </form>
    )
}

export default TodoForms
