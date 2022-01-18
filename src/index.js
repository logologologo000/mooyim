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
import LoginEmp from './components/employee/Login'
import './css/mobile.css';
import './css/employee.css';

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


        <Route path="/mobile" element={<IndexMobile />} />
        <Route path="/mobile/beef" element={<div><NavMobile /><SelectbeefMobile /></div>} />
        <Route path="/mobile/vet" element={<div><NavMobile /><SelectvetMobile /></div>} />
        <Route path="/mobile/drink" element={<div><NavMobile /><SelectdrinkMobile /></div>} />
        <Route path="/mobile/fast" element={<div><NavMobile /><SelectfastMobile /></div>} />

        

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

