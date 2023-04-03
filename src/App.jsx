import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Company from './pages/Company'
import NewProject from './pages/NewProject'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/company' element={<Company/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/newproject' element={<NewProject/>}></Route>   
          <Route path='/projects' element={<Projects/>}></Route>   
          <Route path='/project/:id' element={<Project/>}></Route>   
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
