import React, { useContext } from 'react'
import { myContext } from '../App'



const cardContainerStyle = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
  backgroundColor:" white",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  border:'2px solid black'
  
  
};

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "200px",
  padding: "15px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  
};

const imageStyle = {
  width: "100%",
  height:"200px",
  borderRadius: "6px",
};

const buttonstyle={

 borderRadius:'10px',
 border:'5px',
 backgroundColor:'transparent',

}


const Viewcart = () => {
    const cartval=useContext(myContext)

    const deletecart=(val)=>{
      cartval.setAddcart((cur)=>{
        return cur.filter((c)=>c.id!==val)

      })
    }



  return (
    <div style={cardContainerStyle}>
        {cartval.addcart.map((cur)=>{
            return(
                <div style={cardStyle}>
                    <img src={cur.image} style={imageStyle} alt="" />
                    <h4>{cur.title}</h4>
                    <h4>{cur.price}</h4>
                    <button style={buttonstyle} onClick={()=>deletecart(cur.id)}><img style={{width:'15px',height:'15px'}} src="https://cdn-icons-png.flaticon.com/128/458/458594.png" alt="" />  </button>

                </div>
            )

        })
        }


    </div>
  )
}

export default Viewcart