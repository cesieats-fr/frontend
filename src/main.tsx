import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { getLocalStorageItem } from './localStorage';
import Socket from './socket';

const theme = createTheme({
  typography: {
    fontFamily: [
      'lexend',
      'calibri',
    ].join(','),
  },
});

const numberOfSnack = (Number)(getLocalStorageItem('notificationNumber')) || 3;
const autoHideDuration = (Number)(getLocalStorageItem('notificationDuration')) || 3000;
const anchorOriginValue:any = (Number)(getLocalStorageItem('notificationPosition')) || 1;
const anchorOriginPosition:any = {
  1: { vertical:'top', horizontal:'right' },
  2: { vertical:'top', horizontal:'left' },
  3: { vertical:'bottom', horizontal:'right' },
  4: { vertical:'bottom', horizontal:'left' },
};
const anchorOrigin:any = anchorOriginPosition[anchorOriginValue];

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={numberOfSnack} autoHideDuration={autoHideDuration}  anchorOrigin={anchorOrigin}>
        <App />
        <Socket />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
</React.StrictMode>);
