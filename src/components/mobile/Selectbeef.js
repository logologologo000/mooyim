import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../../Logo001.png";
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

  const [frow, SetFrow] = useState([])
  const [srow, SetSrow] = useState([])
  const [ic, SetIc] = useState(0)

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
    console.log(logo)
  }, [])

  const SendOrder = () => {



  }


  return (

    <div className="container">

      <nav className="fixed-bottom">
        <div className="bgc-g py-2">
          <div className="my-3">
            <div className="button-g text-center mt-2 d-inline-block mx-3">
              ประวัติการสั่งอาหาร
            </div>
            <div className="button-gr text-center mt-2 d-inline-block mx-3" >
              <Link className="link text-w" to="/mobile/end">ส่งรายการอาหาร</Link>

            </div>
          </div>
        </div>
      </nav>

      <div className="row mart" >

        <div className="m-au col-12 container">
          {
            //loop here
          }
          <div className="bgc-p text-center">
            <h4 className="" id="beef">********** หมายเหตุ **********</h4>
            <h5 className="" id="">- ไม่สามารถยกเลิกรายการสั่งได้</h5>
          </div>
          <h1 id="asd" className="mt-5" >เนื้อสัตว์</h1>
          <hr className="my-0 hr21" />
          {
            beefMenu.map((result, key) => {
              console.log(key)



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
                      <div onClick={() => {
                        var z = document.getElementById(`${result.Menu_code}`)
                        z = parseInt(z.innerHTML) + 1
                        var y = document.getElementById(`${result.Menu_code}`).innerHTML = z


                      }} className="add-but text-center mt-2">
                        +
                      </div>
                      <div id={result.Menu_code} className="mt-2 text-center">
                        0
                      </div>
                      <div
                        onClick={() => {
                          var z = document.getElementById(`${result.Menu_code}`)
                          z = parseInt(z.innerHTML) - 1
                          if (z <= 0) {
                            z = 0
                          }
                          var y = document.getElementById(`${result.Menu_code}`).innerHTML = z


                        }} className="down-but text-center mt-2">
                        -
                      </div>
                    </div>


                  </div>

                </div>
              )
            })
          }
          <h1 className="" id="vet"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="">ผักสด</h1>
          <hr className="my-0 hr21" />

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
          <h1 className="" id="fast"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="fast">ของทานเล่น</h1>
          <hr className="my-0 hr21" />

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
          <h1 className="" id="drink"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="">เครื่องดื่ม</h1>
          <hr className="my-0 hr21" />

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



        </div>

      </div>





    </div>
  );
}

export default Selectbeef;