import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/Navbar/Navbar.css'

const Navbar = () => {


  return (
    <>
      <div className='nav-bar'>
        <ul>
            <li>
              <Link to="/lifestyle-react-project/" className='btn-slice'>
                <div className='slice-top'><span>Timer</span></div>
                <div className='slice-bot'><span>Timer</span></div>
              </Link>
            </li>
            <li>
              <Link to="positions" className='btn-slice'>
                <div className='slice-top'><span>Position</span></div>
                <div className='slice-bot'><span>Position</span></div>
              </Link>
            </li>
        </ul>
      </div>
        
    </>
  )
}

export default Navbar