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
      <nav className="fixed-top">
        <div className="bgc-y py-2">
          <h1 className="text-w">โต๊ะของคุณหมายเลข 1</h1>
        </div>
        <div className="nav-g py-2">
          <div onClick={() => {
            document.getElementById("beef").scrollIntoView()
          }} className="d-inline-block text-w mx-3">
            <Link to="#">เนื้อสัตว์</Link>
          </div>
          <div onClick={() => {
            document.getElementById("vet").scrollIntoView()
          }} className="d-inline-block text-w mx-3">
            <Link to="#">ผักสด</Link>
          </div>
          <div onClick={() => {
            document.getElementById("fast").scrollIntoView()
          }} className="d-inline-block text-w mx-3">
            <Link to="#">ของท่านเล่น</Link>
          </div>
          <div 
          onClick={() => {
            document.getElementById("drink").scrollIntoView()
          }} className="d-inline-block text-w mx-3">
            <Link to="#">เครื่องดื่ม</Link>
            
          </div>
        </div>

      </nav>


      



    </div>
  );
}

export default Nav;