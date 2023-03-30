import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Company from './pages/Company'
import NewProject from './pages/NewProject'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route>   
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
