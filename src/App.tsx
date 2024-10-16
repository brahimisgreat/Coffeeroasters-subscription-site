import './App.css'
import { Home } from './Components/Pages/Home/Home'
import { Header } from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      <div className='h-72 w-full '>ddsdss</div>

    </div>
  )
}

export default App
