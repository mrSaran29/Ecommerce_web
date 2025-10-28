import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Viewcart from '../Component/Viewcart'
import "../style.css";
import Checkoutform from '../Component/Checkoutform';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navi=useNavigate()
    const[toggle,setToggle]=useState(false)
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div style={{
        height:'400px',
        width:'800px',
        margin:'50px',
        position:"absolute",
        left:'200px',
        overflow:'scroll',
        borderRadius:'10px'
      }}>
         {toggle ? <Checkoutform/>:<Viewcart/> }

        

        {!toggle && <button style={{position:"fixed",bottom:'100px',left:"550px"}} className="place-button" onClick={()=>setToggle((cur)=>!cur)}>Check out</button>}
        </div>
    </div>
  )
}

export default Cart