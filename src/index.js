/*eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './components/app';
import './index.css';
// import './grid.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
    document.getElementById('root')
);
