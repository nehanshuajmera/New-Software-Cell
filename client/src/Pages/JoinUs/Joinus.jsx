import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Dropdown from './Dropdown';
import Field from './Field';
import './joinus.css'
import ResumeUpload from './ResumeUpload';
export default function Joinus() {
  const navigate=useNavigate()
  const [content, setcontent] = useState({"name":"","phoneno":"","email":"","field":"","branch":"","resumelink":"","enrollment":""});
  const FormSubmit=(e)=>{   
    axios.post(`/connectus/`, content)
    .then((res) => {
      alert("Message Sent Successfully");
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    });    
  }
  
  const [idx, setidx] = useState(0);
  return (
    <div>
      <h1 style={{textAlign:"center",fontWeight:"bold"}} ><i class="fa-solid fa-bug" style={{color:"red"}}></i> Join Us</h1>
    <div className='joinus'>
        {idx===0?<Field content={content} setcontent={setcontent} ques={"What is Your Name?"}  placeholder={"Enter Your Name"}  to_find={"name"} idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===1?<Field content={content} setcontent={setcontent} ques={"What is Your Contact No?"} placeholder={"Enter Your Phone No."} to_find={"phoneno"} idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===2?<Field content={content} setcontent={setcontent} ques={"What is Your Email?"} placeholder={"Enter Your Mail id"}  to_find={"email"}  idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===3?<Field content={content} setcontent={setcontent} ques={"What is Your Branch&Section?"} placeholder={"ex- B.Tech CSE (Section C)"}  to_find={"branch"}  idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===4?<Dropdown content={content} setcontent={setcontent} ques={"Which Field in which Your are intrested?"}  to_find={"field"}  placeholder={"Enter Your Desire field"} idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===5?<Field content={content} setcontent={setcontent} ques={"What is Your Enrollment Number?"}  to_find={"enrollment"}  placeholder={"EN20ab123456"} idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {idx===6?<Field content={content} setcontent={setcontent} ques={"Put Your Resume Link (Google Drive Link)"}  to_find={"resumelink"}  placeholder={"https://drive..................."} idx={idx} setidx={setidx} FormSubmit={FormSubmit} />:<></>}
        {/* {idx===7?<ResumeUpload/>:<></>} */}
    </div>
    </div>
  )
}
