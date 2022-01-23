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


function Employeefix() {
    var navigate = useNavigate();

    const { uid, uidd } = useParams();
    const [ucode, SetUcode] = useState("")
    const [ustatus, SetUstatus] = useState("")
    const [lname, SetLname] = useState("")
    const [name, SetName] = useState("")
    const [tel, SetTel] = useState("")
    const [id, SetId] = useState(0)


    useEffect(() => {

        Axios.get(`http://localhost:8888/allemp/${uidd}`).then((result) => {
            SetId(result.data[0].User_code)
            SetUcode(result.data[0].User_id)
            SetUstatus(result.data[0].Status_id)
            SetLname(result.data[0].User_surname)
            SetName(result.data[0].User_name)
            SetTel(result.data[0].tel)
            
            

        })

    }, []);


    const EditC = () => {

        if (window.confirm("ยืนยัน")) {

            Axios.post(`http://localhost:8888/editemp/${uidd}`, {
                id : ucode ,
                ustatus : ustatus ,
                lname : lname ,
                name : name ,
                tel : tel
            }).then(() => {
                navigate(`/admin/employee/${uid}`);

            })
            
        }

    }
        
        return (
            <div>
                <div className=" bgc-g py-3">
                    <div className="font-50 text-center">
                        แก้ไขรายละเอียดพนักงาน
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 font-35 d-inline-block mx-5 text-end">
                            รหัสพนักงาน:
                        </div>
                        <div className="col-3 d-inline-block font-25 mt-2">
                            <input onChange={(e) => {
                                SetUcode(e.target.value)
                            }} type="text" value={ucode} />
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 font-35 d-inline-block mx-5 text-end">
                            สถานะ:
                        </div>
                        <div className="col-3 d-inline-block font-25 mt-2">
                            <input onChange={(e) => {
                                SetUstatus(e.target.value)
                            }} type="text" value={ustatus} />
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 font-35 d-inline-block mx-5 text-end">
                            ชื่อ :
                        </div>
                        <div className="col-3 d-inline-block font-25 mt-2">
                            <input onChange={(e) => {
                                SetName(e.target.value)
                            }} type="text" value={name} />
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 font-35 d-inline-block mx-5 text-end">
                            นามสกุล:
                        </div>
                        <div className="col-3 d-inline-block font-25 mt-2">
                            <input onChange={(e) => {
                                SetLname(e.target.value)
                            }} type="text" value={lname} />
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 font-35 d-inline-block mx-5 text-end">
                            เบอร์ติดต่อ:
                        </div>
                        <div className="col-3 d-inline-block font-25 mt-2">
                            <input onChange={(e) => {
                                SetTel(e.target.value)
                            }} type="text" value={tel} />
                        </div>
                        <div className="col-6">
                        </div>
                    </div>

                    <div className="sdsd">


                        <div onClick={EditC} className="link text-w" >
                            <div className="confirm-but text-center my-5 d-inline-block" type="button">
                                ยืนยัน
                            </div>
                        </div>


                    </div>
                </div>



            </div>



        );
        
}

export default Employeefix;