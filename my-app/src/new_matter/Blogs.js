import React, { useContext,useState } from 'react'
import { Curcon } from './ContextLocal'
import { AllContexts } from '../Prime';
import "./Blogs.css"
import Axios  from 'axios';
function Blogs() {
  const obj=useContext(Curcon);
  const oj=useContext(AllContexts)
  const [adder,setAdder]=useState(true)
  const [blogo,setBlogo]=useState({
      title:"some title",
      textarea:"the textarea"
  })
  const [readermode,setReadermode]=useState({
    show:false,
    msg:"this is temp msg"
  })
  const postblog=()=>{
      if(blogo.title.length===0){
          alert("please add a title")
           return 
      }
      if(blogo.textarea.length<400 || blogo.textarea.length>4000){
            console.log(blogo.textarea.length)
            alert("please add atleast 400 character and at most 4000")
            return
      }
      if(obj.curState.Region.toUpperCase()==="SELECT"){
          alert("select a region")
          return
      }
      if(obj.curState.occassion.toUpperCase()==="SELECT"){
          alert("select an occassion")
          return
      }
      Axios.post('http://localhost:8000/addblog',{
        userName:oj.loggedin.id,
        StateName:obj.curState.MainState.toUpperCase(),
        distName:obj.curState.Region.toUpperCase(),
        Title:blogo.title,
        content:blogo.textarea,
        festivalName:obj.curState.occassion,
        rating:9
      })
  }
  return<>
      {  
          adder && !readermode.show && obj["oth_obj"]["blogs"].map((value,index)=>{
            // console.log(value)
            return <div className="blogs">
              <div className="title">
                  <b>{value["Title"]}</b>
              </div>
             <div className="prev">
                  <div className="content">
                      {value["content"].substring(0,300)}
                  </div>
             </div>
             <div className="btns">
                  <button onClick={()=>{setReadermode({show:true,msg:value})}}>Read More</button>
                  <button>SEEAUTHOR</button>
             </div>
            </div>
        })
      }
      {adder && !readermode.show && <div className="add" onClick={()=>{
        if(!oj.loggedin.loggedin){
          alert("please login first")
          return 
        }
        else{
          setAdder(false)}
        }
        }>+</div>}
      {!adder && !readermode.show  && <div className='addblogs'>
            <div className="first">
                  <div className="username">User: {oj.loggedin.id}</div>
                  <div className="state">State :{obj.curState.MainState.toUpperCase()}</div>
                  <div className="dist">Region :{obj.curState.Region}</div>
                  <div className="occ">OCCASSION : {obj.curState.occassion}</div>
                  <button onClick={()=>setAdder(true)}>Cancel</button>
            </div>
            <div className="second">
                <div className="tit">Title</div>
                <input type="text" onChange={(event)=>{setBlogo({...blogo,title:event.target.value})}}/>
                <div className="blog">
                    Content:
                </div>
                <textarea name="somename" cols="40" rows="20" onChange={(event)=>{setBlogo({...blogo,textarea:event.target.value})}}></textarea>
                <button onClick={postblog}>Submit</button>
            </div>
        </div>}
        {readermode.show && <div className='reader-container'>
          {/* {console.log(readermode.msg)} */}
              <div className="details"><span>Author :{readermode.msg["userName"]}</span><span>occassion : {readermode.msg["festivalName"]}</span><span>Rating : {readermode.msg["rating"]}</span></div>
              <div className="maincont">{readermode.msg["content"]}</div>
              <div className="btnscon">
              <button>comment</button>
              <button onClick={()=>{setReadermode({show:false,msg:{"empty":"ys"}})}}>Go back</button>
              </div>
          </div>}
  </>
}

export default Blogs