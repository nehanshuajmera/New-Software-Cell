import React, { useState } from 'react'
import Field from './Field';
import './joinus.css'
import ResumeUpload from './ResumeUpload';
export default function Joinus() {
  const [content, setcontent] = useState({"name":"","phoneno":"","email":"","field":""});
    const [idx, setidx] = useState(0);
  return (
    <div className='joinus'>
        {idx===0?<Field content={content} setcontent={setcontent} ques={"What is Your Name?"}  placeholder={"Enter Your Name"}  to_find={"name"} idx={idx} setidx={setidx}/>:<></>}
        {idx===1?<Field content={content} setcontent={setcontent} ques={"What is Your Contact No?"} placeholder={"Enter Your Phone No."} to_find={"phoneno"} idx={idx} setidx={setidx}/>:<></>}
        {idx===2?<Field content={content} setcontent={setcontent} ques={"What is Your Email?"} placeholder={"Enter Your Mail id"}  to_find={"email"}  idx={idx} setidx={setidx}/>:<></>}
        {idx===3?<Field content={content} setcontent={setcontent} ques={"Which Field in which Your are intrested?"}  to_find={"field"}  placeholder={"Enter Your Desire field"} idx={idx} setidx={setidx}/>:<></>}
        {idx===4?<ResumeUpload/>:<></>}
    </div>
  )
}
