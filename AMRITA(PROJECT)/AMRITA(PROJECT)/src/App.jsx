import { useState } from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Cards from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Nav/>
    <Banner/>
    <Cards/>
  </div>
  )
}

export default App
