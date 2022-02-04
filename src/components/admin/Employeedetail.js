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
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom'

function Employeedetail() {
    const { uid , uidd } = useParams();
    const [emp, SetEmp] = useState([])
    var navigate = useNavigate();


    useEffect(() => {

        Axios.get(`http://localhost:8888/allemp/${uidd}`).then((result) => {
            SetEmp(result.data)
            console.log(result)

        })

    }, []);

    const DelEmp = () => {

        if(window.confirm("ยืนยัน")) {
            Axios.get(`http://localhost:8888/delemp/${uidd}`).then((result) => {
            
                navigate(`/admin/employee/${uid}`);
            

        })
        }

        
    }
    console.log(uidd)

    return (
        <div>
            <div className=" bgc-g py-3">
                <div className="font-50 text-center">
                    รายละเอียดพนักงาน
                </div>
                <div className="row mt-5">
                    <div className="col-3 font-35 d-inline-block mx-5 text-end">
                        รหัสพนักงาน:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        {
                        emp[0] != null ? emp[0].User_id : <div></div>
                        }
                    </div>
                    <div className="col-5">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3 font-35 d-inline-block mx-5 text-end">
                        สถานะ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                    {emp[0] != null ? (emp[0].Status_id == '01' ? <h3 >แอดมิน</h3> : <h3 >พนักงาน</h3>) : <div></div> }
                        
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3 font-35 d-inline-block mx-5 text-end">
                        ชื่อ - สกุล:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        { emp[0] != null ? <div>{emp[0].User_name} {emp[0].User_surname}</div> : <div></div> } 
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-3 font-35 d-inline-block mx-5 text-end">
                        เบอร์ติดต่อ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        { emp[0] != null ? emp[0].tel : <div></div>}
                    </div>
                    <div className="col-7">
                    </div>
                </div>

                <div className="sdsd">


                    <Link className="link text-w d-inline" to={`/admin/employee/employeedetail/employeefix/${uid}/${uidd}`}>
                        <div className="employeefix-but text-center my-5 d-inline-block" type="button">
                            แก้ไข
                        </div>
                    </Link>
                    <div className="link text-w d-inline" onClick={DelEmp}>
                        <div className="deletfixtable-but text-center my-5 d-inline-block mx-3" type="button">
                            ลบออก
                        </div>
                    </div>

                </div>
            </div>



        </div>



    );
}

export default Employeedetail;