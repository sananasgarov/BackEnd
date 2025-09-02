import React from 'react'
import Navbar from '../../components/navbar'

function Header({ hidden, setHidden , setIsLogin }) {
  return (
    <div className='bg-black px-6 py-4 text-center'>
      <Navbar hidden={hidden} setHidden={setHidden} setIsLogin={setIsLogin} />
    </div>
  )
}

export default Header