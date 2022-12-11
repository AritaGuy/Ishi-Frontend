import React, {useState, useEffect} from "react";
import '../index.css';
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