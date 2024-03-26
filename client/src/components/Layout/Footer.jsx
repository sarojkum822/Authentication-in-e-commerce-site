import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <>
    <div className='bg-zinc-600 font-light h-32 text-white'>
      <h4 className='justify-center flex'>All Right Reserved & copy: Sarojkum822</h4>
      <ul className='flex justify-center gap-2'>
        <li className='hover:border-b-2 font-light text-[13px] text-gray-300'><NavLink to='/about'>About</NavLink></li>
        <li className='hover:border-b-2 font-light text-[13px] text-gray-300'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='hover:border-b-2 font-light text-[13px] text-gray-300'><NavLink to='/privacy policy'>Privacy Policy</NavLink></li>
      </ul>
    </div>
   </>
  )
}

export default Footer