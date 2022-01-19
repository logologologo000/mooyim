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

function Manu() {


    return (
        <div>
            <div className="nav-g py-2">
                <div className="row font-25">
                    <div className="col-2 text-center text-w">
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
                    <div className="col-1 text-center">
                        <Link className="d-inline-block"to="/admin/manu/addmanu">
                            <IoMdAdd className="add-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row bgc-g py-3 mb-2 zzzborder" style={{ height: 200 }}>
                <div className="col-2 text-center">
                    <div className="photo-size mt-2">
                    </div>
                </div>
                <div className="col-2 text-center pt-5 mt-4">
                    <h3>001</h3>
                </div>
                <div className="col-2 text-center pt-5 mt-4">
                    <h3>หมู</h3>
                </div>
                <div className="col-2 text-center pt-5 mt-32">
                    <h5>สถานะ:เปิด</h5>
                </div>
                <div className="col-3 text-center text-w pt-5">

                    <Link className="link text-w" to="#">
                        <div className="openclose-manu-but d-inline-block" type="button">เปิด/ปิด </div>
                    </Link>

                    <Link className="link text-w" to="/admin/manu/manufix">
                        <div className="fix-manu-but d-inline-block  my-2" type="button">
                            แก้ไข 
                            </div>
                    </Link>

                

                </div>
                <div className="col-1">
                   
                </div>

            </div>
        </div>



    );
}

export default Manu;