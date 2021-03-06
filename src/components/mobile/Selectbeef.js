
// import { useState, useEffect } from "react";
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
// import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import React, { useState, useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';





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
  const [dialog, Setdialog] = useState([])





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



  }, [dialog])

  const [amount, SetAmount] = useState(0)
  const [menucode, SetMenucode] = useState(0)
  const [price, Setprice] = useState(0)
  const [headcode, SetHeadcode] = useState(0)

  const SendOrder = () => {

    var headcodevar = 0
    //????????? ???????????????????????????????????? params 
    //?????????????????????????????? ????????? row ????????? order
    Axios.get(`http://localhost:8888/insorder/${tid}`, {

    }).then((result) => {
      console.log("row ?????????")
      var s = result.data[0]

      console.log(parseInt(Object.values(s)))
      headcodevar = parseInt(Object.values(s))


      var price = 0
      allMenu.map((result, key) => {



        if (document.getElementById(`${result.Menu_code}`) != null) {



          var x = document.getElementById(`${result.Menu_code}`).innerHTML
          price = result.Menu_price * x
          console.log(`?????????????????????????????????????????? ${result.Menu_code} ????????? ${x} ????????????????????? ${price}`)

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


    window.setTimeout(function () {
      navigate(`/mobile/end/${tid}`);
    }, 1000)
    console.log("success")
    // ?????? loop ??????????????? ?????????????????????????????????

  }


  const CheckOrder = () => {
    Setdialog([])
    On()
    // var headcodevar = 0
    //????????? ???????????????????????????????????? params 
    //?????????????????????????????? ????????? row ????????? order
    // Axios.get(`http://localhost:8888/insorder/${tid}`, {

    // }).then((result) => {
    // console.log("row ?????????")
    // var s = result.data[0]

    // console.log(parseInt(Object.values(s)))
    // headcodevar = parseInt(Object.values(s))


    var price = 0
    allMenu.map((result, key) => {



      if (document.getElementById(`${result.Menu_code}`) != null) {



        var x = document.getElementById(`${result.Menu_code}`).innerHTML
        // price = result.Menu_price * x
        // console.log(`?????????????????????????????????????????? ${result.Menu_code} ????????? ${x} ????????????????????? ${price}`)

        if (x != 0) {

          if (x > 0) {
            price = result.Menu_price * x
            // console.log(`????????????????????????????????????????????? ${result.Menu_code} ????????? ${x} ????????????????????? ${price}`)
            dialog.push(` ${result.Menu_nameTH} ??????????????? ${x} ????????????????????? ${price}`)
          }

        }




      }



    })



    GetDataMap()
    // })


    console.log(dialog)
    // ?????? loop ??????????????? ?????????????????????????????????

  }


  function On() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("naver").style.display = "none";
  }

  function Off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("naver").style.display = "block";

  }


  const GetDataMap = () => {


    return (

      dialog.map((result, key) => {
        document.getElementById('dlt').innerHTML += `<div>${result}</div>`

      })

    )

  }


  return (

    <div className="container">
      <div className="text-center" id="overlay">

        <div className="dialog-test text-w p-2">
          <h1 className="my-0" >?????????????????????????????????</h1>


        </div>
        <div className="dialog-test-d py-3"  id="dlt">

        </div>

        <div className="fixed-bottom mfixs">

          <input className="mx-4 cancel123 text-w py-2 px-3" onClick={() => {
            Off()

            document.getElementById('dlt').innerHTML = ""
          }} type="button" value="??????????????????" />
          <input className="mx-4 confirm123 text-w py-2 px-3 " onClick={() => {
            SendOrder()
          }} type="button" value="??????????????????" />
        </div>

      </div>
      <nav className="fixed-bottom " id="naver">
        <div className="bgc-g py-2">
          <div className="my-3">
            <div onClick={() => {
              navigate(`/mobile/history/${tid}`);
            }} className="button-g text-center mt-2 d-inline-block mx-3">
              ?????????????????????????????????????????????????????????
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


                CheckOrder()



                // window.setTimeout(function () {
                //   navigate(`/mobile/end/${tid}`);
                // }, 1000)
                // console.log("success")

              } else {
                alert("????????????????????????????????????????????????????????????????????????????????????????????????????????????")

              }






            }}
              className="button-gr text-center mt-2 d-inline-block mx-3" >

              <div className="link text-w" to="/mobile/end">??????????????????????????????????????????</div>

            </div>
          </div>
        </div>
      </nav>

      <div className="row mart mb-5" >

        <div className="m-au col-12 container">
          {
            //loop here
          }
          <div className="bgc-p text-center">
            <h4 className="" id="beef">********** ???????????????????????? **********</h4>
            <h5 className="" id="">- ????????????????????????????????????????????????????????????????????????????????????</h5>
          </div>

          <h1 id="asd" className="mt-5" >??????????????????????????????</h1>

          <hr className="my-0 hr21" />


          {




            beefMenu.map((result, key) => {


              if (result.status == 1) {











                return (

                  <div key={key}>

                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                          <img style={{ width: 100, height: 100 }} src={`/uploads/${result.Menu_image}`} />
                        </div>
                      </div>
                      <div className="col-5 pt-3">
                        <h3>{result.Menu_nameTH}</h3>
                        <p>???????????? {result.Menu_price} ?????????</p>
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
          <h1 className="mt-5" id="">???????????????</h1>
          <hr className="my-0 hr21" />

          {
            vetMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                          <img style={{ width: 100, height: 100 }} src={`/uploads/${result.Menu_image}`} />
                        </div>
                      </div>
                      <div className="col-5 pt-3">
                        <h3>{result.Menu_nameTH}</h3>
                        <p>???????????? {result.Menu_price} ?????????</p>
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
          <h1 className="mt-5" id="fast">??????????????????????????????</h1>
          <hr className="my-0 hr21" />

          {
            fastMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                          <img style={{ width: 100, height: 100 }} src={`/uploads/${result.Menu_image}`} />
                        </div>
                      </div>
                      <div className="col-5 pt-3">
                        <h3>{result.Menu_nameTH}</h3>
                        <p>???????????? {result.Menu_price} ?????????</p>
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
          <h1 className="mt-5" id="">?????????????????????????????????</h1>
          <hr className="my-0 hr21" />

          {
            drinkMenu.map((result, key) => {

              if (result.status == 1) {
                return (
                  <div key={key}>
                    <div className="row bgc-g mt-3">
                      <div className="col-5">
                        <div className="py-2 text-center">
                          <img style={{ width: 100, height: 100 }} src={`/uploads/${result.Menu_image}`} />
                        </div>
                      </div>
                      <div className="col-5 pt-3">
                        <h3>{result.Menu_nameTH}</h3>
                        <p>???????????? {result.Menu_price} ?????????</p>
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


          <br />
          <br />
          <br />
        </div>

      </div>





    </div>
  );
}

export default Selectbeef;