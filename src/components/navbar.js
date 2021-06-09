import React,{useContext} from 'react'
import { LogContext } from '../context/LogContext';
import {ThemeContext} from '../context/ThemeContext'
const NavBar = () => {
    //Theme Context
    const {theme} = useContext(ThemeContext)
    const {isLightTheme , light , dark} = theme;
    const style = isLightTheme ? light : dark;

    //Log Context
    const {isLog , LogMode} = useContext(LogContext)

    return (
        <div className="navbar" style = {style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    <button onClick = {LogMode}>
                        {
                            isLog ? 'Logout' : 'Login'
                        }
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;