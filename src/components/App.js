// using this hook version instead of deprecated class version
import React from 'react';

import Navbar from './Navbar';
import Form from './Form';
import { PageContent } from './PageContent';
import { ThemeProvider } from '../context/ThemeProvider';
import { LanguageProvider } from '../context/LanguageProvider';

export default () => {
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
};