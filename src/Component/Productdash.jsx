import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../App';
import "../style.css";



const cardContainerStyle = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
  backgroundColor:"white"
  
};

const cardStyle = {
  backgroundColor: "white",
  border: "3px solid blue",
  borderRadius: "8px",
  width: "200px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(9, 239, 228, 1.5)",
  
};

const imageStyle = {
  width: "100%",
  height:"200px",
  borderRadius: "6px",
};

const buttonStyle={
  width:"65px",
  height:"40px",
  borderRadius:"10px",
  border:"5px",
  backgroundColor:"black",
  color:"white",
 
  
 

}

const Productdash = () => {
  const cartval=useContext(myContext)
  
   

    useEffect(()=>{
         fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>cartval.setProduct(data))
    },[])
    function addcart(val){
      cartval.product.forEach((cur)=>{
        if(cur.id === val){
          cartval.setAddcart((c)=>[
            ...c,
            {
              id:cur.id,
              title:cur.title,
              price:cur.price,
              image:cur.image,

            },

          ]);
          cur.active=true;
        }

      });
      

    }

     

    
    
  return (
    <div style={cardContainerStyle}>
        {cartval.product.map((cur,i)=>{
            return(
                <div style={ cardStyle} key={i}>
                    <img src={cur.image}style={imageStyle} alt="" />
                    <h4>{cur.title}</h4>
                    <h4>{cur.price}</h4>
                    <button  value={cur.active ? cur.active:false}  onClick={()=>addcart(cur.id)}>
                      {cur.active ? <p>Purchase</p> : <p>Order</p>}

                    </button>
                </div>
            )

        })

        }
       

    </div>
  )
}

export default Productdash