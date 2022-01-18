import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IndexMobile from './components/mobile/Index'
import SelectbeefMobile from './components/mobile/Selectbeef'
import SelectvetMobile from './components/mobile/Selectvet'
import EndMobile from './components/mobile/End'
import NavMobile from './components/mobile/Nav'
import SelectdrinkMobile from './components/mobile/Selectdrink'
import SelectfastMobile from './components/mobile/Selectfast'
import OrderEmp from './components/employee/Order'
import NavEmp from './components/employee/Nav'
import HistoryEmp from './components/employee/History'
import OrderdetailEmp from './components/employee/Orderdetail'
import './css/mobile.css';
import './css/employee.css';



ReactDOM.render(
  <React.StrictMode>

        <NavEmp />
        <OrderdetailEmp />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

