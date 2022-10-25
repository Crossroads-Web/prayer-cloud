import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './components/App';
import { CallFormProvider } from './contexts/CallFormContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CallFormProvider>
    <App />
  </CallFormProvider>
);
