import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";


// get Order//////////////////////////////////////////////////////////////////////////////////////////////////

function Order() {
  const [menu, Setmenu] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:8888/allmenu').then((result) => {
      Setmenu(result.data)
    })
  }, []);


  return (
    <div>
         <div className="nav-g py-2">
                <div className="row font-25">
                  <div className="col-4 text-center text-w">
                    รหัสบิล
                  </div>
                  <div className="col-4 text-center text-w">
                    เลขโต๊ะ
                  </div>
                  <div className="col-4 text-center text-w">
                    รายละเอียด
                  </div>
                </div>
              </div>
      {
        menu.map((result, key) => {

          return (

            <div>

             
              <div className="row bgc-g mt-1 py-3">
                <div className="col-4 text-center mt-4">
                  <h3>#003</h3>
                </div>
                <div className="col-4 text-center text-g mt-4">
                  <h3>โต๊ะ01</h3>
                </div>
                <div className="col-4 text-center text-w">

                  <Link className="link text-w" to="/emp/order/detail">
                    <div className="detail-but" type="button">ดูรายละเอียด </div>
                  </Link>

                  <Link className="link text-w" to="/emp/order/print">
                    <div className="print-but mt-2" type="button">ปริ้นออร์เดอร์ </div>
                  </Link>

                </div>
              </div>
            </div>

          )

        })
      }


    </div>



  );
}

export default Order;