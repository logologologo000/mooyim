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
import logo from "../../Logo001.png";
import { useNavigate } from 'react-router-dom';

function Login() {

  var navigate = useNavigate();

  const [username, SetUsername] = useState("")
  const [tel, SetTel] = useState("")
  const [level, SetLevel] = useState("00")
  const [arr, SetArr] = useState([])
  

  useEffect(() => {

  }, []);

  const LogIn = () => {
    Axios.post('http://localhost:8888/login', {
      tel: tel,
      username: username
    }).then((result) => {
      try {
        if (result.data[0].Status_id = "01") {
          SetLevel("01")
        } else if (result.data[0].Status_id = "02") {
          SetLevel("02")
        } 

        SetArr(result.data)

      } catch (error) {
        alert(error)
      }

    })
  }


  console.log(username)
  console.log(tel)


  if (level == "01" ) {
    if (arr[0] != null ){
     console.log(arr[0].User_code)
     navigate(`/admin/order/${arr[0].User_code}`);

    }
  } else if (level == "02" ) {
    if (arr[0] != null ){

      navigate(`/emp/order/${arr[0].User_code}`);
    }
  } 


    return (
      <div style={{ backgroundImage: `url(${logo})` }} className="bgc-login p-1">
  
        <div className="login text-center p-5"  >
          <h1> MOOYIMJIMJUM</h1>
          <input onChange={(e) => {
            SetUsername(e.target.value)
          }} className="input-username my-3" placeholder=" :  username" />
          <input onChange={(e) => {
            SetTel(e.target.value)
          }} type="password" className="input-password" placeholder=" :  password" />
          <div onClick={LogIn} className="login-but text-w" type="button">
            เข้าสู่ระบบ
          </div>
        </div>
  
      </div>
    );
  

  
}

export default Login;