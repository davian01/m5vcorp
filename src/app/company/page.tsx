'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function CompanyPage(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<'purpose' | 'vision'>('purpose');

  const toggleSlide = () => {
    setActiveSlide(activeSlide === 'purpose' ? 'vision' : 'purpose');
  };

  return (
    <main className="font-calibre">
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-16 px-8 text-white" style={{ minHeight: '340px' }}>
        <Image
          src="/images/niagara-falls.png"
          alt="Niagara Falls Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="max-w-5xl mx-auto relative z-20">
          <p className="uppercase font-semibold tracking-widest text-sm mb-2">Company</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Value and Design,</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">Finally on the Same Page.</h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 grid gap-8 md:grid-cols-2 items-center container mx-auto px-20">
        <div className="relative aspect-[3/2]">
          <Image
            src="/images/company/yaseen-sherard.png"
            alt="Sherard McQueen and Yaseen Nimjee, founders of M5V Developments"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl mb-4">From Brokers to Builders</h2>
          <p className="text-body mb-4">
            M5V began in 2008 as a residential brokerage rooted in Toronto's M5V postal code, where Sherard McQueen and Yaseen Nimjee built a reputation on trust, results, and deep market insight.
          </p>
          <p className="text-body mb-4">
            As the GTA market matured, they saw a new opportunity: to not just sell great homes—but to build them. By 2014, M5V had pivoted into full-scale development.
          </p>
          <p className="text-body mb-4">
            Since then, we've delivered more than 1,000 homes across Niagara and Simcoe counties, spanning townhomes, condos, and senior living—without ever losing the accessibility, quality, and accountability that earned us our start.
          </p>
          <p className="text-body">
            Today, our focus remains the same: build with purpose, deliver what we promise, and create lasting value for families, partners, and communities alike.
          </p>
        </div>
      </section>

      {/* Purpose/Vision Carousel */}
      <section className="relative py-8 bg-off-white text-black-primary text-center">
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/chicago-cityscape.png"
            alt="Chicago cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-32 relative">
              <div className="relative overflow-hidden">
                <div className={`transition-transform duration-500 ${activeSlide === 'purpose' ? 'translate-x-0' : '-translate-x-full'}`}>
                  <p className="text-small uppercase tracking-wide text-off-white">Purpose</p>
                  <h3 className="text-h3 leading-snug mt-2 text-off-white">
                    Building communities<br />where value and design finally meet.
                  </h3>
                </div>
                <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ${activeSlide === 'vision' ? 'translate-x-0' : 'translate-x-full'}`}>
                  <p className="text-small uppercase tracking-wide text-off-white">Vision</p>
                  <h3 className="text-h3 leading-snug mt-2 text-off-white">
                    Creating sustainable<br />communities that stand the test of time.
                  </h3>
                </div>
              </div>
              <button 
                onClick={toggleSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-off-white hover:text-accent-blue transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 container mx-auto px-16">
        <p className="uppercase font-semibold tracking-widest text-sm mb-2">Case Studies</p>
        <h2 className="text-h2 font-light mb-8">
          Our Projects Are Built for Success. See It Yourself.
        </h2>

        <article className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <div className="relative aspect-[5/3] max-h-[20rem] w-full">
              <Image
                src="/images/m5v_portfolio/niagara-phase-1.png"
                alt="The Niagara Phase 1 Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-light mb-4">
              Bringing Stacked Towns to Niagara: What Phase 1 Taught Us
            </h3>
            <p className="text-gray-600 mb-6">
              When we broke ground on The Niagara Phase 1, stacked townhomes were virtually unheard of in the Niagara region. 
              Local product leaned toward traditional two-storey homes, but we saw an opportunity: 
              increase density, maintain liveability, and unlock affordability for a new generation of buyers. 
            </p>
            <button className="text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-2 text-accent-blue hover:text-black-primary transition-colors">
              Learn More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </article>

        <article className="grid md:grid-cols-12 gap-12 items-center mt-16">
          <div className="md:col-span-4">
            <div className="relative aspect-[5/3] max-h-[20rem] w-full">
              <Image
                src="/images/m5v_portfolio/the-muskoka.jpg"
                alt="The Muskoka Cottages Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-light mb-4">
            How Strategic Expertise Unlocked The Muskoka After a Decade of Delay
            </h3>
            <p className="text-gray-600 mb-6">
            The Muskoka Cottages project presented a unique challenge: 
            a prime development site locked in a ten-year stalemate of regulatory hurdles and local skepticism. 
            This case study reveals the strategic insights and expert navigation that allowed us to break through the impasse, secure approvals, and deliver a sought-after community.
            </p>
            <button className="text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-2 text-accent-blue hover:text-black-primary transition-colors">
              Learn More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </article>
      </section>

      {/* Partners */}
      <section className="py-16 container mx-auto px-16">
        <h2 className="text-h2 font-light mb-8">The Geniuses Behind Our Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              firstName: 'Sherard',
              lastName: 'McQueen',
              position: 'Sales & Marketing',
              image: '/images/team/sherard.png'
            },
            {
              firstName: 'Yaseen',
              lastName: 'Nimjee',
              position: 'Construction & Development',
              image: '/images/team/yaseen.png'
            },
            {
              firstName: 'Rajeev',
              lastName: 'Viswanathan',
              position: 'Finance & Operations',
              image: '/images/team/rajeev.png'
            }
          ].map((member, index) => (
            <div 
              key={index} 
              className="bg-black-primary aspect-[3/4] p-0 relative group"
            >
              <Image
                src={member.image}
                alt={`${member.firstName} ${member.lastName}`}
                fill
                className="object-cover"
              />
              {/* Permanent Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Text Container - Bottom Right */}
              <div className="absolute bottom-8 right-8 text-right">
                <div className="text-off-white">
                  <p className="text-2xl font-light mb-1">
                    {member.firstName}
                  </p>
                  <p className="text-2xl font-medium mb-3 uppercase">
                    {member.lastName}
                  </p>
                  <p className="text-off-white">
                    {member.position}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-2 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-colors duration-200 font-medium">
            See Our Team
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black-primary text-off-white text-center">
        <p 
        className="uppercase font-semibold tracking-widest text-sm mb-8"> Invest in Vision, Build Lasting Value.
        </p>
        <h2 className="text-3xl sm:text-4xl mb-8">
            Connect With Us to Explore Our Development Pipeline.
        </h2>
        <button className="border border-off-white px-6 py-2 hover:bg-off-white hover:text-black-primary transition">
          Contact Us
        </button>
      </section>
    </main>
  );
} 