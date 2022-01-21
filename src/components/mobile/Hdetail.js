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

function Hdetail() {
    var navigate = useNavigate();
    const { tid, oid } = useParams();
    const [Menu, Setmenu] = useState([])
    const [drinkMenu, SetDrinkmenu] = useState([])
    const [vetMenu, SetVetmenu] = useState([])
    const [fastMenu, SetFastmenu] = useState([])
    const [round, SetRound] = useState(0)

    useEffect(() => {


        Axios.post(`http://localhost:8888/geto/${tid}`, {
            oid: oid
        }).then((resultt) => {

            Setmenu(resultt.data)



        })








    }, []);







    return (
        <div className=" text-center">

            <div className="bgc-y py-2">
                <h1 className="text-w">โต๊ะของคุณหมายเลข {tid}</h1>
            </div>
            <div>
                <table className="table mt-5 table-bordered ">
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



            <div onClick={() => {
                navigate(`/mobile/history/${tid}`);
            }} className="button-g text-center mt-2 d-inline-block mx-3">
                ประวัติการสั่งอาหาร
            </div>

        </div>
    );
}

export default Hdetail;