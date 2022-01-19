import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../../Logo002.png";

// import { AiFillAlert } from "react-icons/ai";
// import { HiUsers } from "react-icons/hi";
// import { FaUserGraduate } from "react-icons/fa";
// import { MdAssignment } from "react-icons/md";
// import { GoEye } from "react-icons/go";
// import { HiOutlineSearchCircle } from "react-icons/hi";

function Index() {


  return (
    <div className="container text-center">
      <div>
      <img src={logo} style={{width : 300, height :350}}/>

      </div>
      <div className="mt-5">
        <h2>โต๊ะของคุณหมายเลข </h2>
      </div>

      <div className="wid-70 m-au">
        <Link className="link" to="beef">
          <div className="button-g mt-5">สั่งอาหารและเครื่งดื่ม</div>
        </Link>

        <div className="button-g mt-3">ประวัติการสั่งอาหารและเครื่งดื่ม</div>
      </div>

    </div>
  );
}

export default Index;