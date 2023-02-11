import React, {  useState ,useContext} from 'react'
import Axios from "axios"
import { AllContexts } from './Prime'
function Login() {
  const [pg,setPg]=useState(true);
  const [usname,setUsname]=useState("a");
  const [pass,setPass]=useState("0");
  const obj=useContext(AllContexts);
  const namechange=(event)=>{
     setUsname(event.target.value)
  }
  const passchange=(event)=>{
    setPass(event.target.value);
  }
  const trylog=()=>{
    Axios.post('http://localhost:8000/login',{userName:usname,password:pass}).then((response)=>{
        if(response.data==="error"){
          alert("Login failed please check your login");
        }
        else{
           obj.movePgs("mnl",response.data);
        }
    })
  
  }
  const sig=()=>{
    Axios.post("http://localhost:8000/signup",{userName:usname,password:pass}).then((response)=>{
      if(response.data==="error"){
         alert("User already exists");
      }
      else{
        alert("You may now login")
        setPg(true)
      }
    })
  }
  return (
    <>
    {pg && (<div className='Login-box'>
    <div className="fill-user">
      username
    </div>
    <input type="text" className='sensitive login-user' onChange={namechange}/>
    <div className="fill-pass">
      password
    </div>
    <input type="password" className='sensitive login-pass' onChange={passchange} />
    <div className="placebtn"><button onClick={
      trylog
    }>Login</button></div>
    <div className="redirect-login">
      <button onClick={()=>setPg(false)}>Signup</button>
    </div>
</div>)}
  {
    !pg && <div className="signup-box">
      <div className="username">
          username
      </div>
      <input type="text" onChange={namechange}/>
      <div className="passwor">
          password
      </div>
      <input type="password" onChange={passchange}/>
      <div className="submit-signup"><button onClick={sig}>Sign up</button></div>
      <div className="redirect-login" >
        <button onClick={()=>setPg(true)}>Login</button>
      </div>
    </div>
    
  }
  <button onClick={()=>{obj.movePgs("idmso","dimdi")}}>Go home</button>
  </>
  )
}

export default Login