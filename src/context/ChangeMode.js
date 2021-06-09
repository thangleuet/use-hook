import React,{useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import './ChangeMode.css'

const ModeChange = () => {
    const {ChangeMode , theme} = useContext(ThemeContext)
    const {isLightTheme} = theme
    return (
        <div >
            <button className="mode-change" onClick = {ChangeMode} >
                {isLightTheme ? 'Dark Mode' : 'Light Mode'}
            </button>
           
        </div>
    )
}

export default ModeChange;
