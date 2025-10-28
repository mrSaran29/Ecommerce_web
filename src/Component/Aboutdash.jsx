import React from 'react'

const Aboutdash = () => {
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ backgroundColor: ' #484681ff', width: '50%', height: '500px', color: 'white',textAlign:'center' }}>
                <h2 style={{position:'absolute',top:'180px',color:'#F6339A'}}>Looking for something special?</h2>
                <h1 style={{position:'absolute',top:'220px',fontSize:'50px',width:'50%'}}>Feel the spirit of the city in bold and functional outfits</h1>
                <h4 style={{position:'absolute',bottom:'100px',fontSize:'25px'}}>MODERN fashion boutique is a great place to give yourself a new look. We create exclusive outfits for women and men, as well as shoes and accessories.We can execute even the most unpredictable ideas!</h4>
            </div>
            <div style={{ height: '500px', width: '50%', backgroundColor: '#726ECF' }}>
                <img style={{ width: '50%', height: '500px' }} src="https://bollywoo.ooo/cdn/shop/files/mockup-of-a-gamer-wearing-a-bella-canvas-t-shirt-and-headphones-m28449_c79cec4b-89ef-4c65-ad59-08a53b6cdf52.png?v=1712141485&width=900" alt="" />
                <img style={{ width: '50%', height: '500px' }} src="https://vestirethreads.com/cdn/shop/files/tee-mockup-featuring-a-teen-gamer-wearing-headphones-m28454.png?v=1721585462" alt="" />
            </div>
        </div>
    )
}

export default Aboutdash