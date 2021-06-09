import React, {createContext , useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    //state
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light : {
            background : 'rgb(240,240,240)',
            color : 'black'
        },
        dark : {
            background : 'rgb(39,39,39)',
            color : "white"
        }
    })
    const ChangeMode = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }
    
    //context data
    const ThemeContextData ={
        theme,
        ChangeMode,
    } 
    return (
        <ThemeContext.Provider value = {ThemeContextData} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
