import React from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import UserContext from './context';

function Balance(){
  const [show, setShow]         = useState(true);
  const [status]     = useState('');
  const [message2, setMessage2] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [objIndex2] = useState('');
  const [balance2, setBalance2] = useState('');
  const ctx = useContext(UserContext); 

  function handleCreate(){
    setShow(false);
    
    const objIndex2 = ctx.users.findIndex(item => item.login === 'yes');

    if (objIndex2 > -1) {
      setMessage2('Your balance is $');
      setBalance2(JSON.stringify(ctx.users[Number(objIndex2)].balance));
      console.log(ctx.users[Number(objIndex2)]);
      ctx.users.push({action: 'Check balance',email: (ctx.users[Number(objIndex2)].email),createDate:Date().toLocaleString()});
    } else {
      setMessage2('Please login with your email');
    }
  }    

  function clearForm(){
    setShow(true);  
  }

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ? (  
              <>
              <br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>View Balance</button>
              </>
            ):(
              <>
              <h5>{message2} {balance2}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Return</button>
              </>
            )}
    />
  )
}

export default Balance;