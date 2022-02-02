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

function Addmanu() {
    const { uid } = useParams();
    var navigate = useNavigate();

    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState('')

    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const onChange = (e) => {

        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)

    }


    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('type', type)
        formData.append('name', name)
        formData.append('price', price)


        try {

            const res = await Axios.post('http://localhost:8888/createmenu', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                }
            })

            const { fileName, filePath } = res.data
            setUploadedFile(fileName, filePath)
            window.alert('Create Success')

        } catch (err) {
            if (err) {
                window.alert(err.response.data.msg)
                console.log(err.response.data.msg)
            } else {
                console.log(err.response.data.msg)
            }
        }


        navigate(`/admin/manu/${uid}`);


    }
    console.log(type)
    console.log(name)
    console.log(price)
    console.log(file)
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
                        <input onChange={onChange} type="file" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสหมวดหมู่:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        {/* <input onChange={(e) => {
                            setType(e.target.value)
                        }} type="text" /> */}
                        <select
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                            className="" aria-label="Default select example">

                            <option defaultValue >select section</option>
                            <option value="001">เนื้อ</option>
                            <option value="002">ของทานเล่น</option>
                            <option value="003">ผักสด</option>
                            <option value="004">เครื่องดื่ม</option>
                            
                        </select>
                    </div>
                    <div className="col-7">
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ชื่อเมนู:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }} type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ราคา:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input onChange={(e) => {
                            setPrice(e.target.value)
                        }} type="text" />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div>
                    <div className="link text-w" onClick={onSubmit}>
                        <div className="confirm-but text-center my-5" type="button">ยืนยัน </div>
                    </div>
                </div>
            </div>



        </div>



    );
}

export default Addmanu;