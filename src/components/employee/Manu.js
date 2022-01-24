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

function Manu() {
    const { uid } = useParams();

    const [menu, Setmenu] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:8888/allmenu').then((result) => {
            Setmenu(result.data)
        })
    }, [menu]);

    const Onm = (e) => {
        Axios.get(`http://localhost:8888/onmenu/${e}`).then((result) => {

        })
    }

    const Offm = (e) => {
        Axios.get(`http://localhost:8888/offmenu/${e}`).then((result) => {

        })
    }

    return (
        <div>
            <div className="nav-g py-2">
                <div className="row font-25">
                    <div className="col-3 text-center text-w">
                        รูปภาพ
                    </div>
                    <div className="col-2 text-center text-w">
                        รหัสเมนู
                    </div>
                    <div className="col-2 text-center text-w">
                        เมนู
                    </div>
                    <div className="col-2 text-center text-w">
                        สถานะ
                    </div>
                    <div className="col-3 text-center text-w">
                        รายละเอียด
                    </div>
                </div>
            </div>

            {
                menu.map((result, key) => {

                    return (

                        <div className="row bgc-g py-3 mb-2 zzzborder" style={{ height: 200 }}>
                            <div className="col-3 text-center">
                                <div className="photo-size mt-2">
                                    <img style={{ width: 150, height: 150 }} src={`/uploads/${result.Menu_image}`} />

                                </div>
                            </div>
                            <div className="col-2 text-center pt-5 mt-4">
                                <h3>{result.Menu_code}</h3>
                            </div>
                            <div className="col-2 text-center pt-5 mt-4">
                                <h3>{result.Menu_nameTH}</h3>
                            </div>
                            <div className="col-2 text-center pt-5 mt-32">
                                {result.status == 1 ? <h5 style={{ color: "green" }}>เปิด</h5> : <h5 style={{ color: "red" }}>ปิด</h5>}


                            </div>
                            <div className="col-3 text-center text-w pt-5">

                                <div onClick={() => {
                                    if (result.status == 1) {
                                        Offm(result.Menu_code)
                                    } else {
                                        Onm(result.Menu_code)
                                    }
                                }} className="link text-w" >
                                    <div className="openclose-but mt-4" type="button">
                                        เปิด/ปิด
                                    </div>
                                </div>

                                
                            </div>

                        </div>


                    )
                })
            }

        </div>



    );
}

export default Manu;