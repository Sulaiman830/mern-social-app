import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthcontextProvider} from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContexProvider>
    <App />
    </AuthContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
