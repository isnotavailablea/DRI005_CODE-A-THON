import React, { useContext, useState } from 'react'
import { Curcon } from './ContextLocal'
import Axios  from 'axios'
import { AllContexts } from '../Prime'
import "./occ.css"
// import { join } from 'path'
function Occ() {
  const obj=useContext(Curcon)
  const chk=useContext(AllContexts)
  const [openoth,setOpenoth]=useState(true)
  const [fld,setFld]=useState("");
  const addit=()=>{
        if(!(chk.loggedin.loggedin)){
          alert("please login first");
          return
        }
        Axios.post('http://localhost:8000/addfest',{StateName:obj.curState.MainState.toUpperCase(),distName:obj.curState.Region.toUpperCase(),festivalName:fld.toUpperCase()}).then((response)=>{
           console.log(response.data);
          //  let have=obj.curState.Region;
          //  obj.changeDistrict("dummy");
          // obj.changeDistrict(have);
          setOpenoth(true)
        })
  }
  return (
    <>
      {openoth &&  <div className="occcontainer">
       {
        obj["oth_obj"]["festlist"].map((value,index)=>{
          return <div key={index} className="fest">
            <div className='festi'>
                {value["festivalName"].toUpperCase()}
            </div>
            <div className="state">{obj.curState.MainState}</div>
            <div className="city">{obj.curState.Region}</div>
            <div className="btn" onClick={()=>{obj.changeFestive(value["festivalName"]);}}>View more</div>
          </div>
       })
       }
       <div className="adderocc" onClick={()=>{setOpenoth(false)}}>+</div>
       </div>}
       {
        !openoth && <div className="addfest">
             {/* <div className="festName"></div> */}
             <div className="centme">
                <div className="name">Add festival name:</div>
                <div><input type="text" onChange={(e)=>{setFld(e.target.value);}}/></div>
                <div className="st">State</div>
                <div className="inp"><input type="text" placeholder={obj.curState.MainState} readOnly="True"/></div>
                <div>Region</div>
                <div className="inp"><input type="text" placeholder={obj.curState.Region} readOnly="True" /></div>
                <div className="bts"><button onClick={()=>{setOpenoth(true)}}>Cancel</button>
                <button onClick={addit}>Submit</button></div>
             </div>
        </div>
       }
    </>
  )
}

export default Occ