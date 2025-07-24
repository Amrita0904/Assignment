import { useState } from 'react'
import Myinfo from './Myinfo'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Myinfo/>
   </div>
  )
}

export default App
