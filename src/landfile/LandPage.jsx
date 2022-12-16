import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export default function LandPage() {
  return (
    <div className='router-main-div'>
            <div className='first-div'>
                <img className='router-img' src="./assetss/ButterFlyimage.jpg" alt="img" />
            </div>
            <div className='second-div'>
                <h1>10x Team 04</h1>
                <Link to={'/view'}><button>Enter</button></Link>
            </div>
    </div>
  )
}
