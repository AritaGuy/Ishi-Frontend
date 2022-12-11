import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import "../index.css"



function Login({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

    return (
      <div className="login-form">
        <form className="login-form" onSubmit={handleSubmit}>
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example1">Username</label>
        <input type="text" id="form2Example1" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>
{/*     
      <!-- Password input --> */}
      <div className="form-outline mb-4">
      <label className="form-label" for="form2Example2">Password</label>
        <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
          <NavLink to= "/sign-up">
          <a href="#!">Sign Up</a>
          </NavLink>
        </div>
      </div>
    
      {/* <!-- Submit button --> */}
      
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button> 
        
      
      
    
      
    </form>
      </div>
      
    )
}

export default Login