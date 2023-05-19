import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.scss'
import './assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n';
import App from './components/App';
import store from "./redux/store";
import { Provider } from 'react-redux';
import history from './const/history';
import { Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}><App /></Router>
    </Provider>,
  document.getElementById('root')
);

