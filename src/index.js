import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Register from './components/Register'
import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>,
  </Provider >,
  document.getElementById('root')
);
