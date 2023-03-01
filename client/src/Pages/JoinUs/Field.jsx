import React from 'react'
import './joinus.css'
export default function Field(props) {
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }
  
  const movenxt=()=>{
    if (props.content[s].length==0) {      
      alert("Please Fill the data");
    }
    else if(s==="phoneno"&&props.content[s].length!==10){
      alert("Please Input Valid Phone No.");
    }
    else if(s=="email"&&!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.content[s]))){
      alert("Please Input Valid Email id");
    }
    else if(s==="enrollment"&&props.content[s].length!==12){
      alert("Please Input Valid Enrollment No.");
    }
    else{
      props.setidx(props.idx+1)
    }
  }
  
  const submitit=()=>{
    if (props.content[s].length==0) {      
      alert("Please Fill the data");
    }
    else{
      alert("Thanks For Submiting Form");
    props.FormSubmit();
    }
  }
  return (
        <div className='field'>
            <div className='input-div subscribe'>
             <h1>{props.ques}</h1>
             <input type="text" onChange={handleChange} name={s} value={props.content[s]} class="subscribe-input" placeholder={props.placeholder}/>
             <div className='next-prev-div'>
             {props.idx!==0?<button className='next-prev-btn' onClick={()=>{props.setidx(props.idx-1)}}>Prev</button>:<></>}
             {props.idx!==6?<button className='next-prev-btn' onClick={()=>{movenxt()}}>Next</button>:<></>}
             {props.idx===6?<button className='next-prev-btn' onClick={()=>{submitit()}}>Submit</button>:<></>}
             </div>
            </div>

        </div>
  )
}
