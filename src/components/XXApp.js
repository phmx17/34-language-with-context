// class version; using hook version instead
import React, { Component } from 'react';

import Navbar from './Navbar';
import Form from './Form';
import { PageContent } from './PageContent';
import { ThemeProvider } from '../context/ThemeProvider';
import { LanguageProvider } from '../context/LanguageProvider';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>       
        </LanguageProvider>
      </ThemeProvider>      
    );
  }
}

export default App;



