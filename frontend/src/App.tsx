import { useState } from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Update from './Update'
import './index.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element ={<Home/>}></Route>
  <Route path='/Create' element ={<Create/>}></Route>
  <Route path='/Update/:admin_id' element ={<Update/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App
