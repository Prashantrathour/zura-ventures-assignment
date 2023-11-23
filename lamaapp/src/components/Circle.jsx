import React from 'react';

const Circle = ({ number, bgColor, color }) => {
  const circleStyle = {
    borderRadius: '50%',
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="flex items-center justify-center w-10 p-1 " style={circleStyle}>
      <span className="text-base font-bold "><p className='text-center px-1'>{number}</p></span>
    </div>
  );
};

export default Circle;
