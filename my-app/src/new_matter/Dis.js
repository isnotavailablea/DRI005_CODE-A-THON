import React,{useContext} from 'react'
import "./Dis.css"
import { Curcon } from './ContextLocal'
function Dis() {
  const obj=useContext(Curcon);
 
  return <>
      <div className="incontainer dis">
      {
        obj["oth_obj"]["dist_list"].map((value,index)=>{
          return <div key={index} className={value["distName"]}>
            <div>
                {value["distName"].toUpperCase()}
            </div>
            <button onClick={()=>{obj.changeDistrict(value["distName"]);obj.changeRend("occ");obj.changeOption("occ")}}>Select</button>
          </div>
       })
      }
      {/* <button>+</button> */}
      </div>
  </>
}

export default Dis