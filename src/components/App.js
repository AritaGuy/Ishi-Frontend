import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import RoomDetails from "./RoomDetails";
import Rooms from "./Rooms";
import PaymentToken from "./PaymentToken"
import Confirm from "./Confirm"

function App() {
  const {currentUser, setCurrentUser} = useState('')
  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user=>setCurrentUser(user))
      }
    })
  }, [])

  if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  return <div>
  <NavBar /> 
  <Routes>
   <Route path="/" element = {<Home />} />
   <Route path="/login" element = {<Login />} />
   <Route path="/rooms/*" element = {<Rooms />} />
   <Route path="/roomdetails/:roomId" element = {<RoomDetails />} />
   <Route path="/paymentoken" element = {<PaymentToken />} />
   <Route path="/congratulations/:roomId" element = {<Confirm />} />
  </Routes>
  
  </div>;
}

export default App;
