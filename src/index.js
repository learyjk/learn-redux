import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // ACTION - increment. An action is a function that return an object
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }
// // REDUCER - check action, modify store. Can have many
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // STORE -> GLOBALIZED STATE
// let store = createStore(counter);

// // Display in console.
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH - dispatch action to the reducer
// store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
