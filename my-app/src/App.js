import React, {useContext } from 'react';
import './App.css';
import Home_page from './Home_page';
import Navbar from './Navbar';
import ContextLocal from './new_matter/ContextLocal';
import { AllContexts } from './Prime'
import Footer from "./Footer"
import Helpbtn from './Helpbtn';
import Loginpage from './Loginpage';
function App() {
  const obj=useContext(AllContexts);

  return (
    <>
     {obj.pg.Mainpg && <Navbar login={false}/>}
     {!obj.pg.Instatepg && !obj.Helppg && <Helpbtn/>}
     {obj.pg.Loginpg && <Loginpage/>}
     {obj.pg.Instatepg && <ContextLocal/>}
      {obj.pg.Mainpg&& <Home_page/>}
      {obj.pg.Mainpg && <Footer/>}
     </>
  );
}

export default App

