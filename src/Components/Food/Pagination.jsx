import React from 'react';

function Pagination() {
  return (
    <div className="flex flex-row gap-x-2 max-w-screen-2xl mx-auto my-16">
      <button type="button" className="pagination-btn">prev</button>
      <button type="button" className="pagination-btn">1</button>
      <button type="button" className="pagination-btn">2</button>
      <button type="button" className="pagination-btn">next</button>
    </div>
  );
}

export default Pagination;
