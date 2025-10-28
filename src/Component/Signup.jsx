import React, { useContext, useRef } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom'

const containerStyle={
    
      
    width:'100%',
    height:'570px'

    
}
const signcontStyle={
   backgroundColor:'transparent',
   borderTop:'  2px solid White',
    borderBottom:'  2px solid White',
    borderRight:'  2px solid White',
    borderLeft:'  2px solid White',
    borderRadius:'30px',  
   width:'400px',
   height:'500px',
   position:'absolute',
   left:'450px',top:'50px',
   textAlign:'center',
    
}

const inputStyle={
       backgroundColor:'transparent',
   borderTop:'  3px solid white',
    borderBottom:'  3px solid White',
    borderRight:'  3px solid White',
    borderLeft:'  3px solid White',
    borderRadius:'20px',  
    width:'200px',
    height:'30px',
    color:'white',
    fontSize:'15px',    
    textAlign:'center',
    outline:'none'
   

}
const butStyle={
  backgroundColor:'white',
  outline:'none',
  border:'5px',
    borderRadius:'20px',  
    width:'100px',
    height:'50px',
    color:'black'
    
}
const formStyle={
    position:'absolute',
     left:'90px',bottom:'5px'
}
const Signup = () => {

    const val=useContext(myContext)
    const navigate=useNavigate()


    const fnameref=useRef()
    const lnameref=useRef()
    const unameref=useRef()
    const mailref=useRef()
    const mobileref=useRef()
    const passref=useRef()
    const cpassref=useRef()

    const submit=(e)=>{
 
        e.preventDefault()
        val.setUser((cur)=>[
            ...cur,
            {
                fname:fnameref.current.value,
                lname:lnameref.current.value,
                uname:unameref.current.value,
                mail:mailref.current.value,
                mobile:mobileref.current.value,
                password:passref.current.value,
                cpassword:cpassref.current.value

            },
        ])
        navigate("/")

    }
  return (
    <div  style={containerStyle}>
        <img style={{width:'100%',height:'570px'}} src="https://wallpapers.com/images/hd/dark-depressing-6vh6q5zv482ozbn2.jpg" alt="" />
    <div style={signcontStyle}>
        <form style={formStyle}>
        <h1 style={{color:'#9AE630'}}>Sign up</h1>
      
        <input style={inputStyle} placeholder='Firstname' type="text" ref={fnameref} /><br /><br />
       
        <input style={inputStyle} placeholder='Lastname' type="text" ref={lnameref} /><br /><br />
      
        <input style={inputStyle} placeholder='Username' type="text" ref={unameref} /><br /><br />
        
        <input style={inputStyle} placeholder='Email' type="text" ref={mailref} /><br /><br />
        
        <input style={inputStyle} placeholder='Mobile' type="text" ref={mobileref} /><br /><br />
    
        <input  style={inputStyle} placeholder='Password' type="text" ref={passref} /><br /><br />
       
        <input style={inputStyle} placeholder='Cpassword' type="text" ref={cpassref} /><br /><br />
        <button style={butStyle} onClick={(e)=>submit(e)}>Signup</button>
        </form>
    </div>
    </div>
  )
}

export default Signup