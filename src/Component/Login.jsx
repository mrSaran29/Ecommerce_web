import React, { useContext, useRef, useState } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom'
import'../style.css'

const containerStyle={
      width:'100%',
      height:'570px',
      
};
const logincontStyle={
    width:"300px",
    height:'300px',
    backgroundColor:'transparent',
    border:'2px solid white',
    borderRadius:'10px',
    position:'absolute',
    top:'150px',left:'700px',
    textAlign:'center'
}
const textStyle={
    position:'absolute',
    bottom:'10px',left:'65px',
    color:'white',
    fontSize:'15px',
    cursor:'pointer'
    
}
const buttonStyle={
    width:'200px',
    height:'40px',
    borderRadius:'20px',
    border:'5px',
    backgroundColor:'white',
    position:'absolute',
    bottom:'60px',right:'50px'
       
}
const UinputStyle={
    backgroundColor:'transparent',
    width:'230px',
    height:'40px',
    borderRadius:'20px',
    borderTop:'  2px solid white',
    borderBottom:' 2px solid white',
    borderRight:'2px solid white',
    borderLeft:'2px solid white',
    outline:'none',
    color:'white',
    position:'absolute',
    bottom:"210px",right:'25px',

    
}
const PinputStyle={
    backgroundColor:'transparent',
    width:'230px',
    height:'40px',
    borderRadius:'20px',
    borderTop:'  2px solid white',
    borderBottom:' 2px solid white',
    borderRight:'2px solid white',
    borderLeft:'2px solid white',
    outline:'none',
    color:'white',
    position:'absolute',
    bottom:'150px',right:'25px'
    

}
const msgStyle={
    color:'white',
    fontSize:'18px',
     position:'absolute',
    bottom:'100px',right:'32px'
    
}
const loginStyle={
    fontSize:'25px',
    color:'white',
    position:'absolute',
    bottom:'230px',left:'120px'
}
const welStyle={
    color:'white',
    position:'absolute',
    bottom:'400px',left:'100px',
    fontSize:'30px'
}

const tagStyle={
    color:'lightblue',
    position:'absolute',
    bottom:'300px',left:'40px',
    width:'50%',
    fontSize:'20px'
}


const Login = () => {
    const val=useContext(myContext)
    const [msg,setMsg]=useState('')
    const navigate=useNavigate()
    const unameref=useRef()
    const passref=useRef()


    const submit=(e)=>{
        e.preventDefault()

        
    if(unameref.current.value === "soul of blue" && passref.current.value === "18221287"){
      navigate('/AdminDash')
      found = true
    }
        val.user.forEach((cur)=>{
            if(cur.uname === unameref.current.value && cur.password === passref.current.value){
                navigate('/Home')
            }else{
                setMsg('Invaild password or username')
            }
        })

    }

  return (
    <div style={containerStyle}>
    <div style={{width:'100%',height:'570px'}}>
             <img style={{width:'100%',height:'570px'}} src="https://images.hdqwalls.com/download/minimal-waterfall-in-mountains-scenery-beautiful-5k-4a-1920x1080.jpg" alt="" />
            <h2 style={welStyle}>Welcome to Modern Fashion</h2>
            <h4 style={tagStyle}>MODERN fashion boutique is a great place to give yourself a new look. We create exclusive outfits for women and men, as well as shoes and accessories.We can execute even the most unpredictable ideas</h4>
        </div>
        <div style={logincontStyle}>
             <form >
                <h4 style={loginStyle}>Login</h4>
         
            <input type="text" style={UinputStyle} placeholder="Username" ref={unameref}/><br />
           
            <input type="text" style={PinputStyle} placeholder='Password' ref={passref} /><br /><br />
            <button style={buttonStyle} onClick={(e)=>submit(e)}>Login</button><br /><br />
            {
                msg && <p style={msgStyle}>{msg}</p>
            }
            <p style={textStyle} onClick={()=>navigate('/Signup')}>Create new account regsiter</p>
        </form>
        </div>

       
    </div>
  )
}

export default Login