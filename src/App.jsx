import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Company from './pages/Company'
import NewProject from './pages/NewProject'


function App() {

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route>   
      </Routes>
      <p>Footer</p>
    </Router>
  )
}

export default App
