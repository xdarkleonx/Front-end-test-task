import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import SignUp from './components/SignUp';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <SignUp />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#2e87ff',
      main: '#207bf5',
      dark: '#1560c2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336'
    },
    background: {
      default: '#fff'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
})

export default App;
