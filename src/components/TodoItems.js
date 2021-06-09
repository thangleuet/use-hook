import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

const TodoItems = ({todo, onDelete}) => {
    
const {theme} = useContext(ThemeContext)
const {isLightTheme , light , dark} = theme;
const style = isLightTheme ? light : dark;
    return (
        <li onClick={()=>{onDelete(todo.id)}} style = {style}>{todo.title}</li>
    )
}

export default TodoItems;
