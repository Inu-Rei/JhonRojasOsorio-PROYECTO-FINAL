import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import MyComponent from './components/MyComponent';
import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);
