import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// ex : 01

/* function App(){
  return(
    <div className='App'>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <h1>Hey.....Ahhh!</h1>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
  </div>
  )
}

function Person(){
  return (
    <div className='person'>
      <h1>Md. Mofazzal Hossain</h1>
      <p>Job Holder</p>
    </div>
  )
}
function Friend(){
  return (
    <div className='friend'>
      <h1>Mohammad Mohitul Islam</h1>
      <p>Jobber</p>
    </div>
  )
}  */


// ex: 02
function App() {
  const products = [
    {name:'Table', price: 1850},
    {name:'Lamp', price: 150},
    {name:'Pen', price: 50},
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

     {/* <Product name= 'mofu' profession='job Holder'></Product>
     <Product name= 'mofazzal' profession='job Holder'></Product>
     <Product name= 'jibon' profession='job Holder'></Product> */}
    </div>
  );
}

function Product(props) {
  return(
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price:{props.price}</p>
      {/* <h5>Profession: {props.profession} </h5> */}
    </div>
  )
}

export default App;
