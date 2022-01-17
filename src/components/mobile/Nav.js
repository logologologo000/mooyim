import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { AiFillAlert } from "react-icons/ai";
// import { HiUsers } from "react-icons/hi";
// import { FaUserGraduate } from "react-icons/fa";
// import { MdAssignment } from "react-icons/md";
// import { GoEye } from "react-icons/go";
// import { HiOutlineSearchCircle } from "react-icons/hi";

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

        
        
    </div>
  );
}

export default Nav;