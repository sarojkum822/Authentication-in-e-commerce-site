import React from 'react'
import './App.css'
// import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Dashboard from './Pages/user/Dashboard';
import PrivateRoute from './components/PrivateRoutes/private';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>




    </>
  )
}

export default App