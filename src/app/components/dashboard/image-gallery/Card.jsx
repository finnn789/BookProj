

// Card.js

import { Salsa } from 'next/font/google';
import React from 'react';



const salsa = Salsa({ subsets: ['latin'], weight: '400' })
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={salsa.className}>
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} width={100} height={100} className="w-full h-32 object-cover border-b border-gray-300" />
        <div className="p-4">
          <h3 className="text-lg text-center font-semibold mb-0 uppercase">{title}</h3>

        </div>
      </div>
    </div>
  );
};

export default Card;
