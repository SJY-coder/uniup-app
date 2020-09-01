import React from 'react';
import SideMenu from './SideMenu'
import './StartupStart.css'
import {Link } from "react-router-dom";


function StartupStart() {
    return (
        <div className="select-page">
       <SideMenu/>
         <div className="select-wrapper">
         
             <h1 className="select-h1">Select</h1>
        
             <Link to="/start-up-start/student"><button className="select-btn">学生から探す</button></Link>
            <Link to="./start-up-start/timeline"><button className="select-btn">Timelineから探す</button></Link> 
                <button className="select-btn">c</button>
       
         </div>
        </div>
    )
}

export default StartupStart
