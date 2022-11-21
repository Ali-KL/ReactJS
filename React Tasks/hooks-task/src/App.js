import './App.css';
import React, {useState, useEffect } from 'react';

function App() {
  const [widowWidth, setwidowWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setwidowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div className='myDiv'>
      <h3>{widowWidth}</h3>
    </div>
  );
}

export default App;
