import React, {useState, useEffect} from "react";
// import {Routes, Route, useLocation } from "react-router-dom";
import '../index.css';
// import RoomDetails from "./RoomDetails"
import RoomList from "./roomList"

function Rooms(){
  const [getRoom, setGetRoom]= useState([])


   const roomDB = "/rooms"

  useEffect(()=>{
   fetch(`${roomDB}`)
   .then((r)=>r.json())
   .then((rooms)=>{
    setGetRoom(rooms)
   })
  }, [])
  
  
 return (
  <div>
    <RoomList rooms={getRoom} />
    
     
  </div>
    
 )
}

export default Rooms