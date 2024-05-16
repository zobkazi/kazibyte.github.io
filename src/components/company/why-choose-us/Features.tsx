import React from 'react';
import { features } from '@/config/features/data';

const Features: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Features you all love</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">A responsive documentation template built for everyone who wants to create a plugin.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="text-violet-600 bg-green-500 p-3 rounded-full">
              {/* Icon placeholder */}
            </div>
            <div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="mt-1 text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
