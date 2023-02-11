import React,{useState,createContext, useContext,useEffect} from 'react'
import Instates from './Instates';
import { AllContexts } from '../Prime';
import Axios from 'axios'
// import {dists} from "../functions/instategetters"
export const Curcon=createContext();

function ContextLocal() {
    const obj=useContext(AllContexts);
    const [rend,setRend]=useState("dis");
    const [oth_obj,setOth_obj]=useState(
        {
            dist_list:[{"distName":"nothing from here"}],festlist:[{"festivalName":"nothing here"}],blogs:["blogs not found"],images:["images not found"],vids:["no links"]
            ,locals:["Become a local ambassador"],map_cor:["currently feature not available"]
        }
    )
    const [option, setOption] = useState(
        {
            dis:true,
            occ:false,
            blogs:false,
            vid:false,
            imgs:false,
            locs:false,
            mps:false
        }
      )
    const [curState, setCurstate] = useState({
        Region:"SELECT",
        MainState:obj.st,
        occassion:"SELECT"
    })
    useEffect(() => {
        try{
            {Object.keys(option).map(key=>{
                // console.log(obj.option," ",obj.option[key])
                if(option[key]===true){
                  // console.log(key)
                  document.getElementById(key).style.backgroundColor="#3a3153";
                }
                else{
                  document.getElementById(key).style.backgroundColor="#902bf5";
                }
              })}
        }
        catch{
            console.log("err")
        }
      return()=>{
        // console.log('clicked');
      }
    }, [option])
    useEffect(() => {
       try{
        
        Axios.post("http://localhost:8000/getdist",{StateName:curState.MainState.toUpperCase()}).then((response)=>{
                 setOth_obj({...oth_obj,dist_list:response.data})
           }).catch((err)=>{
                setOth_obj({...oth_obj,dist_list:[{"distName":"nothing to see here"}]})
           })
           // console.log(oth_obj["dist_list"])
        }
       catch{
         console.log("err")
       }
      return () => {
        // console.log("rendered")
      }
    }, [])
    useEffect(()=>{
        try{
            if(rend==="occ"){
            Axios.post('http://localhost:8000/getfests',{StateName:curState.MainState.toUpperCase(),distName:curState.Region.toUpperCase(),os:false}).then((response)=>{
                console.log(response.data)
                setOth_obj(
                    {...oth_obj,festlist:response.data}
                )
            })
        }
    }
    catch{
        console.log("hi")
    }
        return ()=>{
            //call back funciton
        }
    },[rend])
    const changeDistrict=(id)=>{
        setCurstate({...curState,Region:id});
    }
    const changeFestive=(id)=>{
        setCurstate({...curState,occassion:id});
    }
    const changeOption=(opt)=>{
        if(opt==="dis"){
            setOption(
                {
                    dis:true,
                    occ:false,
                    blogs:false,
                    vid:false,
                    imgs:false,
                    locs:false,
                    mps:false
                }
            )   
        }
        else if(opt==="occ"){
            setOption(
                {
                    dis:false,
                    occ:true,
                    blogs:false,
                    vid:false,
                    imgs:false,
                    locs:false,
                    mps:false
                }
            )  
        }
        else if(opt==="blogs"){
            setOption(
                {
                    dis:false,
                    occ:false,
                    blogs:true,
                    vid:false,
                    imgs:false,
                    locs:false,
                    mps:false
                }
            )  
        }
        else if(opt==="vid"){
            setOption(
                {
                    dis:false,
                    occ:false,
                    blogs:false,
                    vid:true,
                    imgs:false,
                    locs:false,
                    mps:false
                }
            )  
        }
        else if(opt==="imgs"){
            setOption(
                {
                    dis:false,
                    occ:false,
                    blogs:false,
                    vid:false,
                    imgs:true,
                    locs:false,
                    mps:false
                }
            )  
        }
        else if(opt==="locs"){
            setOption(
                {
                    dis:false,
                    occ:false,
                    blogs:false,
                    vid:false,
                    imgs:false,
                    locs:true,
                    mps:false
                }
            )  
        }
        else if(opt==="mps"){
            setOption(
                {
                    dis:false,
                    occ:false,
                    blogs:false,
                    vid:false,
                    imgs:false,
                    locs:false,
                    mps:true
                }
            )  
        }
        else{
            setOption(
                {
                    dis:true,
                    occ:false,
                    blogs:false,
                    vid:false,
                    imgs:false,
                    locs:false,
                    mps:false
                }
            )  
        }
    }
    const changeRend=(opt)=>{
        setRend(opt)
    }
  return (
        <Curcon.Provider value={{curState,changeDistrict,changeFestive,option,changeOption,oth_obj,changeRend}}>
            <Instates/>
        </Curcon.Provider> 
  )
}
export default ContextLocal
