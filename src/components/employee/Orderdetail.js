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

function Orderdetail() {
    var navigate = useNavigate();
    const { uid, oid } = useParams();
    const [Menu, Setmenu] = useState([])
    const [drinkMenu, SetDrinkmenu] = useState([])
    const [vetMenu, SetVetmenu] = useState([])
    const [fastMenu, SetFastmenu] = useState([])
    const [round, SetRound] = useState(0)


    useEffect(() => {


        Axios.post(`http://localhost:8888/geto`, {
            oid: oid
        }).then((resultt) => {

            Setmenu(resultt.data)



        })








    }, []);
    console.log(uid)
    return (
        <div>
            <div>
                <table className="table mt-5 table-bordered text-center ">
                    <thead>
                        <tr>
                            <td>ลำดับ</td>
                            <td>รายการอาหาร</td>
                            <td>จำนวน</td>
                            <td>ราคารวม</td>
                        </tr>
                    </thead>
                    {

                        Menu.map((result, key) => {






                            return (
                                <tr key={key} >
                                    <td className="p-2">{key + 1}</td>
                                    <td className="p-2">{result.Menu_nameTH}</td>
                                    <td className="p-2">{result.Detail_amount}</td>
                                    <td className="p-2">{result.Detail_price}</td>


                                </tr>

                            )



                        })
                    }




                </table>

            </div>
            <div className="d-block text-center">
                <div onClick={() => {
                    navigate(`/emp/order/${uid}`);
                }} className="button-g text-center mx-5 d-inline-block ">
                    ย้อนกลับ
                </div>
                <div onClick={() => {
                    navigate(`/emp/order/${uid}`);
                }} className="button-g text-center  d-inline-block ">
                    ปริ้นออร์เดอร์
                </div>

            </div>


        </div>



    );
}

export default Orderdetail;