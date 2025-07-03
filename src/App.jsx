import './app.css'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Languages from './components/Languages'
import AboutMeContainer from './components/AboutMeContainer'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Loader from './components/Loader'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2500)
  
  return (
    loading ? <Loader/> : 
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Languages/> 
    <AboutMeContainer/>
    <Projects/> 
    <Certificates/>
    <Contacts/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
