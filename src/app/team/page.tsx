'use client';

import Image from 'next/image';
import StickyHeader from '@/components/sticky-header';
import Link from 'next/link';
import { useState } from 'react';

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  slug: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember|null>(null);
  
  const teamMembers: TeamMember[] = [
    { 
      name: 'Sherard McQueen', 
      position: 'Co-Founder | Sales & Marketing', 
      image: '/images/team/Sherard.png',
      bio: 'Experienced sales and marketing professional with a proven track record in business development.',
      slug: 'sherard-mcqueen',
    },
    { 
      name: 'Yaseen Nimjee', 
      position: 'Co-Founder | Construction & Development', 
      image: '/images/team/Yaseen.png',
      bio: 'Expert in construction management and real estate development with extensive industry experience.',
      slug: 'yaseen-nimjee',
    },
    { 
      name: 'Rajeev Viswanathan', 
      position: 'CFO | Finance & Operations', 
      image: '/images/team/Rajeev.png',
      bio: 'Strategic financial leader with expertise in corporate finance and operational excellence.',
      slug: 'rajeev-viswanathan',
    },
    { 
      name: 'Linda Ford', 
      position: 'Director of Entitlement', 
      image: '/images/team/Linda.png',
      bio: 'Specialized in navigating complex entitlement processes and regulatory compliance.',
      slug: 'linda-ford',
    },
    { 
      name: 'Sophia Bailey', 
      position: 'Director of Sales', 
      image: '/images/team/Sophie.png',
      bio: 'Sales leader with a focus on building strong client relationships and driving revenue growth.',
      slug: 'sophia-bailey',
    },
    { 
      name: 'Leo Thomas', 
      position: 'VP, Construction', 
      image: '/images/team/Yogesh.png',
      bio: 'Construction management expert with a focus on quality, safety, and project delivery.',
      slug: 'leo-thomas',
    },
    { 
      name: 'Reza Farahdel, CPA', 
      position: 'Controller', 
      image: '/images/team/Geoff.png',
      bio: 'Certified Public Accountant with extensive experience in financial management and reporting.',
      slug: 'reza-farahdel-cpa',
    }
  ];

  return (
    <main className="min-h-screen">
      <StickyHeader />
      
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-16 px-8 text-white mt-[72px]" style={{ minHeight: '340px' }}>
        {/* Background image */}
        <Image
          src="/images/niagara-falls.png"
          alt="Our Team"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#008DB7]/90 z-10" />
        {/* Headline content */}
        <div className="max-w-5xl mx-auto relative z-20">
          <p className="uppercase font-semibold tracking-widest text-sm mb-2">TEAM</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Meet the Minds</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">Building the Future.</h1>
        </div>
      </div>

      {/* Team Grid Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <button
                key={member.slug}
                onClick={() => setSelectedMember(member)}
                className="group focus:outline-none"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-full bg-black bg-opacity-50 p-6 text-right">
                    <h3 className="text-white text-2xl font-medium">{member.name}</h3>
                    <p className="text-white text-lg">{member.position}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center p-4 pt-[96px]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#008DB7]/70 z-10"
            onClick={() => setSelectedMember(null)}
          />
          {/* Modal panel */}
          <div className="relative z-20 bg-white max-w-4xl w-full rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Left: 5:8 headshot (1/3 width) */}
            <div className="relative w-full md:w-1/3 aspect-[5/8] overflow-hidden">
              <Image
                src={selectedMember.image!}
                alt={selectedMember.name}
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Right: content (2/3 width) */}
            <div className="w-full md:w-2/3 p-6 overflow-y-auto max-h-[80vh] relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-2xl font-bold leading-none cursor-pointer"
              >
                &times;
              </button>
              <h3 className="text-3xl font-semibold mb-2">{selectedMember.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{selectedMember.position}</p>
              {selectedMember.bio && (
                <p className="text-gray-700 whitespace-pre-line">{selectedMember.bio}</p>
              )}
              {/* LinkedIn link */}
              <a
                href={`https://www.linkedin.com/in/${selectedMember.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-[#008DB7] font-medium"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5 mr-2"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                Add on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 