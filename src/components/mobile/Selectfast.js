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

function Selectfast() {

  const [beefMenu, SetBeefmenu] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8888/beefmenu').then((result) => {
      SetBeefmenu(result.data)
    })
  }, [])

  console.log(beefMenu)
  return (

    <div className="container">
      <div className="row mt-3">
        <div className="text-start d-inline-block col-6">เนื้อสัตว์</div>
        <div className="text-end d-inline-block col-6">จำนวน</div>
        <br />
        <hr className="" />

        <div className="m-au col-12 container">
          {
            //loop here
          }

          {
            beefMenu.map((result, key) => {
              return (
                <div key={key}>
                  <div className="row bgc-g mt-3">
                    <div className="col-5">
                      <div className="py-5 text-center">
                        รูป123455
                      </div>
                    </div>
                    <div className="col-5 pt-3">
                      <h3>{result.Menu_nameTH}</h3>
                      <p>ราคา {result.Menu_price} บาท</p>
                    </div>
                    <div className="col-2">
                      <div className="add-but text-center mt-2">
                        +
                      </div>
                      <div className="mt-2 text-center">
                        1
                      </div>
                      <div className="down-but text-center mt-2">
                        -
                      </div>
                    </div>


                  </div>

                </div>
              )
            })
          }

          <div className="my-3">
            <div className="button-g text-center mt-2 d-inline-block mx-3">
              เลือกอาหาร
            </div>
            <div className="button-gr text-center mt-2 d-inline-block mx-3" >
              ส่งรายการอาหาร
            </div>
          </div>

        </div>

      </div>





    </div>
  );
}

export default Selectfast;