import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";


export default function Editnews(props) {
    const id = props.match.params.id;
    const news = {
        id:null,
        ImgPath: '',
        imageFile: null,
        imageSrc:null,
        Title: '',
        Body: '',
       
        
     }
    const [values, setValues] = useState(news);


    useEffect(() => {
        getId();
    }, [])
    const getId = () => {
        axios.get('api/News/'+`${id}`).then(res =>
        {
            console.log(res);
            setValues({
                ...values,
                id: `${res.data.id}`,
                ImgPath:  `${res.data.imgPath}`,
                Title:  `${res.data.title}`,
                Body:  `${res.data.body}`,
               

            })
        })
    }
    
    const url = 'api/News';
    
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
        setValues(news)
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
        formdata.append('Title', values.Title)
        formdata.append('ImgPath', values.ImgPath)
        formdata.append('Body', values.Body)
      
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
                            <h1 className="lead">Edit News</h1>
                            <ToastContainer/>
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <div className="card">

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Upload Image</label>

                                            <div>
                                                <div>  <img src={values.imageSrc} height="400px" className="card-img-top" /></div>
                                                <br />
                                                <div className="col-md-3">
                                                    <input type="file" accept="image/*" className="form-control-file"
                                                        onChange={imgPreview} id="image-uploader" />
                                                    <button type="button" className="btn btn-success" onClick={SubmitImg}>Upload Image</button>
                                                </div>

                                            </div >

                                        </div>

                                        <br />
                                        <div className="form-group">
                                            <input type="text" value={values.Title} onChange={handleInputChange} className="form-control" name="Title" placeholder="Enter Title" />
                                        </div>
                                        <div className="form-group">

                                            <textarea className="form-control" name="Body" value={values.Body} rows={14} placeholder="Enter your message here" onChange={handleInputChange} />
                                        </div>

                                      

                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary">submit</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
           
      </div>
   
    );
  }

