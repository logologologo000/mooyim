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


function Addmanu() {


    return (
        <div>
            <div className=" bgc-g py-3">
                <div className="font-50 text-center">
                    เพิ่มรายการอาหาร
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รูปประกอบ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="file" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสหมวดหมู่:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสเมนู:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ชื่อเมนู:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div>
                <Link className="link text-w" to="#">
                        <div className="confirm-but text-center my-5" type="button">ยืนยัน </div>
                    </Link>
                </div>
            </div>



        </div>



    );
}

export default Addmanu;