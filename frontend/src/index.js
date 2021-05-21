import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'; //importar provedor (es quien solicita el estado de store.js)
import store from "./redux/store"; //importar tienda

ReactDOM.render(
    <Provider store = {store}> 
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();