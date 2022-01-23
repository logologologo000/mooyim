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
import { useNavigate } from 'react-router-dom';

function Addtable() {
    var navigate = useNavigate();
    const { uid, uidd } = useParams();

    const [table_id, SetTable_id] = useState("")
    const [table_name, SetTable_name] = useState("")
    const AddTable = () => {

        if (table_name == '' || table_id == '') {
            navigate(`/admin/table/${uid}`);
        } else {
            Axios.post(`http://localhost:8888/addtable`, {
                table_id: table_id,
                table_name: table_name


            }).then((result) => {

                navigate(`/admin/table/${uid}`);


            })
        }




    }

    return (
        <div>
            <div className=" bgc-g py-3">
                <div className="font-50 text-center">
                    เพิ่มโต๊ะ
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสโต๊ะ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input onChange={(e) => {
                            SetTable_id(e.target.value)
                        }} type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ชื่อโต๊ะ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        < input onChange={(e) => {
                            SetTable_name(e.target.value)
                        }} type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>

                <div >
                    <div onClick={AddTable} className="link text-w" to="#">
                        <div className="confirm-but text-center my-5" type="button">ยืนยัน </div>
                    </div>
                </div>
            </div>



        </div>



    );
}

export default Addtable;