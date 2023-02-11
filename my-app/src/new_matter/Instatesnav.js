import React,{useContext} from 'react'
import { Curcon } from './ContextLocal'
import { AllContexts } from '../Prime';
import './instatesnav.css'
function Instatesnav() {
    const obj = useContext(Curcon);
    const obbj=useContext(AllContexts);
  return (
    <>
        <div className="instatenav">
            <div className="home"><button onClick={()=>{obbj.movePgs("dsdimd","dimdmd")}}>Home</button></div>
            <div className="path">{`${obj.curState.MainState}>${obj.curState.Region}>${obj.curState.occassion}`}</div>
        </div>
        <div className="opinstate">
          <div className="insi"><button id="dis" onClick={(event)=>{obj.changeOption(event.target.id);}}>Regions</button></div>
          <div className="insi"><button id="occ" onClick={(event)=>{obj.changeOption(event.target.id);}}>Festivals</button></div>
          <div className="insi"><button id="blogs" onClick={(event)=>{obj.changeOption(event.target.id);}}>Blogs</button></div>
          <div className="insi"><button id="imgs" onClick={(event)=>{obj.changeOption(event.target.id);}}>Images</button></div>
          <div className="insi"><button id="vid" onClick={(event)=>{obj.changeOption(event.target.id);}}>Videos</button></div>
          <div className="insi"><button id="locs" onClick={(event)=>{obj.changeOption(event.target.id);}}>Locals</button></div>
          <div className="insi"><button id="mps" onClick={(event)=>{obj.changeOption(event.target.id);}}>Maps</button></div>
        </div>

    </>
  )
}

export default Instatesnav