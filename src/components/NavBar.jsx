import React from "react";

const Navbar = () => {
  return <>
  <nav>
      <img src={process.env.PUBLIC_URL + '/Images/airbnb-logo.png'} className='nav--logo'></img>
  </nav> 
  </>
}

export default Navbar;