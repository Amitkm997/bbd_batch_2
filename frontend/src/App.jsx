








import About from "./pages/About"
import Company from "./pages/components/Company"
import Register from "./pages/components/Register"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Student from "./Student"
import Login from '../src/pages/components/Login'
import {Routes,Route} from 'react-router-dom'
import Contact from "./pages/Contact"
import CompaniesDetails from "./pages/CompaniesDetails"
import UseEffect from "./pages/components/UseEffect"
function App() {
  return (
    <> 
       {/* <UseEffect/> */}
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/companies" element={<Company/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/companies/:id" element={<CompaniesDetails/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
