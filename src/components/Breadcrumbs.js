import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav className="breadcrumbs">
      <span>Home</span>
      {paths.map((path, index) => (
        <span key={index}> / {path}</span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
