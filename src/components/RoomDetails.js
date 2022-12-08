import React, {useEffect, useState} from "react";
import "../index.css"
import {useParams, Link, Routes, Route} from "react-router-dom"

 
function RoomDetails(){
  const roomDB = " http://localhost:5000/rooms"
  const [room, setRoom]=useState({})
  let [input, setInput]=useState({})
  let params = useParams()
  console.log(params)
  useEffect(()=> {
   fetch(`${roomDB}/${params.roomId}`)
  .then((r)=>r.json())
  .then((data)=>setRoom(data))}, [])
  
  console.log(room)
  function handleChange(e){
    setInput({"paymenttoken": e.target.value})
    console.log(input)
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch(`${roomDB}/${params.roomId}`,{
     method :'PATCH',
     headers: {
      'Content-Type':'application/JSON'
     },
     body : JSON.stringify(input) 
    })
    alert(`Congratulations you have successfully booked ${room.description}`)
    
  }
 return(
    <div id="selected-room">
    <img id="room-image" src={room.image} alt="selected room"/>
    <p id="desc">{room.description}</p>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payment Token</label>
    <input type="text" class="form-control" id="InputPassword1" onChange={handleChange}/>
    </div>
     <Link to={`/congratulations/${room.id}`}><button type="submit" class="btn btn-primary" onClick={
      ()=>{
        <Routes>
        <Route path={`/congratulations`} />
        </Routes>
      }
     }>Submit</button></Link>
    </form>    
    </div>
  )
 }

 export default RoomDetails
