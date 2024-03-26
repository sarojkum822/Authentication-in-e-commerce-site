import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';


const Header = () => {
  const [auth,setAuth] = useAuth();

  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,
      token:'',
    })
    localStorage.removeItem('auth');
    toast.success("Logout successfully");
  }

  return (
    <>
       <div className='bg-zinc-50 w-full h-16 flex justify-between border-b-2'>
            <div className='flex items-center p-4'>
              <span><HiShoppingBag/></span>
              <span className='text-2xl p-2 ecom'>E-COMMERCE</span>
            </div>
            <div className=''>
              <ul className='flex text-[20px] font-light gap-6 p-4 nav-itemss'>
                <li className='hover:scale-105'><NavLink to='/'>Home</NavLink></li>
                <li className='hover:scale-105'><NavLink to='/category' >Category</NavLink></li>
                <li className='hover:scale-105'><NavLink to='/contact' >Contact</NavLink></li>
                

                {!auth.user ?(<>
                  <li className='hover:scale-105'><NavLink to='/register' >Register</NavLink></li>
                <li className='hover:scale-105'><NavLink to='/login' >Login</NavLink></li>
                </>)
                :
                (<>
                <li className='hover:scale-105' onClick={handleLogout}><NavLink to='/login' >Logout</NavLink></li>
                </>)}
                <li className='hover:scale-105'><NavLink to='/cart' ><span className='flex items-center'><CiShoppingCart/>(0)</span></NavLink></li>
                
              </ul>
            </div>
       </div>
    </>
  )
}

export default Header
