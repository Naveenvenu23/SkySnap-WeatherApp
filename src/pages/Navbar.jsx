import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-400 h-16 bg-transparent absolute text-white mt-5 flex justify-between items-center w-full">
        <h1 className="p-4 ml-20 text-2xl font-semibold">
          <FontAwesomeIcon icon={faCloudSun} /> SkySnap
        </h1>
        <h2 className="font-semibold text-xl text-white mr-20">
           {new Date().toLocaleDateString()}
        </h2>
      </nav>
    </div>
  );
};

export default Navbar;
