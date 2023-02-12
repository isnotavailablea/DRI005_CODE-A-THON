import Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Curcon } from './ContextLocal'
import "./locs.css"
function Locs() {
  const obj=useContext(Curcon)
  const [lock,setLock]=useState("stay");
  const [info,setInfo]=useState([{"empty":"yes"}])
  const [adder,setAdder]=useState(false)
  const [postImage,setPostImage]=useState({
    StateName:obj.curState.MainState.toUpperCase(),
    distName:obj.curState.Region.toUpperCase(),
    ContactNumber:"9211644200",
    userName:"Om",
    PictureKitchen:"",
    PictureBedroom:"",
    PictureBathroom:"",
    Rent:(Math.random()*(30000-4000)+4000).toString(),

  })
  useEffect(() => {
    if(lock==="stay"){
        getstays();
    }
    return () => {
      
    }
  }, [lock])
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, PictureKitchen : base64 ,PictureBathroom:base64,PictureBedroom:base64})
  }
  const getstays=async ()=>{
    await Axios.post("http://localhost:8000/getlocalstays",{StateName:obj.curState.MainState.toUpperCase(),distName:obj.curState.Region.toUpperCase()}).then((response)=>{
      console.log(response.data)
      setInfo(response.data)
    })
  }
  const createPost = async () => {
    try{
      if(postImage["PictureKitchen"]===""){
        alert("field is required")
        return 
      }
      await Axios.post("http://localhost:8000/addlocalstay", postImage)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
        <div className="lock-nav">
              <button onClick={(e)=>{setLock("stay");}}>STAY</button>
              <button onClick={()=>setLock("eat")}>EAT</button>
              <button onClick={()=>setLock("tour")}>TOURGUIDE</button>
              <button onClick={()=>setLock("vol")}>LOCAL VOLUNTEERS</button>
              <button onClick={()=>setLock("pol")}>LOCAL TRAVEL ADVISORY</button>
        </div>
        {
          lock==="stay" && !adder && <div className='shows-loc-stay'>
              {
                info.map((value,index)=>{
                    return <div className="kya-return">
                        <div className="upperside">
                          <button>RENT : {value["Rent"]}</button>
                          <button>Author : {value["userName"]}</button>
                        </div>
                        <div className="imsss">
                              <img  width="400" src={value["PictureKitchen"]} alt="" />
                        </div>
                        <div className="endbtn">
                            <button>Rating : {value["Rating"]}</button>
                            <button>Contact: {value["ContactNumber"]}</button>
                            <button>Show Author</button>
                        </div>
                    </div>
                })
              }

          </div>
        }
        {lock==="eat" && !adder && <div>Eat</div>}
        {lock==="tour" && !adder && <div>Tour</div>}
        {lock==="vol" && !adder && <div>Local VOLUNTEERS</div>}
        {lock==="pol" && !adder &&<div>ADVISORY</div>}
        {!adder && <div className="adderm" onClick={()=>setAdder(true)}>+</div>}
        {
          adder && <div className='thefinalform'>
              <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
          <button onClick={createPost}>Post</button>
          <button onClick={()=>setAdder(false)}>Cancel</button>
          </div>
        }
    </>
  )
}

export default Locs

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