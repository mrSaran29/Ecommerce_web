import React from 'react'
import { Link } from 'react-router-dom'
import './searchbar.css'



const Navbar = () => {
  return (
    <div style={{width:'100%',height:'80px',display:'flex', boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}>
      <div style={{width:'50%',color:'black'}}>
      <img style={{width:'50px',height:'50px'}} src="https://cdn-icons-png.flaticon.com/128/2412/2412869.png" alt="" />
      <h3 style={{position:'absolute',top:'15px',left:'60px'}} >Odern</h3>
      <div>

</div>

      

      </div>
      <div style={{width:'50%',display:'flex',justifyContent:'end'}}>
        <h4><Link style={{textDecoration:'none',fontSize:'20px',margin:'15px',color:'black'}} to='/Home'>Home</Link></h4>
        <h4><Link style={{textDecoration:'none',fontSize:'20px',margin:'15px',color:'black'}} to='/About'>About</Link></h4>
        <h4><Link style={{textDecoration:'none',fontSize:'20px',margin:'15px',color:'black'}} to='/Contact'>Contact</Link></h4>
        <h4><Link style={{textDecoration:'none',fontSize:'22px',margin:'15px',color:'black'}} to='/Cart'><img style={{width:'40px',height:'40px'}} src="https://cdn-icons-png.flaticon.com/128/15737/15737380.png" alt="" /></Link></h4>
        <h4><Link style={{textDecoration:'none',fontSize:'22px',margin:'15px',color:'black'}} to='/Setting'><img style={{width:'40px',height:'40px'}} src="https://cdn-icons-png.flaticon.com/128/3019/3019012.png" alt="" /></Link></h4>
      
      </div>



    </div>
  )
}

export default Navbar