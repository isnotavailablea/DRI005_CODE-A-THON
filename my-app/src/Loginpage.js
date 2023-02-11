import React from 'react'
import "./loginpage.css"
import Login from"./Login"
// import Signup from "./Signup"
// export const logcontext=useContext
function Loginpage() {
  // const [action,setAction]=useState(true);
  return (
     <>
       <div className="log-container">
        <div className="bakchodi">
            <div className="objective">
               Welcome or Welcome back to our website
                as you may or may not be aware you can 
                do alot all cool things here we are here 
                for you whenever you need our assistance
                let us know what you know and we will Help
                every one else who wants to hear about your 
                heritage get your message~{'\n'}Regards
                </div>
        </div>
        <div className="log-here">
               
                    <Login/>
                
        </div>
       </div>
     </>
  )
}

export default Loginpage