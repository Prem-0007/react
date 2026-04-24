// useEffect() = react hook tells React DO SOME CODE WHEN (pick one):
 // This component re-renders
 // This components mounts
 // The state of a value

 // useEffect(function. [dependencies])

 // 1. useEffect(() => {}) // runs after every re-render
 // 2. useEffect(() => {}, []) // runs only on mount
 // 3. useEffect(() => {}, [value]) // runs on amount + when value changes

 // USES
 // #1 Event Listeners
 // #2 DOM manipulation
 // #3 Subscriptions (real-time updates)
 // #4 Fetching Data from an API
 // #5 Clean up when a component unmounts


 /*
 import React, {useState, useEffect} from 'react';

 function MyComponent() {
   const [count, setCount] =useState(0)
   const[color, setColor]=useState("green")
  //  useEffect(() => {document.title=`count: ${count}`} );

    useEffect(() => {document.title=`count: ${count} ${color}`
}, [count , color] );
  
   function addCount(){
    setCount(c=> c+1);
   } function subtractCount(){
    setCount(c=> c-1);
   }
   function changeColor(){
    setColor(c=> c==="green" ? "red":"green");
   }

   return(<>
   <p style= {{color: color}}>Count:{count}</p>
   <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>
    <button onClick={changeColor}>Change Color</button></>)
 }
 export default MyComponent;
 */



import React, {useState, useEffect} from 'react';

 function MyComponent() {

    const[width, setWidth]=useState(window.innerWidth);
    
    const[height, setHeight]=useState(window.innerHeight);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
 useEffect(() => {
 window.addEventListener("resize" , handleResize);

    
    console.log("EVENT LISTENER ADDED");

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVED");
    }
 }, []);

 useEffect(() => {
    document.title = `size: ${width} x ${height}`
 }, [width, height]);
    return(<>
    <p>Window width: {width}px</p> <p>Window Height: {height}px</p></>)
     }
 export default MyComponent;