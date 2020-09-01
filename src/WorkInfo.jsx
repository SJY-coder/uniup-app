import React from 'react'
import './WorkInfo.css'

function WorkInfo() {
    return (
        <div className="work-info-wrapper">
            <img src="https://www.arabianbusiness.com/public/images/2017/01/17/apple-logo-rainbow.jpg" alt="logo image"/>
            <p>You have to do ~~ thing for us and and and and and and and</p>
            <div className="row">
                <div className="gakubu-name col-4"><h3>工学部</h3></div>
                <div className="work-money col-4"><h3>10000円</h3></div>
                <div className="d-day col-4"><h3>あと9日</h3></div>
            </div>
        </div>
    )
}

export default WorkInfo
