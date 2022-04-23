import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myStore=createStore(rootReducer,applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
<App />

    </Provider>
    
  </React.StrictMode>
);

