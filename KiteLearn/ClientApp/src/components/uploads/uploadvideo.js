import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function Uploadvideo() {

    const record = {
        videoFile: null,
        videoSrc: null
    }
    const [values, setValues] = useState(record);
    const message = (res) => {
        return res
    }
    const progress = (res) => {
        return res
    }
    const onUploadVideo = (res) => {
        return res
    }
    const url = 'api/VideoUpload';

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let videoFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    videoFile,
                    videoSrc: x.target.result
                })
            }
            reader.readAsDataURL(videoFile)
        }

    }

    const Submit = () => {
        const formData = new FormData()
        formData.append('videoFile', values.videoFile)
        axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            console.log(res);
            onUploadVideo(res);
        })
    }

    return (
        <div>
            <div>
                <div className="col-md-3">
                    <input type="file" accept="video/*" className="form-control-file"
                        onChange={showPreview} id="video-uploader" />
                    <button type="button" className="btn btn-success" onClick={Submit}>Upload Video</button>
                </div>

            </div >
        </div>
    );

}

