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

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Tabledetail() {

  var navigate = useNavigate();

  const { uid, tid } = useParams();
  const [Menu, Setmenu] = useState([])
  const [drinkMenu, SetDrinkmenu] = useState([])
  const [vetMenu, SetVetmenu] = useState([])
  const [fastMenu, SetFastmenu] = useState([])
  const [price, SetPrice] = useState(0)

  useEffect(() => {

    Axios.get(`http://localhost:8888/ordert/${tid}`).then((result) => {
      Setmenu(result.data)




    })



    Axios.get(`http://localhost:8888/getorderbt/${tid}`).then((resultt) => {

      var x = 0

      resultt.data.map((result, key) => {

        x = x + result.Detail_price




      })
      SetPrice(x)
    })




  }, []);

  const Fin = () => {
    Axios.get(`http://localhost:8888/clearorder/${tid}`).then((result) => {
      Axios.get(`http://localhost:8888/ordert/${tid}`).then((result) => {
        Setmenu(result.data)




      })



      Axios.get(`http://localhost:8888/getorderbt/${tid}`).then((resultt) => {

        var x = 0

        resultt.data.map((result, key) => {

          x = x + result.Detail_price




        })
        SetPrice(x)
      })
    })
  }

  return (
    <div className=" text-center">



      {
        price == 0 ? <Link className="link text-w" to={`/admin/table/fixtable/${uid}/${tid}`}>
          <div className="fix-manu-but d-inline-block  my-2" type="button">
            แก้ไข
          </div>
        </Link> : <h3 className="py-3">ราคารวมทั้งหมด {price} บาท</h3>
      }
      <div className=" mb-5">
        <div type="button" onClick={() => {
          window.open(`http://localhost:3000/admin/table/detail/printf/${uid}/${tid}`);
          // navigate(`/mobile/${tid}/beef`);
        }} className="button-g text-center mt-2 d-inline-block mx-3 px-5 ">
          ปริ้นใบเสร็จ
        </div>
        <div type="button" onClick={() => {
          // navigate(`/admin/table/detail/${uid}/${tid}`);
          Fin()
        }} className="button-gr text-center mt-2 d-inline-block mx-3 px-5 ">
          ชำระเงิน
        </div>
      </div>
      <div className="mb-5">
        <table className="table mt-2 table-bordered ">
          <thead>
            <tr>
              <td>หมายเลขออเดอร์</td>
              <td>รายละเอียด</td>
            </tr>
          </thead>
          {

            Menu.map((result, key) => {






              return (
                <tr >
                  <td className="p-2">{result.Head_code}</td>
                  <td className="p-2">
                    <div className="">
                      <input onClick={() => {
                        navigate(`/admin/order/detail/${uid}/${result.Head_code}`)
                      }} type="button" value="เปิด" />
                    </div>
                  </td>

                </tr>

              )



            })
          }




        </table>

      </div>







    </div>



  );
}

export default Tabledetail;