'use client';

import { useState } from 'react';
import Image from 'next/image';

const InvestmentPhilosophy = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points = [
    {
      number: '1',
      title: 'Construction Excellence',
      description: 'Clustering projects, using pre-fab systems, and sourcing globally lets us reduce costs and accelerate build times.',
      image: '/images/construction-excellence.jpg'
    },
    {
      number: '2',
      title: 'Marketing Innovation',
      description: 'With 2M+ monthly reach and in-house sales, we achieve rapid sell-through while cutting marketing costs by up to 90%.',
      image: '/images/marketing-innovation.jpg'
    },
    {
      number: '3',
      title: 'Strategic Land Acquisition',
      description: 'We target underutilized sites and unlock value through rezoning and density optimization.',
      image: '/images/land-acquisition.jpg'
    },
    {
      number: '4',
      title: 'Financial Discipline',
      description: 'We minimize risk with strong financing, pre-sales, and private/institutional lending relationships to maintain stable cash flow.',
      image: '/images/financial-discipline.jpg'
    }
  ];

  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex gap-12">
          {/* Left side - Text Content */}
          <div className="w-1/2">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-6 text-[#008db7]">
              How We Do It
            </h2>
            <p className="text-h3 text-black mb-16">
              Our integrated model maximizes value at every stage of development:
            </p>

            {/* Points List */}
            <div className="space-y-12">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActivePoint(index)}
                  onMouseLeave={() => setActivePoint(null)}
                >
                  <div className="flex gap-6">
                    {/* Number */}
                    <div className="text-5xl font-bold text-[#008db7]">
                      {point.number}
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3 flex items-center justify-between">
                        {point.title}
                        <svg className="w-4 h-4 text-[#008db7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h3>
                      <p className={`text-black/80 leading-relaxed transition-all duration-300 ${
                        activePoint === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                  {index < points.length - 1 && <hr className="border-t border-black my-6" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images */}
          <div className="w-1/2 relative">
            {points.map((point, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  activePoint === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy; 