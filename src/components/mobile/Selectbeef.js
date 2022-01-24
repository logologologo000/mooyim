
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
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


function Selectbeef() {

  const { tid } = useParams();
  var navigate = useNavigate();

  const [beefMenu, SetBeefmenu] = useState([])
  const [drinkMenu, SetDrinkmenu] = useState([])
  const [vetMenu, SetVetmenu] = useState([])
  const [fastMenu, SetFastmenu] = useState([])
  const [allMenu, SetAllmenu] = useState([])

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

    Axios.get('http://localhost:8888/allmenu').then((result) => {
      SetAllmenu(result.data)
    })



  }, [])

  const [amount, SetAmount] = useState(0)
  const [menucode, SetMenucode] = useState(0)
  const [price, Setprice] = useState(0)
  const [headcode, SetHeadcode] = useState(0)

  const SendOrder = () => {

    var headcodevar = 0
    //รับ เลขโต๊ะมาจาก params 
    //ส่งไปเพื่อ รับ row ของ order
    Axios.get(`http://localhost:8888/insorder/${tid}`, {

    }).then((result) => {
      console.log("row คือ")
      var s = result.data[0]

      console.log(parseInt(Object.values(s)))
      headcodevar = parseInt(Object.values(s))


      var price = 0
      allMenu.map((result, key) => {



        if (document.getElementById(`${result.Menu_code}`) != null) {



          var x = document.getElementById(`${result.Menu_code}`).innerHTML
          price = result.Menu_price * x
          console.log(`ต่าของอาหารที่ ${result.Menu_code} คือ ${x} ราคารวม ${price}`)

          if (x != 0) {

            Axios.post('http://localhost:8888/setmenu', {
              Detail_amount: x,
              Menu_code: result.Menu_code,
              Detail_price: price,
              Head_code: headcodevar,
              tid: tid
            }).then((result) => {

            })

          }


        }



      })




    })



    // วน loop เพิ่ม รายกายอาหาร

  }



  return (

    <div className="container">

      <nav className="fixed-bottom">
        <div className="bgc-g py-2">
          <div className="my-3">
            <div onClick={() => {
              navigate(`/mobile/history/${tid}`);
            }} className="button-g text-center mt-2 d-inline-block mx-3">
              ประวัติการสั่งอาหาร
            </div>

            <div onClick={() => {

              var check = false
              allMenu.map((result, key) => {

                if (document.getElementById(`${result.Menu_code}`) != null) {



                  var x = document.getElementById(`${result.Menu_code}`).innerHTML

                  if (x > 0) {



                    check = true

                  }





                }

              })

              if (check) {
                SendOrder()


                window.setTimeout(function () {
                  navigate(`/mobile/end/${tid}`);
                }, 1000)
                console.log("success")

              } else {
                alert("กรุณาใส่จำนวนเมนูอาหารและเครื่องดื่ม")
              }






            }}
              className="button-gr text-center mt-2 d-inline-block mx-3" >

              <div className="link text-w" to="/mobile/end">ส่งรายการอาหาร</div>

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


              if (result.status == 1) {











                return (

                  <div key={key}>

                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                        <img style={{width : 100 , height : 100}} src={`/uploads/${result.Menu_image}`} />
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
                          if (z >= 10) {
                            z = 10
                          }

                          var y = document.getElementById(`${result.Menu_code}`).innerHTML = z
                          SetAmount(y)

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
                            SetAmount(y)


                          }} className="down-but text-center mt-2">
                          -
                        </div>
                      </div>


                    </div>

                  </div>
                )

              }

            })
          }
          <h1 className="" id="vet"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="">ผักสด</h1>
          <hr className="my-0 hr21" />

          {
            vetMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                        <img style={{width : 100 , height : 100}} src={`/uploads/${result.Menu_image}`} />
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
                          if (z >= 10) {
                            z = 10
                          }

                          var y = document.getElementById(`${result.Menu_code}`).innerHTML = z
                          SetAmount(y)

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
                            SetAmount(y)


                          }} className="down-but text-center mt-2">
                          -
                        </div>
                      </div>


                    </div>

                  </div>
                )
              }
            })
          }
          <h1 className="" id="fast"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="fast">ของทานเล่น</h1>
          <hr className="my-0 hr21" />

          {
            fastMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                        <img style={{width : 100 , height : 100}} src={`/uploads/${result.Menu_image}`} />
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
                          if (z >= 10) {
                            z = 10
                          }

                          var y = document.getElementById(`${result.Menu_code}`).innerHTML = z
                          SetAmount(y)

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
                            SetAmount(y)


                          }} className="down-but text-center mt-2">
                          -
                        </div>
                      </div>


                    </div>

                  </div>
                )
              }
            })
          }
          <h1 className="" id="drink"><br /></h1>
          <h1 className="" id=""><br /></h1>
          <h1 className="mt-5" id="">เครื่องดื่ม</h1>
          <hr className="my-0 hr21" />

          {
            drinkMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                        <img style={{width : 100 , height : 100}} src={`/uploads/${result.Menu_image}`} />
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
                          if (z >= 10) {
                            z = 10
                          }

                          var y = document.getElementById(`${result.Menu_code}`).innerHTML = z
                          SetAmount(y)

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
                            SetAmount(y)


                          }} className="down-but text-center mt-2">
                          -
                        </div>
                      </div>


                    </div>

                  </div>
                )
              }
            })
          }



        </div>

      </div>





    </div>
  );
}

export default Selectbeef;