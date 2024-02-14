import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { Layout } from '@/sections';
import { ThemeProvider } from '@/theming';
import { LocalizationProvider } from '@/localization';
import { Navigation } from '@/navigation';
import { store } from '@/store';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#FFFFFF',
      light: '#2196f3',
      main: '#ff0000',
    },
  },
});

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider>
            <LocalizationProvider>
              <Layout>
                <Navigation />
              </Layout>
            </LocalizationProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </HashRouter>
  );
};

export default App;
