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
 import { AiFillCheckCircle } from "react-icons/ai";

function End() {
  

  return (
    <div className="container text-center">
        <div className="mt-5">
            < AiFillCheckCircle className="size-i" />
        </div>
        
        <div className="mt-5">
            สั่งรายการอาหารและเครื่องดื่มเรียบร้อย !!
        </div>
        <div className=" m-au mt-5">
        <Link to="#">
            <div className="button-g mt-3 d-inline-block mx-3">ประวัติการสั่ง</div>

        </Link>
        <Link to="/mobile/beef">
            <div className="button-g mt-3 d-inline-block mx-3">สั่งอาหารและเครื่งดื่ม</div>

        </Link>
        </div>
        
    </div>
  );
}

export default End;