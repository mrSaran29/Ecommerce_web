import React from 'react'
import { useNavigate } from 'react-router-dom'

const containerStyle={
  width:'100%',
  height:'570px',
  display:'flex'
}
const setcontStyle={
  width:'20%',
  height:'570px',
  backgroundColor:'black',
  color:'white'
}

const Settingdash = () => {
    const navi=useNavigate()
  return (
    <div style={containerStyle}>
       <div style={setcontStyle}>
         
         <h1> <img style={{width:'30px',height:'30px'}} src="https://cdn-icons-png.flaticon.com/128/484/484562.png" alt="" />Setting</h1>
          <hr style={{border:'none',backgroundColor:'grey',height:'2px',width:'200px'}} />
         <h4> <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/8106/8106985.png" alt="" /> Main Menu</h4>
         <h5 onClick={()=>navi('/Home')}><img  style={{width:'20px',height:'20px'}}  src="https://cdn-icons-png.flaticon.com/128/9073/9073032.png" alt="" /> Home</h5>
         <h5 onClick={()=>navi('/About')}> <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/1040/1040263.png" alt="" /> About</h5>
         <h5 onClick={()=>navi('/Contact')}><img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/720/720236.png" alt="" /> Contact</h5>
         <h5 onClick={()=>navi('/Cart')}><img  style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/10452/10452638.png" alt="" /> Cart</h5>
          <hr style={{border:'none',backgroundColor:'grey',height:'2px',width:'200px'}} />
         <h4>Sales</h4>
         <h5 onClick={()=>navi('/Admin')}><img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/10994/10994652.png" alt="" /> Order</h5>
         <hr style={{border:'none',backgroundColor:'grey',height:'2px',width:'200px'}} />
         <h4>platform  Features </h4>
         <h5><img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/18094/18094455.png" alt="" /> review</h5>
         <h5> <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/2268/2268705.png" alt="" />Support</h5>
         
         
       </div>
       <div>
      <img style={{height:'570px',width:'100%'}} src="https://t3.ftcdn.net/jpg/15/35/80/50/360_F_1535805047_JvMGEJCVIB0gN8J9SA7F4YVCelFE4hZ6.jpg" alt="" />
       </div>

    </div>
  )
}

export default Settingdash