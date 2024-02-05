import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const decrementhadler = () =>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      window.alert("Negative value not allowed")
    }
  }
  
  return (
    <div className='Container'> 
              <h1>{counter}</h1>
              <div className='buttonContainer'>
                <button onClick={()=>setCounter(counter+1)}>Increment</button>
                <button onClick={decrementhadler}>Decrement</button>
              </div>
        
    </div>
  )
}

export default App
