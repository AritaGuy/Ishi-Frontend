import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"

function Login(){
    return (
      <div className="login-form">
        <form className="login-form">
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example1">Email address</label>
        <input type="email" id="form2Example1" className="form-control" />
      </div>
{/*     
      <!-- Password input --> */}
      <div className="form-outline mb-4">
      <label className="form-label" for="form2Example2">Password</label>
        <input type="password" id="form2Example2" className="form-control" />
      </div>
    
      {/* <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>
    
        <div className="col">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>
    
      {/* <!-- Submit button --> */}
      <NavLink to="/rooms">
        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
      </NavLink>
      
    
      
    </form>
      </div>
      
    )
}

export default Login