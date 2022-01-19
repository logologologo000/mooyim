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


function Employee() {


    return (
        <div>
            <div className="nav-g py-2">
                <div className="row font-25">
                    <div className="col-3 text-center text-w">
                        รหัสพนักงาน
                    </div>
                    <div className="col-2 text-center text-w">
                        สถานะ
                    </div>
                    <div className="col-3 text-center text-w">
                        ชื่อ - สกุล
                    </div>
                    <div className="col-3 text-center text-w">
                        รายละเอียด
                    </div>
                    <div className="col-1 text-center">
                        <Link className="d-inline-block" to="/admin/employee/addemployee">
                            <IoMdAdd className="add-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row bgc-g mb-1 py-3">
                <div className="col-3 text-center mt-4">
                    <h3>#003</h3>
                </div>
                <div className="col-2 text-center text-g mt-4">
                    <h3>01</h3>
                </div>
                <div className="col-3 text-center text-g mt-4">
                    <h3>admin1 admin2</h3>
                </div>
                <div className="col-3 text-center text-w">

                    <Link className="link text-w" to="/admin/employee/employeedetail">
                        <div className="detail-but" type="button">ดูรายละเอียด </div>
                    </Link>

                    <Link className="link text-w" to="#">
                        <div className="deletemployee-but mt-2" type="button">ลบออก </div>
                    </Link>
                </div>
                <div className="col-1">
                </div>

            </div>

        </div>



    );
}

export default Employee;