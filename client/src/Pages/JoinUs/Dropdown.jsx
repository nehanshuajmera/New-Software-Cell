import React from 'react'
import './joinus.css'
export default function Dropdown(props) {
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }
  return (
        <div className='field'>
            <div className='input-div subscribe'>
             <h1>{props.ques}</h1>
                <select type="text" onChange={handleChange} name={s} value={props.content[s]} class="subscribe-input" placeholder={props.placeholder}>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Android Devlopment">Android Devlopment</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Content Writer">Content Writer</option>
                </select>
             {/* <input type="text" onChange={handleChange} name={s} value={props.content[s]} class="subscribe-input" placeholder={props.placeholder}/> */}
             <div className='next-prev-div'>
             {props.idx!==0?<button className='next-prev-btn' onClick={()=>{props.setidx(props.idx-1)}}>Prev</button>:<></>}
             <button className='next-prev-btn' onClick={()=>{props.setidx(props.idx+1)}}>Next</button>
             </div>
            </div>
        </div>
  )
}
