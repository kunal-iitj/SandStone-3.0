import React from "react";


export default function WebDevTeam(){
    return(
    <div className="webdevcontainer">
        <div className="box">
            <div className="imgBox">
                <img src={require('./images/Pranav.jpeg')}  alt="" />
            </div>
            <div className="content">
                <h2>Pranav Goswami<br></br>
                <span>Head B20CS016</span><br></br></h2>

            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src={require('./images/Kunal.jpeg')} alt="" />
            </div>
            <div className="content">
                <h2>Kunal Tiwari<br></br>
                <span>Assistant Head B21CI023</span></h2>
            </div>
        </div>


    </div>
        
    )
}