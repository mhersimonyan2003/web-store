import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@/sections';
import { ThemeProvider } from '@/theming';
import { LocalizationProvider } from '@/localization';
import { Navigation } from '@/navigation';
import { store } from '@/store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LocalizationProvider>
            <Layout>
              <Navigation />
            </Layout>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
