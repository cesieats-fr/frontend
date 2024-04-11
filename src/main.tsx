import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
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
      <SnackbarProvider maxSnack={3} autoHideDuration={4000}  anchorOrigin={{ vertical:'top', horizontal:'right' }}>
        <App />
        <Socket />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
</React.StrictMode>);
