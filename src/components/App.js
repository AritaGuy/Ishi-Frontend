import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import RoomDetails from "./RoomDetails";
import Rooms from "./Rooms";
import PaymentToken from "./PaymentToken"
import Confirm from "./Confirm"
import SignUp from "./Sign-up";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)
  return <div>
   <NavBar user={user} setUser={setUser}/>
  <Routes>
   <Route path="/" element = {<Login setUser={setUser}/>} />
   <Route path="/sign-up" element={<SignUp setUser={setUser}/>}/>
   <Route path="/home" element = {<Home user={user}/>}/>
   <Route path="/rooms/*" element = {<Rooms />} />
   <Route path="/roomdetails/:roomId" element = {<RoomDetails user={user}/>} />
   <Route path="/paymentoken" element = {<PaymentToken />} />
   <Route path="/congratulations" element = {<Confirm />} />
   
  </Routes>
  
  </div>;
}

export default App;
