import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
//import { useHistory, useParams } from "react-router-dom";
// import { AiFillAlert } from "react-icons/ai";
// import { HiUsers } from "react-icons/hi";
// import { FaUserGraduate } from "react-icons/fa";
// import { MdAssignment } from "react-icons/md";
// import { GoEye } from "react-icons/go";
// import { HiOutlineSearchCircle } from "react-icons/hi";
import logo from "../../Logo002.png";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Print() {
  //let history = useHistory();
  var navigate = useNavigate();
  const { uid, oid } = useParams();
  const [Menu, Setmenu] = useState([])
  const [price, Setprice] = useState(0)
  const [DT, SetDt] = useState("")
  const [tid, Settid] = useState(1)
  const [user, Setuser] = useState([])
  const [num, SetNum] = useState("")

  var x = 0
  var ti = ""
  useEffect(() => {
    // alert("กำลังค้นหาอุปกรณ์")
    // alert("ไม่พบอุปกรณ์เครื่องปริ้น")
    //history.push("/");
    var date = new Date()
    // SetDt(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`)
    date.setHours(date.getHours()+7);
    SetDt(`${date.toISOString().substring(10,0)}  ${date.toISOString().substring(16 , 11)}`)
    
    Axios.post(`http://localhost:8888/geto`, {
      oid: oid
    }).then((resultt) => {

      Setmenu(resultt.data)
      Settid(resultt.data[0].Table_code)
      SetNum(resultt.data[0].Head_code)

    })

    Axios.get(`http://localhost:8888/allemp/${uid}`).then((response) => {
      console.log(response.data[0])
      Setuser(response.data[0])
    })

    setTimeout(() => {
      window.print()
      window.close();
    } , 300)

  }, [])


  
  return (
    <div className="text-center container">
      <img src={logo} width={150} height={200} className="mb-5" />
      <div className="row">
        <div className="col-6 text-start">
          <p className="my-0">เลขที่ออร์เดอร์ : #00{num}</p>
          <p>ออกโดย : {user.User_name}</p>
        </div>
        <div className="col-6 text-end">
          <p className="my-0">โต๊ะ {tid}</p>
          <p>{DT}</p>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">หมวดหมู่</th>
            <th scope="col">จำนวน</th>
            <th scope="col">รายการอาหาร</th>
            <th scope="col">ราคา</th>
          </tr>
        </thead>
        <tbody>
          {
            Menu.map((response, key) => {

              x += response.Detail_price
              

              




              // console.log(document.getElementById(key).innerText)

              if (key != 0) {



                  



                setTimeout(() => {

                  if (response.Type_id == "001") {
                    ti = "เนื้อสัตว์"
                  } else if (response.Type_id == "002") {
                    ti = "ของทานเล่น"
                  } else if (response.Type_id == "003") {
                    ti = "ผัก"
                  } else if (response.Type_id == "004") {
                    ti = "เครื่องดื่ม"
                  }

                  //   if (document.getElementById(key) != null) {
                  console.log(ti)
                  console.log(document.getElementById(key - 1).innerText)
                  if (ti == document.getElementById(key - 1).innerText || ti == document.getElementById(key - 2).innerText || ti == document.getElementById(key - 3).innerText ){
                    document.getElementById(key).innerHTML = ""
                  }
                  // console.log(document.getElementById(0).innerText)
                  // console.log(document.getElementById(1).innerText)
                  // if (ti == document.getElementById(key - 1).innerText) {
                  //   document.getElementById(key).innerText = ""
                  //   console.log(123)
                  // }
                  //   }
                }, 100)

              }




              // if(ti == document.getElementById(key-1).innerText){
              //   console.log("123456789")
              // }
              // console.log(document.getElementById(key).innerText = 123)
              return (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td id={key} >
                    {
                      response.Type_id == "001" ? <p>เนื้อสัตว์</p> : (response.Type_id == "002" ? <p>ของทานเล่น</p> : (response.Type_id == "003" ? <p>ผัก</p> : <p>เครื่องดื่ม</p>))
                    }
                  </td>
                  <td>{response.Detail_amount}</td>
                  <td>{response.Menu_nameTH}</td>
                  <td>{response.Detail_price}</td>
                </tr>
              )


            })
          }
          <tr>
            <th scope="row">ยอดรวม</th>
            <td></td>
            <td></td>
            <td></td>
            <td>{x}</td>


          </tr>

        </tbody>
      </table>
    </div>



  );
}

export default Print;