import React, {useState, useEffect} from 'react'
import "../index.css"
import {useParams} from "react-router-dom"

function Confirm(){
    const roomDB = " http://localhost:5000/rooms"
    const [room, setRoom]=useState({})
    let params = useParams()
    useEffect(()=> {
        fetch(`${roomDB}/${params.roomId}`)
       .then((r)=>r.json())
       .then((data)=>setRoom(data))}, [])
    return(
    <div id='confirm'>
      <div className="alert alert-success" id="alert-message" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully booked <strong>{room.description}</strong></p>
      <br />
      <p className="mb-0">Your payment token is <strong>{room.paymenttoken}</strong></p>
      </div>
    </div>
      
    ) 

}

export default Confirm