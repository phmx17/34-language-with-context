// hooks is better!
// this sets mode between light or dark

import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';   // custom hook; acts similar to useState;

export const ThemeContext = createContext(); // can take a default value
// ThemeContext now contains .Provider and .Consumer

export const ThemeProvider = (props) => {  
  const [isDarkMode, toggleTheme] = useToggleState();  // using custom hook; default is false (optional)

  // helpers
  // const toggleTheme = () => {  
  // toggleState();  // rerenders and passes onto children that rerender too 
  // } 

  return ( 
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>  {/* crucial !! ; load state into value which is passed to children; */ }
      {props.children}
    </ThemeContext.Provider>
    );  
}
