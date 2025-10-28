import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../App'
import Ticketanimation from './Ticketanimation';


const Checkoutform = () => {

      const containerStyle = {
    maxWidth: "300px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
    color: "#333",
  };

  const inputStyle = {
    width: "60%",
    padding: "10px",

    backgroundColor:"transparent",
    borderTop:"transparent",
    borderLeft:"transparent",
    borderRight:"transparent",
    borderBottom:'2px solid blue',
    outline:'none',
    fontSize: "14px",
    margin:'20px'
    
  };

  const buttonStyle = {
    width: "80%",
    padding: "10px",
    backgroundColor: "green",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin:'20px'
  };

  const radio={
    marginRight:'40px'
 
  }

    const checkval=useContext(myContext);
    const [payment,setPayment]=useState('')
     
    const cnameref=useRef()
    const cmobileref=useRef()
    const cemailref=useRef()
    const caddressref=useRef()
    const[toggle,setToggle]=useState(false)

    
  const handleSubmit = (e) => {
    e.preventDefault();

    checkval.setCheckdet((c) => [
      ...c,
      {
        cname: cnameref.current.value,
        cmobile: cmobileref.current.value,
        cemail: cemailref.current.value,
        caddress: caddressref.current.value,
        cpayment:payment,
        cproduct:checkval.addcart
      },
    ]);

    
    cnameref.current.value = "";
    cmobileref.current.value = "";
    cemailref.current.value = "";
    caddressref.current.value = "";

    setToggle(!toggle)
  };
  return (
    toggle ? <Ticketanimation/> : <div style={containerStyle}>
      
        <form onSubmit={handleSubmit} >
            <div style={formGroupStyle } >
        <label style={labelStyle} >Name</label>
        <input style={inputStyle} type="text" ref={cnameref} />
        </div>
        <div  style={formGroupStyle }>
        <label style={labelStyle} >Mobile</label>
        <input style={inputStyle} type="text" ref={cmobileref} />
        </div>
        <div  style={formGroupStyle }>
        <label style={labelStyle} >Email</label>
        <input style={inputStyle} type="text" ref={cemailref} />
        </div>
        <div  style={formGroupStyle }>
        <label style={labelStyle} >Address</label>
        <input style={inputStyle} type="text"  ref={caddressref}/>
        </div>
         <div style={formGroupStyle}>
             <div style={formGroupStyle}>
          <label htmlFor="Cash" >Cash</label>
         <input style={radio} type="radio" value="Cash" id="Cash" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'Cash'}/>
          <label htmlFor="Upi">Upi</label>
         <input style={radio} type="radio" value="Upi" id="Upi" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'Upi'}/>
          <label htmlFor="card">Card</label>
         <input style={radio} type="radio" value="card" id="card" onChange={(e)=>setPayment(e.target.value)} checked={payment === 'card'}/>
        </div>
          <button type="submit" style={buttonStyle}>Order Now</button>

       
          
        </div>
        </form>
    </div>
  )
}

export default Checkoutform