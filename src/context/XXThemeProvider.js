// class based version - hooks is better!
// this sets mode between light or dark

import React, { Component, createContext } from 'react';

export const ThemeContext = createContext(); // can take a default value
// ThemeContext now contains .Provider and .Consumer

export class ThemeProvider extends Component {  
  state = { isDarkMode: false}
  
  // helpers
  toggleTheme() {
  this.setState({ isDarkMode: !this.state.isDarkMode }); // rerenders and passes onto children that rerender too
  }

  render() { 
    return ( 
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme.bind(this) }}>  {/* crucial !! ; load state into value which is passed to children; */ }
        {this.props.children}
      </ThemeContext.Provider>
     );
  };
}
