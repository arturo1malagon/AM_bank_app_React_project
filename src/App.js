import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata'
import NavBar from './navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import UserContext from './context';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{action: 'Creating User', name:'abel',email:'abel@mit.edu',password:'secret',login: "no", balance:100,createDate:Date().toLocaleString()}]}}>
      <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/createaccount/" element={<CreateAccount></CreateAccount>} />
          <Route path="/login/" element={<Login></Login>} />
          <Route path="/deposit/" element={<Deposit></Deposit>} />
          <Route path="/withdraw/" element={<Withdraw></Withdraw>} />
          <Route path="/balance/" element={<Balance></Balance>} />
          <Route path="/alldata/" element={<AllData></AllData>} />
        </Routes>
        </div>
        </UserContext.Provider>      
    </HashRouter>
  ) 
}

export default App;
