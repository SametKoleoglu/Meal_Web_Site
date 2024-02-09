import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-white lg:px-40 p-4'>
        <p className='text-center'>&copy; Yazılımla İlerle {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer