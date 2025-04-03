import React from 'react';
import { motion } from 'react-dom';

import polarbear from "../Images/patners logo/polarbear.jpg"
import royalmart from "../Images/patners logo/royal mart.png"
import sbm from "../Images/patners logo/SBM_OFFSHORE.png"
import village from "../Images/patners logo/villagemarket.jpg"


const OurClients = () => {
  // Replace these with your actual imported logo paths
  const clientLogos = [
    { 
      id: 1, 
      name: 'Village Market',
      logo: village,
      alt: 'Village Market logo'
    },
    { 
      id: 2, 
      name: 'Polar Bear Ice Cream',
      logo: polarbear,
      alt: 'Polar Bear Ice Cream logo'
    },
    { 
      id: 3, 
      name: 'Royal Mart', 
      logo: royalmart,
      alt: 'Royal Mart logo' 
    },
    { 
      id: 4, 
      name: 'SBM Offshore', 
      logo: sbm,
      alt: 'SBM Offshore logo' 
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-yellow-50 font-garamond">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Trusted Partners</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're proud to collaborate with these prestigious brands and retailers who share our commitment to quality and freshness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {clientLogos.map((client) => (
            <div 
              key={client.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.alt} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <p className="text-center font-medium text-gray-800">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-tinos">
            Join our growing network of premium retail partners
          </p>
          <a href='#contact'>
          <button className="mt-4 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors duration-300">
            Become a Partner
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClients;