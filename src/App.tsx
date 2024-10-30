import './App.css'
import { Home } from './Components/Pages/Home/Home'
import { Header } from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { About } from './Components/Pages/About/About'
import { Subscribe } from './Components/Pages/Subscribe/Subscribe'
import { useState } from 'react'

function App() {
  const [checkout, setCheckout] = useState(false) 

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe setCheckout={setCheckout}/>} />
      </Routes>
      <Footer />
      <div className='modal w-full text-black absolute   '>ffdsffd</div>

    </div>
  )
}

export default App
