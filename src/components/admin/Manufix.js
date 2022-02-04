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

function Manufix() {
    const { uid, mid } = useParams();
    var navigate = useNavigate();


    useEffect(() => {


        console.log(
            "This only happens ONCE.  But it happens AFTER the initial render."
        );
        try {

            Axios.get(`http://localhost:8888/getmenu/${mid}`, {

            }).then((result) => {
                // setRequest(result.data)  
                setType(result.data[0].Type_id)
                setName(result.data[0].Menu_nameTH)
                setPrice(result.data[0].Menu_price)
                // setRequest_id(result.data.request_id)

            })

        } catch (err) {
            console.error(err)
        }

    }, []);

    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState('')

    const [request_id, setRequest_id] = useState(0)
    const [request, setRequest] = useState([])

    const onSubmit = async (e) => {

        e.preventDefault()

        if (file == '') {

            Axios.post('http://localhost:8888/editmenu', {
                type: type,
                name: name,
                price: price,
                mid: mid

            }).then(() => {
                //   history.push("/");
                navigate(`/admin/manu/${uid}`);

                console.log('success')

            })


        } else {
            e.preventDefault()
            const formData = new FormData()
            formData.append('file', file)
            formData.append('mid', mid)
            formData.append('type', type)
            formData.append('price', price)
            formData.append('name', name)


            console.log(mid)

            try {
                const res = await Axios.post('http://localhost:8888/editmenuimg', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                navigate(`/admin/manu/${uid}`);
            } catch (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(err)
                }
            }
        }

    }

    const onDelete = () => {

        Axios.delete(`http://localhost:8888/deletemenu/${mid}`)
        .then((result) => {
           window.alert(result.data)
           
        })
        const timer = setTimeout(() => {
            navigate(`/admin/manu/${uid}`);
        }, 1000);
        //window.alert("return to main")
        
    }

    console.log(file)
    

    return (
        <div>
            <div className=" bgc-g py-3">
                <div className="font-50 text-center">
                    แก้ไขรายการอาหาร
                </div>

                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รูปประกอบ:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input onChange={(e) => {
                                    setFile(e.target.files[0])
                                }} type="file"  />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        รหัสหมวดหมู่:
                    </div>
                    {/* <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="text" onChange={(e) => {
                            setType(e.target.value)
                        }} value={type} />
                    </div> */}
                    <div className="col-3 d-inline-block font-25 mt-2">
                        {/* <input onChange={(e) => {
                            setType(e.target.value)
                        }} type="text" /> */}
                        <select
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                            className="" aria-label="Default select example">

                            <option defaultValue value={type} >select section</option>
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
                        <input type="text" onChange={(e) => {
                            setName(e.target.value)
                        }} value={name} />
                    </div>
                    <div className="col-7">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-2 font-35 d-inline-block mx-5 text-end">
                        ราคา:
                    </div>
                    <div className="col-3 d-inline-block font-25 mt-2">
                        <input type="text" onChange={(e) => {
                            setPrice(e.target.value)
                        }} value={price} />
                    </div>
                    <div className="col-7">
                    </div>
                </div>

                <div className="sdsd">


                    <div  className="link text-w d-inline" >
                        <div onClick={onSubmit}  className="confirm-but text-center my-5 d-inline-block" type="button">
                            ยืนยัน
                        </div>
                    </div>
                    <div className="link text-w d-inline" >
                        <div onClick={onDelete} className="deletfixtable-but text-center my-5 d-inline-block mx-3" type="button">
                            ลบออก
                        </div>
                    </div>

                </div>
            </div>



        </div>



    );
}

export default Manufix;