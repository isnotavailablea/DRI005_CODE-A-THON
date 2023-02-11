import React, { useContext } from "react";
import "./Home_page.css";
import {AllContexts} from "./Prime"
function Home_page() {
  const obj = useContext(AllContexts)
  const arr = [
    "Assam",
    "arunachalpradesh",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujrat",
    "Haryana",
    "Jharkhand",
    "Kashmir",
    "kerala",
    "Ladakh",
    "madhyapradesh",
    "maharashtra",
    "Manipur",
    "Meghalaya",
    "Nagaland",
    "Odisha",
    "Punjab",
    "rajasthan",
    "TamilNadu",
    "Telangana",
    "UttarPradesh"
  ];
  return (
    <>
      <div className="entryPic">
        <img src={require("./entrypic.jpg")} alt="" />
      </div>
      <div className="allstates">
        {arr.map(function (name, index) {
          let the_path=`./States/${name}.jpg`;
          return (
            
            <div key={index} style={
              { backgroundImage: `url(${process.env.PUBLIC_URL+ the_path}` } 
             } 
             onClick={()=>{obj.movePgs("ins",`${name}`)}}
            >
              <div>
                <p>{name}</p>
              </div>
              {/* <img src={require(`./States/${name}.jpg`)} /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home_page;
