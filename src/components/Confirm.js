import React from 'react'
import "../index.css"
// import {useParams} from "react-router-dom"

function Confirm(){
    const myRoom = JSON.parse(sessionStorage.getItem("room"))
    // const roomDB = "/rooms"
    // const [room, setRoom]=useState({})
    // let params = useParams()
    // useEffect(()=> {
    //     fetch(`${roomDB}/${params.roomId}`)
    //    .then((r)=>r.json())
    //    .then((data)=>setRoom(data))}, [params.roomId])
      console.log(`This is ${myRoom.id}`)
    return(
    <div id='confirm'>
      <div className="alert alert-success" id="alert-message" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully booked <br></br> <strong>{myRoom.description}</strong></p>
      <br />
      <p className="mb-0">Your payment token is: <br></br> <strong>{myRoom.payment_token}</strong></p>
      </div>
    </div>
      
    ) 

}

export default Confirm