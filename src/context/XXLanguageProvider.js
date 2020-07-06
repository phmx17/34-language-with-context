// class based version 
import React, { Component, createContext } from 'react';

export const LanguageContext = createContext()  // this is the key to everything !

export class LanguageProvider extends Component {
  state = { currentLanguage: 'english' }
  
  // helpers
  changeLanguage(e) {
    this.setState({currentLanguage: e.target.value})
  }

  render() { 
    return (
      <LanguageContext.Provider value={{...this.state, setLanguage: this.changeLanguage.bind(this) }}>
        {this.props.children}
      </LanguageContext.Provider>
      );
  };
}
// DO NOT put the below comment inside the HOC JSX !! It will throw error: "Render is not a Function"
/* language is a new arbitrary prop; contains .currentLanguage and .setLanguage; also all other props witht the spread operator */
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component language={value} {...props} />}  
  </LanguageContext.Consumer>
)

