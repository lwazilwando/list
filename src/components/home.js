import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'


const Home = () => {
//   const [low,setLow]=useState('');
//   const [medium,setMedium]=useState('');
//   const [high,setHigh]=useState('');

//   useEffect(()=>{
//     let low='';
//     let medium='';
//     let high='';

//     for (let index = 0; index < props.list.length; index++) {
           
//       if(props.list[index].transactionType=="Low") {
//    low=low+parseInt(props.list[index].title);

//       }else {
//        medium=medium+parseInt(props.list[index].title);
//       }
//    }
// setLow(low);
// setMedium(medium)
// },[props.list.length]);


  return (
    <>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default Home