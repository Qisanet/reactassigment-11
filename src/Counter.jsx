import React, { useState, useEffect } from 'react'; // Import React and the hooks we need


function Counter() {
  
  const [count, setCount] = useState(0); 
  
  
  const [isRunning, setIsRunning] = useState(false); 

  
  useEffect(() => {
    let timer; 

    if (isRunning) {
      
      timer = setInterval(() => {
        
        setCount((prevCount) => prevCount + 1);
      }, 1000); 
    } else {
      
      clearInterval(timer);
    }

   
    return () => clearInterval(timer);
  }, [isRunning]); 

  
  return (
    <div>
    
      <h1>Count: {count}</h1>

    
      <button onClick={() => setIsRunning(true)}>Start</button>

     
      <button onClick={() => setIsRunning(false)}>Stop</button>
    </div>
  );
}


export default Counter;
