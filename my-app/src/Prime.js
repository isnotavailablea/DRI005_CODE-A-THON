import React,{useState,createContext, useEffect} from 'react'
import App from "./App.js"
export const AllContexts=createContext();
function Prime() {
     const [loggedin,setLoggedin]=useState({
       loggedin:false,
       id:"123"
     })
     const [st,setSt]=useState(
      "maharashtra"
     )
     const [pg,setPg]=useState(
      {
        Mainpg:true,Instatepg:false,Loginpg:false,Profilepg:false,Helpg:false
      }
     )
     const lgout=()=>{
        setLoggedin({
          loggedin:false,
          id:"193"
        })
     }
     const movePgs=(str,oth)=>{
        if(str==="log"){
          setPg({
            Mainpg:false,Instatepg:false,Loginpg:true,Profilepg:false,Helpg:false
          })
        }
        else if(str==="mnl"){
          setLoggedin({
            loggedin:true,
            id:oth
          })
          setPg({
            Mainpg:true,Instatepg:false,Loginpg:false,Profilepg:false,Helpg:false
          })
        }
        else if(str==="ins"){
            setSt(oth)
            setPg(
              {
                Mainpg:false,Instatepg:true,Loginpg:false,Profilepg:false,Helpg:false
              }
            )
        }
          else if(str==="pro"){
            setPg(
              {
                Mainpg:false,Instatepg:false,Loginpg:false,Profilepg:true,Helpg:false
              }
            )
          }
          else{
            setPg(
              {
                Mainpg:true,Instatepg:false,Loginpg:false,Profilepg:false,Helpg:false
              }
            )
          }
        }
  return (
    <AllContexts.Provider value={{loggedin,pg,movePgs,st,lgout}}>
        <App/>
        </AllContexts.Provider>
  )
}


export default Prime