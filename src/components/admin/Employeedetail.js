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


function Employeedetail() {


    return (
        <div>
            <div className=" bgc-g py-3">
                <div className="font-50 text-center">
                    รายละเอียดพนักงาน
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสพนักงาน:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        0022
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        สถานะ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        02
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ชื่อ - สกุล:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        ฟฟฟฟฟ สสสสสส
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ที่อยู่:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        230 หมู่ 9
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        เบอร์ติดต่อ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        099999
                    </div>
                    <div className="col-7">
                    </div>
                </div>

                <div className="sdsd">


                    <Link className="link text-w" to="/admin/employee/employeedetail/employeefix">
                        <div className="employeefix-but text-center my-5 d-inline-block" type="button">
                            แก้ไข
                        </div>
                    </Link>
                    <Link className="link text-w" to="#">
                        <div className="deletfixtable-but text-center my-5 d-inline-block mx-3" type="button">
                            ลบออก
                        </div>
                    </Link>

                </div>
            </div>



        </div>



    );
}

export default Employeedetail;