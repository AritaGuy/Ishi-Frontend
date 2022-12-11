import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"

function NavBar({user, setUser}){
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Ishi</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul id="links" className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
               <NavLink to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/rooms">Rooms</NavLink>
              </li>
            </ul>
            <span className="nav-item">
              {/* <h5>{user.username}</h5> */}
              <NavLink to='/'>
                <div onClick={handleLogoutClick}>
                Log out
                </div>
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    )
}

export default NavBar