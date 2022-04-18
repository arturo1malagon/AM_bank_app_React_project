import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';

function Home(){
  return (
    <Card
      bgcolor="primary"
      header="BadBank Home Page"
      title="Welcome to our bank"
      text="Please feel free to create an account or login. In our bank you can review your balance, make deposits and withdraws."
      body={(<img src={require ('./pngwing.png')} className="img-fluid" alt="Responsive"/>)}
    />    
  );  
}

export default Home;