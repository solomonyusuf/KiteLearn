import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";





 
export default function Addvideo() {
   
    const FieldValues = {
        ImgName: '',
        VideoName:'',
        imageFile: null,
        imageSrc: null,
        videoFile: null,
        videoSrc: null,
        FileSize: '',
        Name: '',
        Actor: '',
        Genre: '',
        Duration: '',
        ReleaseYear: '',
        Description: '',
        Director: '',
        

    }
    const [Values, setValues] = useState(FieldValues);

    const upload = 'api/VideoUpload';
    const url = 'api/Videos/';
    const imgPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...Values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }

    }


    const videoPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let videoFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...Values,
                    videoFile,
                    videoSrc: x.target.result
                })
            }
            reader.readAsDataURL(videoFile)
        }

    }

    const SubmitImg = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('imageFile', Values.imageFile)
        axios.post(upload, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            console.log(res.data.dbPath);
            toast.success("You have successfully uploaded the image");
            setValues({
                ...Values,
                ImgName: `${res.data.dbPath}`
            })
           
        })
    }
  
    const SubmitVideo = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('videoFile', Values.videoFile)
        axios.post(upload, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            console.log(res.data);
            toast.success("You have successfully uploaded the Video");
            setValues({
                ...Values,
                VideoName: `${res.data.dbPath}`
            })
          
           
        })
    }



    const handleInputChange = e => {
        const { name, value } = e.target;
    setValues({
        ...Values,
         [name]: value 
    })}

    const resetForm = () => {
        setValues(FieldValues);
        document.getElementById('image-uploader').value = null;
        document.getElementById('video-uploader').value = null;
        
    }

   
  
    const handleSubmit = (e) => {
        e.preventDefault()
            const formdata = new FormData()
            formdata.append('Name', Values.Name)
            formdata.append('Actor', Values.Actor)
            formdata.append('Genre', Values.Genre)
            formdata.append('FileSize', Values.FileSize)
            formdata.append('Duration', Values.Duration)
            formdata.append('ReleaseYear', Values.ReleaseYear)
            formdata.append('Description', Values.Description)
            formdata.append('Director', Values.Director)
            formdata.append('VideoName', Values.VideoName) 
            formdata.append('ImgName', Values.ImgName)
        axios.post(url, formdata).then((res) => {
            resetForm();
            console.log(res); 
            toast.success("You have successfully submitted the form");
            setValues({
                ...Values,
               
            })
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
                                <h1 className="lead">New video</h1>
                                <ToastContainer/>
                                <form autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="card">

                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Upload Image</label>

                                                <div>
                                                    <div>  <img src={Values.imageSrc} height="400px" className="card-img-top" /></div>
                                                    <br />
                                                    <div className="col-md-3">
                                                        <input type="file" accept="image/*" className="form-control-file"
                                                            onChange={imgPreview} id="image-uploader" />
                                                        <button type="button" className="btn btn-success" onClick={SubmitImg}>Upload Image</button>
                                                    </div>

                                                </div >

                                            </div>

                                            <div className="form-group">
                                                <label>Upload Video</label>
                                                <div>
                                                    <div className="col-md-3">
                                                        <input type="file" accept="video/*" className="form-control-file"
                                                            onChange={videoPreview} id="video-uploader" />
                                                        <button type="button" className="btn btn-success" onClick={SubmitVideo}>Upload Video</button>
                                                    </div>

                                                </div><br />
                                                <div className="form-group">
                                                    <input type="text" value={Values.Name} onChange={handleInputChange} className="form-control" name="Name" placeholder="Enter Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.Actor} onChange={handleInputChange} className="form-control" name="Actor" placeholder="Enter Actor" />
                                                </div>
                                                <div className="form-group">
                                                    <select value={Values.Genre} onChange={handleInputChange} className="form-control" name="Genre" placeholder="choose Genre" >
                                                        <option className="select-item">---Choose from here---</option>
                                                        <option className="select-item">Catering</option>
                                                        <option className="select-item">Food</option>
                                                        <option className="select-item">Music</option>
                                                        <option className="select-item">Tech</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.FileSize} onChange={handleInputChange} className="form-control" name="FileSize" placeholder="Enter FileSize" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.Duration} onChange={handleInputChange} className="form-control" name="Duration" placeholder="Enter Duration" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.ReleaseYear} onChange={handleInputChange} className="form-control" name="ReleaseYear" placeholder="Enter ReleaseYear" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.Description} onChange={handleInputChange} className="form-control" name="Description" placeholder="Enter Description" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" value={Values.Director} onChange={handleInputChange} className="form-control" name="Director" placeholder="Enter Director" />
                                                </div>
                                               
                                                <div className="form-group text-center">
                                                    <button type="submit" className="btn btn-primary">submit</button>
                                                </div>
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

