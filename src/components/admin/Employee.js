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


function Employee() {
    var navigate = useNavigate();

    const { uid } = useParams();
    const [emp, SetEmp] = useState([])


    useEffect(() => {
        Axios.get('http://localhost:8888/allemp').then((result) => {
            SetEmp(result.data)
        })
    }, [emp]);

    console.log(emp)

    const DelEmp = () => {

        

        
    }

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
                        <Link className="d-inline-block" to={`/admin/employee/addemployee/${uid}`}>
                            <IoMdAdd className="add-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            {
                emp.map((result, key) => {
                    return (
                        <div className="row bgc-g mb-1 py-3">
                            <div className="col-3 text-center mt-4">
                                <h3>#{result.User_id}</h3>
                            </div>
                            <div className="col-2 text-center text-g mt-4">
                                {result.Status_id == '01' ? <h3>Admin</h3> : <h3>Employee</h3> }
                            </div>
                            <div className="col-3 text-center text-g mt-4">
                                <h3>{result.User_name} {result.User_surname}</h3>
                            </div>
                            <div className="col-3 text-center text-w">

                                <Link className="link text-w"  to={`/admin/employee/employeedetail/${uid}/${result.User_code}`}>
                                    <div className="detail-but" type="button">ดูรายละเอียด </div>
                                </Link>

                                <Link className="link text-w" to="#">
                                    <div onClick={() => {
                                        if(window.confirm("ยืนยัน")) {
                                            Axios.get(`http://localhost:8888/delemp/${result.User_code}`).then((result) => {
                                            
                                                navigate(`/admin/employee/${uid}`);
                                            
                                
                                        })
                                        }
                                    }} className="deletemployee-but mt-2" type="button">ลบออก </div>
                                </Link>
                            </div>
                            <div className="col-1">
                            </div>

                        </div>
                    )
                })
            }

        </div>



    );
}

export default Employee;