import './App.css'
import { Home } from './Components/Pages/Home/Home'
import { Header } from './Components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App md:w-4/5'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
