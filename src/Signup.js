import React,{useState} from 'react'
import axios from 'axios'
function Signup() {
    const[username,setus]=useState()
    const[email,setemail]=useState()
    const[password,setpass]=useState()
    const handlesignup=async(e)=>{
        e.preventDefault()
        try{
        await axios.post("http://localhost:5000/api/signup",{username,email,password})
        alert("USER SIGNED UP SUCCESSFULLY")
        setus('')
        setemail('')
        setpass("")
        }
        catch(err){
            console.error(err)
            alert("AN ERROR OCCURED")
        }
    }
  return (
    <><h1>SIGNUP</h1>
    <form onSubmit={handlesignup}>
        USERNAME:<input type='text' value={username} onChange={(e)=>{setus(e.target.value)}}/>
        Email:<input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        PASSWORD:<input type='password' value={password} onChange={(e)=>{setpass(e.target.value)}}/>
        <input type="submit" value="SUBMIT"/>
    </form>
    </>
  )
}

export default Signup