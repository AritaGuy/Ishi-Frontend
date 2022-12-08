import React from "react";
import {  Link, Routes, Route } from "react-router-dom";
import "../index.css";
// import RoomDetails from "./RoomDetails";

function RoomList({rooms}){
  //  let path = useLocation()
    // let idArray = rooms.map((a)=>a.id)
    // function handleClick(hostel){
    //   const render = <Link to={`${path}/${hostel.id}`}>specific room</Link>
    //   console.log(path)
    //   return(render)
    // }
    console.log(rooms)
    return(<div id="parent">
    <div id ="class" className="position-absolute top-0 start-50 translate-middle"><h1>Looking for rooms??</h1></div>
    <div id="room-container">
      {rooms.map((hostel)=>{
        return <div id="card" className = "grow" key={hostel.id}>
          
        <img src={hostel.image} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{hostel.name}</h5>
        <p className="card-text">{hostel.description}</p>
        <Link to={`/roomdetails/${hostel.id}`}><button type="button" class="btn btn-primary"
        onClick={()=>(
        <Routes>
        <Route path={`roomdetails/1`} />
        </Routes>
        )}
        >View room</button></Link>
        </div>
        </div>
      }
      )}  
    </div>
    </div>
    )
}

export default RoomList