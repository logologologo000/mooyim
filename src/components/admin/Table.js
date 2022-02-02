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
import { IoMdAdd } from "react-icons/io";
import { useParams } from 'react-router-dom'

function Table() {

    const { uid } = useParams();

    const [menu, Setmenu] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:8888/alltableq').then((result) => {
            Setmenu(result.data)
        })
    }, [menu]);

    const Ont = (e) => {
        Axios.get(`http://localhost:8888/ontable/${e}`).then((result) => {
            
        })
    }

    const Offt = (e) => {
        Axios.get(`http://localhost:8888/offtable/${e}`).then((result) => {
            
        })
    }
    return (
        <div>
            <div className="nav-g py-2">
                <div className="row font-25">
                   
                    <div className="col-4 text-center text-w">
                        เลขโต๊ะ
                    </div>
                    <div className="col-4 text-center text-w">
                        สถานะ
                    </div>
                    <div className="col-3 text-center text-w">
                        รายละเอียด
                    </div>
                    <div className="col-1">
                        <Link className="d-inline-block" to={`/admin/table/addtable/${uid}`}>
                            <IoMdAdd className="add-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            {
                menu.map((result, key) => {

                    return (

                        <div className="row bgc-g zzzborder" style={{ height: 130 }}>
                            
                            <div className="col-4 text-center py-5 mt-2">
                                <h3>{result.Table_name}</h3>
                            </div>
                            <div className="col-4 text-center py-5 mt-3">
                                {result.status == 1 ? <h5 style={{color : "green"}}>เปิด</h5> : <h5 style={{color : "red"}}>ปิด</h5>}
                            </div>
                            <div className="col-4 text-center py-4 text-w">

                            <div onClick={() => {
                                    if(result.status == 1) {
                                        Offt(result.Table_code)
                                        console.log("1")
                                    }else {
                                        Ont(result.Table_code)
                                        console.log("2")

                                    }
                                }} className="link text-w" >
                                    <div className="openclose-but " type="button">
                                        เปิด/ปิด
                                    </div>
                                </div>



                                <Link className="link text-w d-inline-block" to={`/admin/table/detail/${uid}/${result.Table_code}`}>
                                    <div className="detailtable-but mt-2" type="button">รายละเอียด </div>
                                </Link>
                            </div>

                        </div>

                    )
                })
            }


        </div>



    );
}

export default Table;