import React from 'react'
import { myCountStore} from './hook/counterStore'
import { useStore } from 'zustand'

const App = () => {
  // using our store 'myCountStore' using useStote() function provided by  'zudstand' to use the store which we had made
  const {count,increment,decrement}=useStore(myCountStore)
  return (
    <div style={{display:'grid',gap:'20px',justifyContent:'center'}}>
      <h1>Counter is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App