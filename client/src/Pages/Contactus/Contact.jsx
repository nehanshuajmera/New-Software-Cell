import React, { useState } from 'react'
import "./contact.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Contact() {
  const navigate=useNavigate();
  const [FormData,setFormData]=useState({
    name:"",
    message:"",
    email:"",
    phoneno:"",
  });
  const handleChange=(e)=>{
    const { name, value } = e.target
    setFormData({
           ...FormData,
           [name]: value
       })
  }
  
  const handleSubmit=(e)=>{   
  // console.log(FormData);
  axios.post(`/contactus/`, FormData)
  .then((res) => {
    // console.log(res);
    alert("Message Sent Successfully");
    navigate("/")
  })
  .catch((err) => {
    console.log(err);
  });
  
}

  return (
    <div>
      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +91 7000253811,
          +91 8269991528</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input type="text"
                className="app-form-control"
                placeholder="NAME"
                defaultValue=""
                value={FormData.name} onChange={handleChange} name="name"
              />
            </div>
            <div className="app-form-group">
              <input type="email" className="app-form-control" placeholder="EMAIL" value={FormData.email} onChange={handleChange} name="email" />
            </div>
            <div className="app-form-group">
              <input type="tel" className="app-form-control" placeholder="CONTACT NO" value={FormData.phoneno} onChange={handleChange} name="phoneno" />
            </div>
            <div className="app-form-group message">
              <input type="text" className="app-form-control" placeholder="MESSAGE" value={FormData.message} onChange={handleChange} name="message" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" onClick={()=>{navigate("/")}}>CANCEL</button>
              <button className="app-form-button" onClick={()=>{handleSubmit()}}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}