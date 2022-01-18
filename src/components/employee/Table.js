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

function Table() {


    return (
        <div>
            <div className="nav-g py-2">
                <div className="row font-25">
                    <div className="col-3 text-center text-w">
                        รูปภาพ
                    </div>
                    <div className="col-2 text-center text-w">
                        รหัสโต๊ะ
                    </div>
                    <div className="col-2 text-center text-w">
                        เลขโต๊ะ
                    </div>
                    <div className="col-2 text-center text-w">
                        สถานะ
                    </div>
                    <div className="col-3 text-center text-w">
                        รายละเอียด
                    </div>
                </div>
            </div>
            <div className="row bgc-g zzzborder" style={{ height: 200 }}>
                <div className="col-3 text-center mt-4">
                    <div className="photo-size">

                    </div>
                </div>
                <div className="col-2 text-center py-5 mt-4">
                    <h3>001</h3>
                </div>
                <div className="col-2 text-center py-5 mt-4">
                    <h3>โต๊ะ01</h3>
                </div>
                <div className="col-2 text-center py-5 mt-32">
                    <h5>สถานะ:เปิด</h5>
                </div>
                <div className="col-3 text-center py-5 text-w">

                    <Link className="link text-w" to="#">
                        <div className="opentable-but d-inline-block mx-2 " type="button">เปิด </div>
                    </Link>

                    <Link className="link text-w" to="#">
                        <div className="closetable-but d-inline-block" type="button">ปิด </div>
                    </Link>

                    <Link className="link text-w d-inline-block" to="/emp/table/detail">
                        <div className="detailtable-but mt-2" type="button">รายละเอียด </div>
                    </Link>
                </div>

            </div>
        </div>



    );
}

export default Table;