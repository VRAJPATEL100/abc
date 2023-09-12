import React,{useState} from 'react'
import axios from 'axios'
function Login() {
    const[username,setus]=useState()
    const[password,setpass]=useState()
    const loginhandler=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/login',{
                username,password
            })
            alert("login SUCCESSFUL")
            //setpass("")
            //setus("")
        }
        catch(err){
            console.error(err)
            alert("LOGIN FAILED")
        }
    }

  return (
    <><h1>LOGIN</h1>
    <form onSubmit={loginhandler}>
        USERNAME:<input type='text' value={username} onChange={(e)=>{setus(e.target.value)}}/>
        PASSWORD:<input type='password' value={password} onChange={(e)=>{setpass(e.target.value)}}/>
            <input type="submit" value="SUBMIT"/>
    </form>
    </>
  )
}

export default Login