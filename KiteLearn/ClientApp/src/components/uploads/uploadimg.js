import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function Uploadimg() {
    const record = {
        imageFile:null,
        imageSrc:null
    }
    const [values, setValues] = useState(record);
    const message = (res) => {
        return res
    }
    const progress = (res) => {
        return res
    }
    const onUploadFinished = (res)=>{
        return res
    }
    const url = 'api/VideoUpload';
   
    const showPreview = e => {
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

    const Submit = () => {
            const formData = new FormData()
            formData.append('imageFile', values.imageFile)
        axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            console.log(res);
            onUploadFinished(res);
            
        })
    }

    return (
      <div>
            <div>
              <div>  <img src={values.imageSrc} height="400px"  className="card-img-top" /></div>
                <div className="col-md-3">
                    <input type="file" accept="image/*" className="form-control-file"
                        onChange={showPreview} id="image-uploader" />
                    <button type="button" className="btn btn-success" onClick={Submit}>Upload Image</button>
                       </div>
                
  </div >
      </div>
    );
 
}
