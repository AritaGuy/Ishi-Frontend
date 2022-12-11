import React from "react";
import {NavLink} from "react-router-dom"
import "../index.css"

function Home({user}){
  console.log(user)
    return (
      <>
      
      <div id="home-body">
        <div id="welcome">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1>Hi, {user.username}</h1>
            <h1>Welcome to ishi</h1>
            <br />
            <NavLink to="/rooms">
              <button type="button" className="btn btn-dark start-50">
                View available rooms 
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      </>
    );
    
}

export default Home