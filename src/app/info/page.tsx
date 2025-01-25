import React from 'react';


const Page = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="sidebar-button">스택</button>
        <button className="sidebar-button">경력</button>
      </div>
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Page;