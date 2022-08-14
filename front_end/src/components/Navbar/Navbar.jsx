import React from 'react'

import "./Navbar.scss"
import {images} from "../../constants"

function Navbar() {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo" />
        </div>
        <ul>
            
        </ul>
    </nav>
  )
}

export default Navbar