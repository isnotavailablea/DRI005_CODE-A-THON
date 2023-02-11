import React, { useState, createContext, useContext, useEffect } from "react";
import Instates from "./Instates";
import { AllContexts } from "../Prime";
import Axios from "axios";
// import { Cursor } from "mongoose";
// import {dists} from "../functions/instategetters"
export const Curcon = createContext();

function ContextLocal() {
  const obj = useContext(AllContexts);
  // const [rend,setRend]=useState("dis");
  const [oth_obj, setOth_obj] = useState({
    dist_list: [{ distName: "nothing from here" }],
    festlist: [{ festivalName: "nothing here" }],
    blogs: [{"Title":"blogs not found","content":"some content","userName":"Alok","rating":"7","festivalName":"some fest","StateName":"some state","distName":"the dist"}],
    images: ["images not found"],
    vids: ["no links"],
    locals: ["Become a local ambassador"],
    map_cor: ["currently feature not available"],
  });
  const [option, setOption] = useState({
    dis: true,
    occ: false,
    blogs: false,
    vid: false,
    imgs: false,
    locs: false,
    mps: false,
  });
  const [curState, setCurstate] = useState({
    Region: "SELECT",
    MainState: obj.st,
    occassion: "SELECT",
  });
  useEffect(() => {
    try {
      {
        Object.keys(option).map((key) => {
          // console.log(obj.option," ",obj.option[key])
          if (option[key] === true) {
            // console.log(key)
            document.getElementById(key).style.backgroundColor = "hotpink";
          } else {
            document.getElementById(key).style.backgroundColor = "#1a1463";
          }
        });
      }
      
    } catch {
      console.log("some error occured");
    }
    return () => {
        
    };
  }, [option]);
  useEffect(() => {
    try {
      Axios.post("http://localhost:8000/getdist", {
        StateName: curState.MainState.toUpperCase(),
      })
        .then((response) => {
          setOth_obj({ ...oth_obj, dist_list: response.data });
        })
        .catch((err) => {
          setOth_obj({
            ...oth_obj,
            dist_list: [{ distName: "nothing to see here" }],
          });
        });
      // console.log(oth_obj["dist_list"])
    } catch {
      console.log("err");
    }
    return () => {
      // console.log("rendered")
    };
  }, []);
  useEffect(() => {
    try {
        if(option["occ"]){
          Axios.post("http://localhost:8000/getfests", {
          StateName: curState.MainState.toUpperCase(),
          distName: curState.Region.toUpperCase(),
          os: false,
        }).then((response) => {
          console.log(response.data);
          setOth_obj({ ...oth_obj, festlist: response.data });
        });
        }
        else if(option["blogs"]){
          Axios.post("http://localhost:8000/getblogs",{
            StateName:curState.MainState.toUpperCase(),
            distName:curState.Region.toUpperCase(),
            festivalName:curState.occassion.toUpperCase()
        }).then((response)=>{
            // console.log(response.data)
            setOth_obj({...oth_obj,"blogs":response.data});
        })}
    } catch {
      console.log("hi");
    }
    return () => {console.log(option)};
  }, [curState]);
  const changeOption = (opt) => {
    // console.log("i was called ",opt)
    if (opt === "dis") {
      setOption({
        dis: true,
        occ: false,
        blogs: false,
        vid: false,
        imgs: false,
        locs: false,
        mps: false,
      });
    } else if (opt === "occ") {
      setOption({
        dis: false,
        occ: true,
        blogs: false,
        vid: false,
        imgs: false,
        locs: false,
        mps: false,
      });
    } else if (opt === "blogs") {
      setOption({
        dis: false,
        occ: false,
        blogs: true,
        vid: false,
        imgs: false,
        locs: false,
        mps: false,
      });
    } else if (opt === "vid") {
      setOption({
        dis: false,
        occ: false,
        blogs: false,
        vid: true,
        imgs: false,
        locs: false,
        mps: false,
      });
    } else if (opt === "imgs") {
      setOption({
        dis: false,
        occ: false,
        blogs: false,
        vid: false,
        imgs: true,
        locs: false,
        mps: false,
      });
    } else if (opt === "locs") {
      setOption({
        dis: false,
        occ: false,
        blogs: false,
        vid: false,
        imgs: false,
        locs: true,
        mps: false,
      });
    } else if (opt === "mps") {
      setOption({
        dis: false,
        occ: false,
        blogs: false,
        vid: false,
        imgs: false,
        locs: false,
        mps: true,
      });
    } else {
      setOption({
        dis: true,
        occ: false,
        blogs: false,
        vid: false,
        imgs: false,
        locs: false,
        mps: false,
      });
    }
  };
  const changeDistrict = (id) => {
    changeOption("occ");
    setCurstate({ ...curState, Region: id });
  };
  const changeFestive = (id) => {
    changeOption("blogs")
    setCurstate({ ...curState, occassion: id });
  };
  const doitwithoth=(who,what)=>{
      console.log(who," ",what);
      if(who=="images"){
        setOth_obj({...oth_obj,"images":what})
      }
      
  }
  return (
    <Curcon.Provider
      value={{
        curState,
        changeDistrict,
        changeFestive,
        option,
        changeOption,
        oth_obj,
        doitwithoth
      }}
    >
      <Instates />
    </Curcon.Provider>
  );
}
export default ContextLocal;
