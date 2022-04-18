import React from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import UserContext from './context';

function Deposit(){
  const [show, setShow]         = useState(true);
  const [status]     = useState('');
  const [deposit, setDeposit]   = useState(0);
  const [message3, setMessage3] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [objIndex3] = useState('');
  const [balance3, setBalance3] = useState('');
  const ctx = useContext(UserContext);

  function handleCreate(){
    setShow(false);

    const objIndex3 = ctx.users.findIndex(item => item.login === 'yes');

    if (objIndex3 > -1) {
      if (Number(deposit)>0) {
        setBalance3(Number(deposit)+Number(ctx.users[Number(objIndex3)].balance));
        ctx.users[Number(objIndex3)].balance = (Number(deposit)+Number(ctx.users[Number(objIndex3)].balance));
        console.log(ctx.users[Number(objIndex3)]);
        setMessage3('Your balance is $');
        ctx.users.push({action: 'Deposit',email: (ctx.users[Number(objIndex3)].email),createDate:Date().toLocaleString()});
      } else {
        setMessage3('We cannot accept negative deposits');
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
      header="Deposit"
      status={status}
      body={show ? (
              <>
              Deposit<br/>
              <input type="number" className="form-control" id="deposit" placeholder="Enter value" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Make Deposit</button>
              </>
            ):(
              <>
              <h5>{message3} {balance3}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New deposit</button>
              </>
            )}
    />
  )
}

export default Deposit;