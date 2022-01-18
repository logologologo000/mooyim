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
import LoginEmp from './components/employee/Login'
import PrintEmp from './components/employee/Print'
import ManuEmp from './components/employee/Manu'
import TableEmp from './components/employee/Table'
import TabledetailEmp from './components/employee/Tabledetail'
import NavAdmin from './components/admin/Nav'
import TableAdmin from './components/admin/Table'
import ManuAdmin from './components/admin/Manu'
import EmployeeAdmin from './components/admin/Employee'
import AddmanuAdmin from './components/admin/Addmanu'
import AddemployeeAdmin from './components/admin/Addemployee'
import './css/mobile.css';
import './css/employee.css';
import './css/admin.css';

import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Link,
} from "react-router-dom";
import Index from './components/mobile/Index';


export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LoginEmp />} />
        <Route path="/emp/order" element={<div><NavEmp /><OrderEmp /></div>} />
        <Route path="/emp/history" element={<div><NavEmp /><HistoryEmp /></div>} />
        <Route path="/emp/order/detail" element={<div><NavEmp /><OrderdetailEmp /></div>} />
        <Route path="/emp/order/print" element={<div><NavEmp /><PrintEmp /></div>} />
        <Route path="/emp/manu" element={<div><NavEmp /><ManuEmp /></div>} />
        <Route path="/emp/table" element={<div><NavEmp /><TableEmp /></div>} />
        <Route path="/emp/table/detail" element={<div><NavEmp /><TabledetailEmp /></div>} />
        <Route path="/admin/table" element={<div><NavAdmin /><TableAdmin /></div>} />
        <Route path="/admin/manu" element={<div><NavAdmin /><ManuAdmin /></div>} />
        <Route path="/admin/employee" element={<div><NavAdmin /><EmployeeAdmin /></div>} />
        <Route path="/admin/manu/addmanu" element={<div><NavAdmin /><AddmanuAdmin /></div>} />
        <Route path="/admin/employee/addemployee" element={<div><NavAdmin /><AddemployeeAdmin /></div>} />
        
        

        

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>

    <Apps />




  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

