import React from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import UserContext from './context';

function Withdraw(){
  const [show, setShow]         = useState(true);
  const [status]     = useState('');
  const [withdraw, setwithdraw]   = useState(0);
  const [message3, setMessage3] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [objIndex3] = useState('');
  const [balance3, setBalance3] = useState('');
  const ctx = useContext(UserContext);


  function handleCreate(){
    setShow(false);

    const objIndex3 = ctx.users.findIndex(item => item.login === 'yes');

    if (objIndex3 > -1) {
      if (Number(withdraw)<=Number(ctx.users[Number(objIndex3)].balance)) {
          setBalance3(Number(ctx.users[Number(objIndex3)].balance)-Number(withdraw));
          ctx.users[Number(objIndex3)].balance = (Number(ctx.users[Number(objIndex3)].balance)-Number(withdraw));
          console.log(ctx.users[Number(objIndex3)]);
          setMessage3('Your balance is $');
          ctx.users.push({action: 'Withdraw',email: (ctx.users[Number(objIndex3)].email),createDate:Date().toLocaleString()});
      } else {
        setMessage3('Not enough funds!, Your balance is $'); 
      }
    } else {
      setMessage3('Please login with your email');
    }
  }

  function clearForm(){
    setShow(true);
  }
  
  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? (
              <>
              Withdraw<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter value" value={withdraw} onChange={e => setwithdraw(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Make withdraw</button>
             </>
            ):(
              <>
              <h5>{message3} {balance3}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New withdraw</button>
              </>
            )}
    />
  )
}

export default Withdraw;