import React,{useState} from 'react'
import Counter from './Counter'

const App = () => {

  let [count, setCount] = useState(0)


  return (
    <>
    <h1>Hello, this is my Counter App</h1>
    <h3>Count: {count}</h3>
  
    <Counter setCount={setCount}/>
    
    </>
  )
}

export default App