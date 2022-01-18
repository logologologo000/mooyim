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

function Login() {


  return (
    <div className=" bgc-login p-1">
      <div className="login text-center p-5">
        <h1> MOOYIMJIMJUM</h1>
        <input className="input-username my-3" placeholder=":username" />
        <input className="input-password" placeholder=":password" />
        <div className="login-but text-w" type="button">
          เข้าสู่ระบบ
        </div>
      </div>






    </div>
  );
}

export default Login;