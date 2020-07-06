// hooks based version 

import React, { useState, createContext } from 'react';

export const LanguageContext = createContext()  // this is the key to everything !

export const LanguageProvider = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState('english'); 
  
  // helpers
  const setLanguage = (e) => {
    setCurrentLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{currentLanguage, setLanguage }}> 
      {props.children}
    </LanguageContext.Provider>
  );
};

// DO NOT put the below comment inside the HOC JSX !! It will throw error: "Render is not a Function"
/* language is a new arbitrary prop; contains .currentLanguage and .setLanguage; also all other props witht the spread operator */
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component language={value} {...props} />}  
  </LanguageContext.Consumer>
);

