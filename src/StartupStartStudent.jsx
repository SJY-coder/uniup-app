import React from "react";
import SideMenu from "./SideMenu";
import "./StartupStartStudent.css";
import StudentInfo from './StudentInfo.jsx'

function StartupStartStudent() {
  return (
    <div className="student-select-wrapper">
      <div className="gakubu-wrapper">
        <SideMenu />
        <h1>学部</h1>
        <div className="upper-triangle"> <h3>芸術工学部</h3> </div>
        <div className="bottom-triangle"> <h3>工学部</h3> </div>
        <div className="upper-triangle2"> <h3>法学部</h3> </div>
        <div className="bottom-triangle2"> <h3>理学部</h3> </div>
        <div className="upper-triangle3"> <h3>経済学部</h3> </div>
        <div className="bottom-triangle3"> <h3>その他</h3> </div>
      </div>
      <div className="gakka-wrapper">
        <div className="gakka-info">
   <h3>学科情報</h3>
        </div>
      </div>
      <div className="student-wrapper">
      <StudentInfo />
      <StudentInfo />
      </div>
    </div>
  );
}

export default StartupStartStudent;
