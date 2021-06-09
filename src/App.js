import React from 'react'
import NavBar from './components/navbar'
import Todo from './components/Todo'
import ModeChange from './context/ChangeMode'
import LogContextProvider from './context/LogContext'
import ThemeContextProvider from './context/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <LogContextProvider>
              <NavBar/>
              <Todo/>
          </LogContextProvider>
          <ModeChange/>
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;
