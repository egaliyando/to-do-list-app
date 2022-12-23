import React from 'react';

function Layout({ children }) {
  return (
    <div className="bg-[#F4F4F4] h-screen overflow-y-scroll">
      <div className="py-10 bg-[#16ABF8]">
        <div className="w-[63rem] mx-auto">
          <p className="text-xl font-bold text-white">TO DO LIST APP</p>
        </div>
      </div>
      <div className="w-[63rem] mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
