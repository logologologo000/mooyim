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
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import logo from "../../Logo001.png";

function Nav() {
  var navigate = useNavigate();
  const { uid } = useParams();


  return (
    <div className=" text-center">
      <nav>
        <div className="bgc-y py-2">
          <div className="container">
            <div className="row">
              <div className="col-4 text-start">
                <img src={logo} width={200} />
              </div>
              <div className="col-4">
                <h3 className="text-w font-50">
                  
                </h3>
              </div>
              <div className="col-4 text-end">
                <h3 className="font-50">
                <h1 className="mt-4">พนักงาน</h1>
                </h3>
              </div>

            </div>
          </div>
        </div>
        <div className="nav-b py-2">
          <div className="row">
            <div className="col-8 text-start">
              <div className="d-inline-block text-w mx-3 font-25">
                <Link className="link link:hover text-w" to={`/emp/order/${uid}`}>ออร์เดอร์</Link>

              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
                <Link className="link link:hover text-w" to={`/emp/history/${uid}`} >ประวัติ</Link>
              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
              <Link className="link link:hover text-w" to={`/emp/manu/${uid}`} >
                รายการอาหาร
                </Link>
              </div>
              <div className="d-inline-block text-w font-25">
                |
              </div>
              <div className="d-inline-block text-w mx-3 font-25">
              <Link className="link link:hover text-w" to={`/emp/table/${uid}`}>
                โต๊ะ
                </Link>
              </div>
            </div>
            <div className="col-4 font-25 text-w text-end px-5" >
              <div onClick={() => {
                navigate(`/`);
            }} className="d-inline-block " type="button">
            
            ออกจากระบบ
              </div>
            </div>
          </div>
        </div>

      </nav>



    </div>
  );
}

export default Nav;