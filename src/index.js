import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/common/header/Header';
import  Navbar  from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
//import {CalendarComponent} from 'syncfusion/ej2-react-calendars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


