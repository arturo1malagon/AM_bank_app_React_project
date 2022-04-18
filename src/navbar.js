/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import {navbar} from 'react-bootstrap';

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">
      <img src={require ('./pngwing.png')} alt="" width="30" height="24" class="d-inline-block align-text-top"/>BadBank
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" tile="Tooltip text" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;