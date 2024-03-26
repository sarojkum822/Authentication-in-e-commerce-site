import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl text-center">404</h1>
        <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
        <Link to="/" className="mt-8 px-4 py-2 bg-blue-100 text-black rounded-md hover:bg-blue-200">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
