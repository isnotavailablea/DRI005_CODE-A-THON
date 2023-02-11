import React, { useContext, useEffect,useState } from 'react'
import { Curcon } from './ContextLocal'
import Axios from "axios"
import "./imgs.css"

function Imgs(props) {
  const obj=useContext(Curcon);
  const [adder,setAdder]=useState(false)
  const [postImage,setPostImage]=useState({
        theImg:"",
        StateName:obj.curState.MainState.toUpperCase(),
        distName:obj.curState.Region.toUpperCase(),
        festivalName:obj.curState.occassion.toUpperCase()
  })
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, theImg : base64 })
  }
  const createPost = async (newImage) => {
    try{
      if(newImage["theImg"]===""){
        alert("field is required")
        return 
      }
      await Axios.post("http://localhost:8000/addfestimg", newImage)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    console.log(obj.curState)
      try{
        Axios.post("http://localhost:8000/getfestimgs",{StateName:obj.curState.MainState.toUpperCase(),distName:obj.curState.Region.toUpperCase(),festivalName:obj.curState.occassion.toUpperCase()}).then((response)=>{
            // console.log("here")
            // console.log("the response for image ",response.data)
            obj.doitwithoth("images",response.data)
       }).catch(err=>console.log(err));
      }
      catch{
        console.log("image load error")
      }
      
     
    return () => {
    }
  }, [obj.curState.Region,obj.curState.festivalName])
  
  return (
   <>
      {
          !adder && obj["oth_obj"]["images"].map((value,index)=>{
            return <img width="500" src={value["theImg"]} alt="not found"/>
          })
          // <button></button>
      }
      {!adder && <div className='addbtnimg' onClick={()=>setAdder(true)}>+</div>}
      {
        adder && <div className="imgadd">
         <div className="inpimg"> <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         /></div>
         <div className="btnsimg"><button onClick={()=>{createPost(postImage)}}>Post</button>
         <button onClick={()=>{setAdder(false)}}>Cancel</button></div>
        </div>
      }
   </>
  )
}

export default Imgs
function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}