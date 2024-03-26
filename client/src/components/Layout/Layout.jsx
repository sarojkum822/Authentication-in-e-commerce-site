import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author, }) => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </Helmet>
        <Header />
        <main className='w-full h-screen'>
          {children}

        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps={
  title:"E-Commerce app-shop now",
  description:"mern stack project",
  author:"sarojkum822"
}

export default Layout