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

function Selectbeef() {

  const [beefMenu, SetBeefmenu] = useState([])
  const [drinkMenu, SetDrinkmenu] = useState([])
  const [vetMenu, SetVetmenu] = useState([])
  const [fastMenu, SetFastmenu] = useState([])

  const [testar, SetTestar] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8888/beefmenu').then((result) => {
      SetBeefmenu(result.data)

    })

    Axios.get('http://localhost:8888/drinkmenu').then((result) => {
      SetDrinkmenu(result.data)
    })

    Axios.get('http://localhost:8888/fastmenu').then((result) => {
      SetFastmenu(result.data)
    })

    Axios.get('http://localhost:8888/vetmenu').then((result) => {
      SetVetmenu(result.data)
    })

  }, [])


  return (

    <div className="container">
      <div className="row mt-3">
        <div   className="text-start d-inline-block col-6">เนื้อสัตว์</div>
        <div className="text-end d-inline-block col-6">จำนวน</div>
        <br />
        <hr className="" />

        <div className="m-au col-12 container">
          {
            //loop here
          }
          <div className="mt-5" id="beef">เนื้อสัตว์</div>
          {
            beefMenu.map((result, key) => {
              return (
                <div key={key}>
                  <div className="row bgc-g mt-3">
                    <div className="col-5">
                      <div className="py-5 text-center">
                        รูป
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
          <div  className="mt-5" id="vet">ผักสด</div>
          {
            vetMenu.map((result, key) => {
              return (
                <div key={key}>
                  <div className="row bgc-g mt-3">
                    <div className="col-5">
                      <div className="py-5 text-center">
                        รูป
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
          <div className="mt-5" id="fast">ของทานเล่น</div>
          {
            fastMenu.map((result, key) => {
              return (
                <div key={key}>
                  <div className="row bgc-g mt-3">
                    <div className="col-5">
                      <div className="py-5 text-center">
                        รูป
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
          <div className="mt-5" id="drink">เครื่องดื่ม</div>
          {
            drinkMenu.map((result, key) => {
              return (
                <div key={key}>
                  <div className="row bgc-g mt-3">
                    <div className="col-5">
                      <div className="py-5 text-center">
                        รูป
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
            <div  className="button-g text-center mt-2 d-inline-block mx-3">
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

export default Selectbeef;