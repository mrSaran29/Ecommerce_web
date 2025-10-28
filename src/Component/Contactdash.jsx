import React from 'react'
import "../style.css";

const inputStyle={
    backgroundColor:"transparent",
    borderTop:"transparent",
    borderLeft:"transparent",
    borderRight:"transparent",
    borderBottom:'2px solid blue',
    outline: "none",
    fontSize:'18px'
  
};
const labelStyle={
    fontSize:"20px"

};


const Contactdash = () => {
  return (
    <div style={{width:'100%',height:'500px',display:'flex'}}>
        <div style={{width:'50%',color:'white',height:'500px'}}>
            <img style={{width:'100%',height:'500px'}} src="https://i.pinimg.com/736x/df/e3/6d/dfe36d8ae3b439e41f61917d925bb1b4.jpg" alt="" />


        </div>
        <div style={{width:'50%',height:'500px',textAlign:'center',alignContent:'center'}}>

            <h1 style={{fontSize:'35px'}}>Contact</h1>
            <label style={labelStyle} >Name</label><br /><br />
            <input style={inputStyle} type="text" /><br /><br />
            <label style={labelStyle}>Email</label><br /><br />
            <input style={inputStyle} type="email" /><br /><br />
            <label style={labelStyle} >Message</label><br /><br />
            <textarea style={inputStyle} name="Message" id=""></textarea><br /><br />
            <button className='c-but'>Submit</button>

        </div>
        <div style={{width:'50%',height:'500px',backgroundColor:'rgb(43, 38, 38 ,0.5)',position:'absolute',right:'628px',textAlign:'center'}}>
         <h1 style={{color:'white',position:'absolute',top:'80px',left:'250px'}}>Location</h1>
         <h4 style={{color:'white',position:'absolute',top:'150px',left:'150px',fontSize:'20px',width:'50%'}}>Mada Center 8th floor, 379 Hudson St,New York, NY 10018 US</h4> 
         <h1 style={{color:'white',position:'absolute',top:'250px',left:'250px'}} >Follow  us</h1>
         <img style={{width:'50px',height:'50px',position:'relative',top:'320px'}} src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png" alt="" />
         <img style={{width:'60px',height:'60px',position:'relative',top:'325px',left:'10px'}} src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" />
         <img style={{width:'50px',height:'57px',position:'relative',top:'325px',left:'20px'}} src="https://cdn-icons-png.flaticon.com/128/888/888853.png" alt="" />
        </div>
    </div>
  )
}

export default Contactdash