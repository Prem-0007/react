 /* import {useState, useEffect} from 'react';
  const Card = ({title}) => {
  const [count, setCount] = useState(0);
   const[hasLiked, setHasLiked] =
   useState(false);
     useEffect(() => {
      console.log(`${title} has been ${hasLiked ? 'liked' : 'unliked'}`)
     }, [hasLiked]);
 useEffect (() => {
  console.log(`CARD RENDERED`)
 }, []);
  return (
    <div className="card" onClick={
      ()  =>setCount(count + 1)
    }/* style = {{
      border: '1px solid #4b5362',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      backgroundColor: '#31363f',
      minHeight: '150px',

    }} > */
     /*
      <h2>{title} <br/> {count || null}</h2>
      <button onClick ={()  =>setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
      </div>
  )
};
  const App = () => {
  
  return(
    <div className="card-container">
    
    <Card  title ="Star Wars" rating={5} isCool={true} actors={[{name:'Actors'}]} />
    <Card  title ="Avatar"/>
    <Card  title ="Titanic"/>
    </div>
  )
  }
export default App;


*/





/*



export default function App() {
 
  const name = `prem`;
  const x = 10, y =7;
  const names = ['prem', 'kasthuri', 'thanmaye','thanuj', 'manoj'];

  const loggedIn = true;


  return (
    <>
    <div className="text-5xl ">
      App
    </div>
    <p> Hello , {name}</p>
    <p>The sum of {x} and {y} is {x+y}</p>
    <ul>
      {names.map((name, index) => (
        <li key = {index}>{name}</li>
      ))}
      { }
      </ul>
      { loggedIn && <h1>Hello Member</h1>}
    </>
  )
}
*/


import React from 'react'

function App ()  {
  return (
  /*  <div className="text-5xl font-bold text-center mt-10">
    Hello World !
    </div>
    */
   <main>
    <div className="pattern"/>
    <div className="wrapper">
      <header>
        <h1> Find <span class="text-gradient" >movies</span>you like!</h1>
      </header>
    </div>
   </main>
  )
}

export default App
