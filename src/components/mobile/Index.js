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

function Index() {
  

  return (
    <div className="container text-center">
        <div>
            <img src="#"/>
        </div>
        <div className="mt-3">
            <h2>โต๊ะของคุณหมายเลข </h2>
        </div>

        <div className="wid-70 m-au">
            <div className="button-g mt-3">สั่งอาหารและเครื่งดื่ม</div>
            <div className="button-g mt-3">ประวัติ</div>
        </div>
        
    </div>
  );
}

export default Index;