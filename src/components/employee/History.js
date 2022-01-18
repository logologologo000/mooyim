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

function History() {


  return (
    <div>
      <div className="bgc-g py-1 margin-bot">
        <div className="row">
          <div className="col-6 text-start px-5 mt-2">
            <h3 className="font-50">#003</h3>
          </div>
          <div className="col-6 text-end px-5 text-g mt-2">
            <h3 className="font-50">โต๊ะ01</h3>
          </div>
          <hr className="line-g" />
        </div>
        <div className="row font-25">
          <div className="col-3 text-center">
            หมวดหมู่
          </div>
          <div className="col-3 text-center">
            จำนวน
          </div>
          <div className="col-3 text-center">
            รายการอาหาร
          </div>
          <div className="col-3 text-center">
            ราคา
          </div>
          <hr className="line-g" />
        </div>
        <div className="row font-25">
          <div className="col-3 text-center">
            เนื้อสัตว์
          </div>
          <div className="col-3 text-center">
            2
          </div>
          <div className="col-3 text-center">
            เนื้อหมู
          </div>
          <div className="col-3 text-center">
            38
          </div>
          <hr className="line-g" />
        </div>
        <div>
        <Link className="link text-w"to="/emp/order/print">
            <div className="printagain-but text-center text-w my-3" type="button">ปริ้นอีกครั้ง </div>
          </Link>
        </div>
        
      </div>
      

    </div>



  );
}

export default History;