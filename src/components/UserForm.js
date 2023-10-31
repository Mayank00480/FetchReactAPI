import React,{useState} from 'react'
import './UserForm.css'
const UserForm = () => {
const [title , setTitle] = useState("");
const [text,setText] = useState("");
const [date , setDate] = useState("");

function submitHandler(e) {
e.preventDefault();
console.log(title,text,date)
setTitle("")
setDate("")
setText("")
}
  return (
    <form onSubmit={submitHandler}>
      <label> Title </label>
      <br/>
      <input value = {title} type = "text" onChange={(e) =>{
        setTitle(e.target.value);
      }}/>
      <br/>
      <label>Opening Text</label>
      <br/>
      <textarea type = "text" value = {text} rows = "5"  onChange={(e) =>{
        setText(e.target.value);
      }}/>
      <br/>
      <label>Release Date</label>
      <br/>
      <input type = "date" value = {date} onChange={(e) =>{
        setDate(e.target.value);
      }}/>
      <button style = {{margin : '10px 0px'}}type = "submit" >Add New Movies</button>
    </form>
  )
}

export default UserForm
