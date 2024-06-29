import React from 'react'
import image from '../images/image1.jpg'

function Home() {
  return (
    <div className='container justify-content-center'>
        <img src={image}  alt="" />
        <h1>Shoppi</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, deserunt!</p>
    </div>
  )
}

export default Home