import './App.css'
import { Home } from './Components/Pages/Home/Home'
import { Header } from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { About } from './Components/Pages/About/About'
import { Subscribe } from './Components/Pages/Subscribe/Subscribe'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe/>} />
      </Routes>
      <Footer />
      <div className='h-72 w-full '>ddsdss</div>

    </div>
  )
}

export default App
