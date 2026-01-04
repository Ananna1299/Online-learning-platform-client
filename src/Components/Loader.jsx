import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="loading loading-spinner loading-xl"></span>
      <span>Loading Project Info</span>

    </div>
    );
};

export default Loader;