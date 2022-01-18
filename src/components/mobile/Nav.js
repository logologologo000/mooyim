import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import IndexMobile from './Index'
import SelectbeefMobile from './Selectbeef'
import SelectvetMobile from './Selectvet'
import EndMobile from './End'

import SelectdrinkMobile from './Selectdrink'
import SelectfastMobile from './Selectfast'


function Nav() {


  return (
    
    <div className=" text-center">
      <nav>
        <div className="bgc-y py-2">
          <h1 className="text-w">โต๊ะของคุณหมายเลข 1</h1>
        </div>
        <div className="nav-g py-2">
          <div className="d-inline-block text-w mx-3">
            เนื้อสัตว์
          </div>
          <div className="d-inline-block text-w mx-3">
            ผักสด
          </div>
          <div className="d-inline-block text-w mx-3">
            ของท่านเล่น
          </div>
          <div className="d-inline-block text-w mx-3">
            เครื่องดื่ม
          </div>
        </div>
        
      </nav>

      
      <BrowserRouter>
      <Routes>
        
          <Route index element={<SelectbeefMobile />} />
          <Route path="/vet" element={<EndMobile />} />
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default Nav;