import React,{useContext} from 'react'
import { Curcon } from './ContextLocal'
import Instatesnav from './Instatesnav'
import Dis from './Dis'
import Occ from'./Occ'
import Blogs from './Blogs'
import Vid from './Vid'
import Imgs from './Imgs'
import Locs from './Locs'
import Mps from './Mps'
function Instates() {
  const obj = useContext(Curcon)
  // console.log(obj)
  return (
    <>
        <Instatesnav/>
        {
          obj.option.dis && <Dis/>
        }
        {
          obj.option.occ && <Occ/>
        }
        {
          obj.option.blogs && <Blogs/>
        }
        {
          obj.option.vid && <Vid/>
        }
        {
          obj.option.imgs && <Imgs/>
        }
        {
          obj.option.locs && <Locs/>
        }
        {
          obj.option.mps && <Mps/>
        }
    </>
  )
}

export default Instates