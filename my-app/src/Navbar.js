import React, { useContext } from 'react';
import './Navbar.css';
import { AllContexts } from './Prime';
function Navbar(props) {
    const obj=useContext(AllContexts);
  return (
    <>
        <div className="nav-container">
            <div className="tools">
                {!obj.loggedin.loggedin &&<button onClick={()=>{obj.movePgs("log","disd")}}>Login</button>}
                {obj.loggedin.loggedin && <button onClick={obj.lgout}>Logout</button>}
            </div>
            <div className="logo" onClick={()=>{obj.movePgs("dism","dimd")}}>
                <img src={require("./haritage.png")} alt="logo not found" />
            </div>
            <div className="profile">
                <div className="clickable">
                    Profile
                </div>
            </div>
            {/* <div className="search">
                <input type="text" />
                <button>search</button>
            </div> */}
        </div>
    </>
  )
}

export default Navbar