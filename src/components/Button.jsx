import React from 'react';

const Button = ({ href, children }) => {
  return (
    <a href={href} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
      {children}
    </a>
  );
};

export default Button;