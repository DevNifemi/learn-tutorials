// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'

const render = () => {
  fancyLog();
  ReactDOM.render(<App />, document.getElementById("root"));

}

function fancyLog() {
  console.log(store.getState());
}

render();
store.subscribe(render);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
