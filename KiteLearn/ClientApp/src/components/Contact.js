import React, { useState, } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";


export default function Contact() {

    const FieldValues = {
        FullName: '',
        PhoneNumber: '',
        Email: '',
        Message: '',

    }
    const [Values, setValues] = useState(FieldValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...Values,
            [name]: value
        })
    }
  


const handleSubmit= (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('FullName', Values.FullName)
    formData.append('Email', Values.Email)
    formData.append('PhoneNumber', Values.PhoneNumber)
    formData.append('Message', Values.Message)
     axios.post('api/Contacts',formData ).then((res) => {
         resetForm();
         toast.success("You have successfully submitted the form");
            console.log(res);
           
        })
  }
    const resetForm = () => {
        setValues(FieldValues)
    }
 
    return (
        <div className="col-lg-12" align="center">
            <h2 className="text-center" style={{ color: 'var(--bs-pink)' }}>Contact us</h2>
            <ToastContainer/>
          <div align="center" className="card">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" name="FullName" value={Values.FullName} placeholder='Enter Full Name' onChange={handleInputChange} />
                </div>
                    <div className="form-group">
                        <input className="form-control" name="Email" value={Values.Email} placeholder='Enter your Email' onChange={handleInputChange}  />
                </div>
                <div className="form-group">
                       
                        <input className="form-control" name="PhoneNumber" value={Values.PhoneNumber} placeholder="Enter phone number" onChange={handleInputChange} />
                </div>
                <div className="form-group">

                            <textarea className="form-control" name="Message" value={Values.Message} rows={14} placeholder="Enter your message here" onChange={handleInputChange} />
                    </div>                
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
                    </form>
                </div>
            </div>
            <div>
                
                <section className="map-clean">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Location </h2>
                            <p className="text-center">Our location matters to the heart of every life changing event.</p>
                        </div>
                    </div><iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029522.6936700537!2d2.415654632493627!3d6.53285941055963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2bae227550d%3A0xe771ad7f1bbe89d6!2sLagos!5e0!3m2!1sen!2sng!4v1644289216381!5m2!1sen!2sng" width="100%" height={450} frameBorder={0} />
                </section>
            </div>
            <br/><br/>
      </div>
    );
  }

