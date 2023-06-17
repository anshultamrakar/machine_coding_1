import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <ul className='Header_listItems'>
            <Link to = "/"><li>Home</li></Link>
           <Link to = "/search"><li>Search</li></Link>
            
        </ul>
    </div>
  )
}

export default Header