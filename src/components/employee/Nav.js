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
          <div className="container">
            <div className="row">
              <div className="col-4 text-start">
                1
              </div>
              <div className="col-4">
                <h3 className="text-w font-50">
                  #พนักงาน
                </h3>
              </div>
              <div className="col-4 text-end">
                <h3 className="font-50">
                  ออร์เดอร์
                </h3>
              </div>

            </div>
          </div>
        </div>
        <div className="nav-b py-2">
          <div className="row">
            <div className="col-8 text-start">
              <div className="d-inline-block text-w mx-3 font-25">
                ออร์เดอร์
              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
                ประวัติ
              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
                รายการอาหาร
              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
                โต๊ะ
              </div>
            </div>
            <div className="col-4">
              <input type="text" className="input-seach" placeholder="SEACH"/>
            </div>
          </div>
        </div>
        
      </nav>



    </div>
  );
}

export default Nav;