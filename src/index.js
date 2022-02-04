import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IndexMobile from './components/mobile/Index'
import SelectbeefMobile from './components/mobile/Selectbeef'
import SelectvetMobile from './components/mobile/Selectvet'
import EndMobile from './components/mobile/End'
import HisMobile from './components/mobile/History'
import HisdMobile from './components/mobile/Hdetail'
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
import FixtableAdmin from './components/admin/Fixtable'
import EmployeedetailAdmin from './components/admin/Employeedetail'
import EmployeefixAdmin from './components/admin/Employeefix'
import AddtableAdmin from './components/admin/Addtable'
import ManufixAdmin from './components/admin/Manufix'
import OrderAdmin from './components/admin/Order'
import PrintAdmin from './components/admin/Print'
import PrintfAdmin from './components/admin/Printf'
import OrderdetailAdmin from './components/admin/Orderdetail'
import HistoryAdmin from './components/admin/History'
import TabledetailAdmin from './components/admin/Tabledetail'
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

        <Route path="/emp/order/:uid" element={<div><NavEmp /><OrderEmp /></div>} />
        <Route path="/emp/order/detail/:uid/:oid" element={<div><NavEmp /><OrderdetailEmp /></div>} />
        <Route path="/emp/history/:uid" element={<div><NavEmp /><HistoryEmp /></div>} />
        <Route path="/emp/manu/:uid" element={<div><NavEmp /><ManuEmp /></div>} />
        <Route path="/emp/table/:uid" element={<div><NavEmp /><TableEmp /></div>} />
        <Route path="/emp/table/detail/:uid/:tid" element={<div><NavEmp /><TabledetailEmp /></div>} />
        <Route path="/emp/order/print" element={<div><NavEmp /><PrintEmp /></div>} />

        <Route path="/admin/table/:uid" element={<div><NavAdmin /><TableAdmin /></div>} />
        <Route path="/admin/manu/:uid" element={<div><NavAdmin /><ManuAdmin /></div>} />
        <Route path="/admin/employee/:uid" element={<div><NavAdmin /><EmployeeAdmin /></div>} />
        <Route path="/admin/history/:uid" element={<div><NavAdmin /><HistoryAdmin /></div>} />
        <Route path="/admin/order/:uid" element={<div><NavAdmin /><OrderAdmin /></div>} />

        <Route path="/admin/manu/addmanu/:uid" element={<div><NavAdmin /><AddmanuAdmin /></div>} />
        <Route path="/admin/employee/addemployee/:uid" element={<div><NavAdmin /><AddemployeeAdmin /></div>} />
        <Route path="/admin/table/fixtable/:uid/:tid" element={<div><NavAdmin /><FixtableAdmin /></div>} />
        <Route path="/admin/employee/employeedetail/:uid/:uidd" element={<div><NavAdmin /><EmployeedetailAdmin /></div>} />
        <Route path="/admin/employee/employeedetail/employeefix/:uid/:uidd" element={<div><NavAdmin /><EmployeefixAdmin /></div>} />
        <Route path="/admin/table/addtable/:uid" element={<div><NavAdmin /><AddtableAdmin /></div>} />
        <Route path="/admin/manu/manufix/:uid/:mid" element={<div><NavAdmin /><ManufixAdmin /></div>} />
        
        <Route path="/admin/order/print/:uid/:oid" element={<div><PrintAdmin /></div>} />
        <Route path="/admin/table/detail/printf/:uid/:tid" element={<div><PrintfAdmin /></div>} />
        <Route path="/admin/order/detail/:uid/:oid" element={<div><NavAdmin /><OrderdetailAdmin /></div>} />
        <Route path="/admin/table/detail/:uid/:tid" element={<div><NavAdmin /><TabledetailAdmin /></div>} />
        


        <Route path="/mobile/:tid" element={<IndexMobile />} />
        <Route path="/mobile/:tid/beef" element={<div><NavMobile /><SelectbeefMobile /></div>} />
        <Route path="/mobile/vet" element={<div><NavMobile /><SelectvetMobile /></div>} />
        <Route path="/mobile/drink" element={<div><NavMobile /><SelectdrinkMobile /></div>} />
        <Route path="/mobile/fast" element={<div><NavMobile /><SelectfastMobile /></div>} />
        <Route path="/mobile/end/:tid" element={<div><EndMobile /></div>} />
        <Route path="/mobile/history/:tid" element={<div><HisMobile /></div>} />
        <Route path="/mobile/history/:tid/:oid" element={<div><HisdMobile /></div>} />
        
        

        

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

