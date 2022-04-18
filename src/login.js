import React from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import UserContext from './context';

function Login(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [GreetingMessage, setGreetingMessage] = useState('Please Create Account');
  const ctx = useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function userExists(email) {
    return ctx.users.find((item) => {
      return item.email === email;
    })
  }
  
  function UpdateLogin(email) {
    const objIndex = ctx.users.findIndex(item => item.email === email );
    ctx.users[objIndex].login = 'yes';
    console.log(ctx.users[objIndex]);
  }


  function handleCreate(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    setShow(false);

    if (userExists(email) !== undefined) {
      setGreetingMessage('Welcome Back!');
      UpdateLogin(email);
      ctx.users.push({action: 'Login',email: email,createDate:Date().toLocaleString()});
    } else {
      setGreetingMessage('Please Create Account'); 
    }
  }    


  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }


  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
              </>
            ):(
              <>
              <h5>{GreetingMessage}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Return</button>
              </>
            )}
    />
  )
}

export default Login;