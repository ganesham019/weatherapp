import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDom is interact with the dom 
// createRoute function is initialize the root element of components, this method is used to set 'root' of our react application 
// React.StictMode is used to help to detect any highlight potential problem in application while developing , it is no use for production
                    //  ui issues ,memory crashes 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

