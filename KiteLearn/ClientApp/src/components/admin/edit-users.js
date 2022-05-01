import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";


export default function Editusers(props) {
    const id = props.match.params.id;
    const profile = {
        id:null,
        ImgPath: '',
        imageFile: null,
        imageSrc: null,
        UserName: '',
        PhoneNumber: '',
        Email:'',
        Role: {},
       
     }
    const [values, setValues] = useState(profile);


    useEffect(() => {
        getId();
    }, [])
    const getId = () => {
        axios.get('api/Authentication/'+`${id}`).then(res =>
        {
            console.log(res.data.role);
            setValues({
                ...values,
                id: `${res.data.id}`,
                ImgPath: `${res.data.imgPath}`,
                UserName: `${res.data.userName}`,
                PhoneNumber: `${res.data.phoneNumber}`,
                Role: `${res.data.role}`,
                Email: `${res.data.email}`

            })
        })
    }
    
    const url = 'api/Authentication';
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const upload = 'api/VideoUpload';
    const imgPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }

    }
    const resetForm = () => {
        document.getElementById('image-uploader').value = null;
        setValues(profile)
    }
    const SubmitImg = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('imageFile', values.imageFile)
        axios.post(upload, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            console.log(res.data.dbPath);
            toast.success("You have successfully uploaded the image");
            setValues({
                ...values,
                ImgPath: `${res.data.dbPath}`
            })

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('id', values.id)
        formdata.append('UserName', values.UserName)
        formdata.append('ImgPath', values.ImgPath)
        formdata.append('PhoneNumber', values.PhoneNumber);
        formdata.append('Role', values.Role);
        formdata.append('Email', values.Email);
        axios.put(`${url}/${id}`, formdata).then((res) => {
            console.log(res);
            resetForm();
            
            toast.success("You have successfully submitted the form");
            setValues({
                ...values })
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div >
                <div className="col">
                    <div className="row">
                        <div class="col" style={{ marginRight: '50px' }}>
                            <div className="container-fluid">
                                <h3 className="text-dark mb-4">Profile</h3>
                                <ToastContainer/>
                                <div className="row mb-3">
                                    <div className="col-lg-4">
                                        <div className="card mb-3">
                                            <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={values.ImgPath} width={160} height={160} />
                                                <div className="col-md-8">
                                                    <input type="file" accept="image/*" className="form-control-file"
                                                        onChange={imgPreview} id="image-uploader" />
                                                    <button type="button" className="btn btn-success" onClick={SubmitImg}>Upload Image</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card shadow mb-4" />
                                    </div>
                                   
                                            
                                        <div className="row">
                                            <div className="col">
                                                <div className="card shadow mb-3">
                                                    <div className="card-header py-3">
                                                        <p className="text-primary m-0 fw-bold">User Settings</p>
                                                    </div>
                                                <div className="card-body">
                                                    <form onSubmit={handleSubmit} >
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="mb-3"><label className="form-label" ><strong>Username</strong></label><input className="form-control" type="text" value={values.UserName} onChange={handleInputChange} name="UserName" /></div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="mb-3"><label className="form-label" ><strong>Phone Number</strong></label><input className="form-control" type="text" value={values.PhoneNumber} onChange={handleInputChange} name="PhoneNumber"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="mb-3"><label className="form-label"><strong>Role</strong></label><input className="form-control" type="text" value={values.Role} onChange={handleInputChange} name="Role" /></div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="mb-3"><label className="form-label " ><strong>Email</strong></label><input className="form-control" type="text" value={values.Email} onChange={handleInputChange} name="Email"  /></div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                                                    </form>
                                                </div>
                                            </div>
             
                                            </div>
                                        </div></div>
                                </div>
                            </div>
                                    </div>
                                </div>
                          
                        </div>
                    </div>
           
          
   
    );
  }

