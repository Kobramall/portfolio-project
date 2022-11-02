import React from "react";
import videoL from "../assets/Landscape.mov"
import { useNavigate } from "react-router-dom";

const Main= () =>{
   const navigate = useNavigate()
   
    return(
        <div className="overlay">
        <div className="mainPage">
             <video src={videoL} autoPlay loop muted/>
             <div className="content">
                <h1>Welome to My Portfolio</h1>
                <button onClick={navigate('portfolio')}>Check it out!</button>
             </div>
        </div>
        </div>
    );
}

export default Main