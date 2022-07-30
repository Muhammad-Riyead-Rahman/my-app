import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/show-book" className="nav-link">Show Book</Link>
        <Link to="/add-book" className="nav-link">Add Books</Link>
      </nav>
    </div>
  )
}

export default Navbar