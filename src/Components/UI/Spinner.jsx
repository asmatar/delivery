import React from 'react';

function spinner() {
  return (
    <div className=" h-80 w-screen z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500" />
    </div>
  );
}

export default spinner;
