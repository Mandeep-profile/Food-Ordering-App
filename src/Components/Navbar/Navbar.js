import React from 'react'
import logo from '../../Assets/Main-logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='Nav-main'>
        <div className='Nav-logo'>
            <img src={logo} alt='App-Logo' />
        </div>
        <div className='Nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><ShoppingCartIcon /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar