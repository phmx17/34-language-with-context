import React, {useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const PageContent = (props) => {  
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white' ,
    height: '100vh',
    width: '100vw'
  }
  return (
    <div style={styles}>
      {props.children} {/* use PageContent as a wrapper */}
    </div>
    );
}

