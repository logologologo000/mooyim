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
import { AiFillCheckCircle } from "react-icons/ai";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function History() {
  var navigate = useNavigate();

  const { tid } = useParams();
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

  





  return (
    <div className=" text-center">

      <div className="bgc-y py-2">
        <h1 className="text-w">โต๊ะของคุณหมายเลข {tid}</h1>
      </div>
      <h3 className="py-3">ราคารวมทั้งหมด {price} บาท</h3>
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
                        navigate(`/mobile/history/${tid}/${result.Head_code}`)
                      }} type="button" value="เปิด"/>
                    </div>
                  </td>
                  
                </tr>

              )



            })
          }




        </table>

      </div>
      <div className="">
        <div onClick={() => {
                navigate(`/mobile/${tid}/beef`);
            }} className="button-g text-center mt-2 d-inline-block mx-3 ">
                สั่งอาหาร
            </div>
      </div>
      





    </div>
  );
}

export default History;