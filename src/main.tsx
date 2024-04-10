import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Socket from './socket';

const theme = createTheme({
  typography: {
    fontFamily: [
      'lexend',
      'calibri',
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <Socket />
    </ThemeProvider>
  </Provider>
</React.StrictMode>);
