import React , {createContext , useState} from 'react'

export const LogContext = createContext();

const LogContextProvider = ({children}) => {
    //state
    const [isLog , setIsLog] = useState(false)
    const LogMode = () => {
        setIsLog(!isLog)
    }
    //data
    const LogContextData = {
        isLog,
        LogMode
    }
    //return
    return(
        <LogContext.Provider value={LogContextData}>
            {children}
        </LogContext.Provider>
    )
}
export default LogContextProvider;
