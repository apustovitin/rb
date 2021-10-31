import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import App from './App';
import './styles/index.scss';
import {setupStore} from "./store/store";


const store = setupStore();
const app = (
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));
