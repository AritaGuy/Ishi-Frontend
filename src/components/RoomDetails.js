import React, {useEffect, useState} from "react";
import "../index.css"
import {useParams, useNavigate, json} from "react-router-dom"

 
function RoomDetails({user}){
  const roomDB = "/rooms"
  const [room, setRoom]=useState({})
  let [payment_token, setpayment_token]=useState("")
  let params = useParams()
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  
  useEffect(()=> {
   fetch(`${roomDB}/${params.roomId}`)
  .then((r)=>r.json())
  .then((data)=>setRoom(data))}, [params.roomId])
  
  
  function handleSubmit(e){
    e.preventDefault()
    fetch(`${roomDB}/${params.roomId}`,{
     method :'PATCH',
     headers: {
      'Content-Type':'application/JSON'
     },
     body: JSON.stringify({payment_token}) 
    })
    .then((r) => {
 
      if (r.ok) {
        navigate('/congratulations')
        sessionStorage.setItem('room',JSON.stringify(room))
        console.log(room)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }
  // console.log(room.payment_token)
 return(
    <div id="selected-room">
    <img id="room-image" src={room?.image_url} alt="selected room"/>
    <p id="desc">{room?.description}</p>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Payment Token</label>
    <input 
    type="text" 
    class="form-control" 
    id="payment_token" 
    value={payment_token} 
    onChange={(e)=>setpayment_token(e.target.value)}/>
    </div>
     {/* <Link to={`/congratulations/${room.id}`}>  */}
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      {/* </Link>  */}
    </form>    
    </div>
  )
 }

 export default RoomDetails
