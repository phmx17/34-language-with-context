// using contextType as well as an HOC to wrap this component
import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles  // higher order component; or 'wrapper' used as export of this component
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'; // no { } !!
import styles from '../styles/navBarStyles';  // jss 
import { ThemeContext } from '../context/ThemeProvider';  // import data export from context provider; don't forget to wrap parent component of this
// import { LanguageContext } from '../context/LanguageProvider';  // import data export from context provider; don't forget to wrap parent component of this
import { withLanguageContext } from '../context/LanguageProvider'  // this is the HOC version

const content = {
  english: {
    search: 'Search',
    flag: 'flag gb uk',
    language: 'english'
  },
  german: {
    search: 'Suchen',
    flag: 'flag de',
    language: 'german'
  },
  french: {
    search: 'Chercher',
    flag: 'flag fr',
    language: 'french'
  },
  spanish: {
    search: 'Buscar',
    flag: 'flag es',
    language: 'spanish'
  },
  dutch: {
    search: 'Zoeken',
    flag: 'flag nl',
    language: 'dutch'
  }
}

class Navbar extends Component {
  static contextType = ThemeContext;  // Navbar is deeply nested and receives access to context here;
  render() {     
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;  // consuming context data and toggleTheme property that triggers toggleTheme method defined in ThemeProvider
    const { currentLanguage } = this.props.language // from this.props.language.currentLanguage
    const { search, flag, language } = content[currentLanguage];
   
    return (
        <div className={classes.root}>       
          <AppBar position="static" color={isDarkMode ? 'default' : 'primary'} >
            <Toolbar>              
              <div style={{ marginRight: '20px' }}>
                {currentLanguage === language && <i className={flag} /> }                 
              </div>
              <Typography className={classes.title} variant="h6" color="inherit">
                App Language: {currentLanguage}   
              </Typography>

              <Switch onChange={toggleTheme} />  {/* toggle theme button; triggers method in ThemeProvider */}
              
              <Typography className={classes.title} variant="h6" color="inherit">
                Theme   
              </Typography>

              <div className={classes.grow} />
              <div className={classes.search}> 
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }} 
                />

              </div>            
            </Toolbar>
          </AppBar>
        </div>
    );
  };
};
// wrapping with HOC which is nicer than wrapping large jsx code block
export default withLanguageContext(withStyles(styles)(Navbar));


