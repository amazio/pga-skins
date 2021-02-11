import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

/*--- hack to fix 100vh on mobile issue ---*/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const themeMint = {
  palette: {
    primary: { main: '#d5dcd6', contrastText: '#051907' },
    secondary: { main: '#d8dae8', contrastText: '#051907' }
  },
  overrides: {
    MuiBottomNavigationAction: {
      "root": {
        "color": 'white',
        "&$selected": {
          "color": "#051907"
        }
      }
    },
    MuiBottomNavigation: {
      "root": {
        backgroundColor: '#d5dcd6'
      }
    }
  }
};

const theme = createMuiTheme(themeMint, 'Minty Green');

ReactDOM.render(
  <Router>
    <Route path='/' render={() =>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    } />
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
