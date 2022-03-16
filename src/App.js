import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// ex : 01

function App(){
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
} 

export default App;
