import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const Loading = () => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
       const interval =  setInterval(() => {
            setCount((prevalue)=>--prevalue)
        }, 1000);
        count ===0 && navigate('/login',{
            state:location.pathname
        });

        return ()=>clearInterval(interval);
    },[count,navigate,location])

  return (
    <>
        <div className='flex justify-center items-center text-center h-screen bg-zinc-600'>
            <h1 className='text-3xl text-white border-b-2 p-4 animate-ping'>Loading....{count   }</h1>
        </div>
    </>
  )
}

export default Loading