import React, { createContext, useState } from 'react'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Setting from './Pages/Setting'
import Admindash from './Component/Admindash'
export const myContext=createContext()

const App = () => {
  const [user,setUser]=useState([]);
   const [product,setProduct]=useState([]);
   const [addcart,setAddcart]=useState([]);
   const[checkdet,setCheckdet]=useState([])
  return (
    <div>
      <myContext.Provider value={{user,setUser,product,setProduct,addcart,setAddcart,checkdet,setCheckdet}}>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Setting' element={<Setting/>}/>
          <Route path='/Admin' element={<Admindash/>}/>
        </Routes>
      </Router>
      </myContext.Provider>
    



    </div>
  )
}

export default App