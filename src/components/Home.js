import React from "react";
import {NavLink} from "react-router-dom"
import "../index.css"

function Home(){
    return (
      <div id="home-body">
        <div id="welcome">
          <div className="position-relative top-50 start-50 translate-middle">
            <h1>Welcome to ishi</h1>
            <br />
            <NavLink to="/login">
              <button type="button" className="btn btn-dark start-50">
                Sign in 
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
    
}

export default Home