import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth,setAuth] = useAuth();


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, password };
      const res = await axios.post('http://localhost:8080/api/v1/auth/login', formData);

      if (res.data.success) {

        // alert("login successful");
        toast("Login Successful");
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));

        navigate(location.state ||'/');
       
      } else {
        // alert("login failed");
        toast("Please register first");
      }
    } catch (error) {
      console.error("login unsuccessful", error);
      toast("Failed to login. Please try again later.");
    }
  };

  return (
    <Layout title="Login - Ecommerce app">
    <div className='flex justify-center items-center h-screen Register'>
      <form className='w-full max-w-md bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 form' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-semibold text-center mb-4 login'>Login</h2>
        
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email Address
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      
        

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            login
          </button>
          <Link to='/register'
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            register
          </Link>
        </div>
      </form>
    </div>
  </Layout>
  )
}

export default Login