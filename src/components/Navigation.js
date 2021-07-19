import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">HelloBuild</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                    <NavLink to='/' >Home</NavLink>
                </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavLink to='/signUp'>Sign Up</NavLink>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/Login'>Login</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>




    );
}

export { Navigation };
