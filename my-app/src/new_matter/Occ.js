import React, { useContext } from 'react'
import { Curcon } from './ContextLocal'

function Occ() {
  const obj=useContext(Curcon)
  return (
    <>
       {
        obj["oth_obj"]["festlist"].map((value,index)=>{
          return <div key={index} className={value["festivalName"]}>
            <div>
                {value["festivalName"].toUpperCase()}
            </div>
            <div className="state">{obj.curState.MainState}</div>
            <div className="city">{obj.curState.Region}</div>
          </div>
       })
       }
    </>
  )
}

export default Occ