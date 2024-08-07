import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'

// точка запуска приложения
const root = ReactDOM.createRoot(document.getElementById('root'));

// отрисовка 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
