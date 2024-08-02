import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import '../styles/loader.css'; // Import your CSS file for styling

const Loader = () => {
  return (
    <div className="loader">
      <FaSpinner className="spinner-icon" />
    </div>
  );
};

export default Loader;
