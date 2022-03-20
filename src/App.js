import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


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
// function App() {
//   const products = [
//     {name:'Table', price: 1850},
//     {name:'Lamp', price: 150},
//     {name:'Pen', price: 50},
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }

//      {/* <Product name= 'mofu' profession='job Holder'></Product>
//      <Product name= 'mofazzal' profession='job Holder'></Product>
//      <Product name= 'jibon' profession='job Holder'></Product> */}
//     </div>
//   );
// }

// function Product(props) {
//   return(
//     <div className='product'>
//       <h3>Name: {props.name} </h3>
//       <p>Price:{props.price}</p>
//       {/* <h5>Profession: {props.profession} </h5> */}
//     </div>
//   )
// }




// ex: 03

// function App (){
//   return(
//     <div className='App'>
//       <Counter></Counter>
//     </div>
//   )
// }

//  function Counter() {
//    const [count, setCount] = useState(10);
//    const increaseCount = () => setCount(count + 1) ;
//    const decreaseCount = () => setCount(count - 1) ;
    

//    // another way for increase
//    /* const increaseCount = () => {
//      const newCount = count + 1;
//      setCount(newCount); 
//    }*/
//    // another way for decrease
//    /* const decreaseCount = () => {
//      const newCount = count -1 ;
//      setCount(newCount)
//    } */

//    return (
//      <div>
//        <h1>Count:{count}</h1>
//        <button onClick={increaseCount}>Increase</button>
//        <button onClick={decreaseCount}>Decrease</button>
//      </div>
//    )
//  }

// ex: 04
// function App () {
//   return (
//     <div className='App'>
//       <ExternalUsers></ExternalUsers>
//     </div>
//   )
// }
// function ExternalUsers () {
//   const [users, setUsers] = useState([]);
//   useEffect( () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())     
//     .then(data => setUsers(data))
//   },[]);

// return (
//   <div>
//     <h2>External Users</h2>
//     <p>{users.length}</p>
//      {
//       //  users.map(user => <li> {user.username}</li>)
//        users.map(user => <User name={user.name} email={user.email}></User>)
//      }
//   </div>
// )
// }
//  function User (props){
//    return(
//      <div>
//        <h3>Name:{props.name}</h3>
//        <h5>Email:{props.email}</h5>
//      </div>
//    )
//  }


 // ex : 05
 function App () {
  return (
    <div className='App'>
     <LoadComments></LoadComments>
    </div>
  )
   }

 function LoadComments () {
   const [comments, setComments] = useState([]);

   useEffect( () =>{
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res => res.json())
     .then(data => setComments(data))
   },[]);
   
   return (
     <div>
       <h2>Comments: {comments.length}</h2>
       {
         comments.map(comment => <Comment id={comment.id} name={comment.name} email={comment.email} body={comment.body}></Comment> )
       }
     </div>
   )
 } 

function Comment(props){
  return(
    <div className='friend'>
       <h2>ID:{props.id}</h2>
       <h2>Name:{props.name}</h2>
      <h2>Email:{props.email}</h2>
      <p>Body:{props.body}</p>
    </div>
  )
}

export default App;
