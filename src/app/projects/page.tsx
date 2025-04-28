import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  name: string;
  slug: string;
  location: string;
  status: 'Active' | 'Completed' | 'Coming Soon';
  type: string;
  class: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'Le FALLS',
    slug: 'le-falls',
    location: 'Niagara Falls, Ontario',
    status: 'Active',
    type: 'Development',
    class: 'Townhomes',
    description: "Bold rooftop townhomes bringing modern design to Niagara's green heart.",
    image: '/images/m5v_portfolio/Le_Falls.png',
  },
  {
    name: 'NIAGARA ON THE BEACH',
    slug: 'niagara-on-the-beach',
    location: 'Fort Erie, Ontario',
    status: 'Active',
    type: 'Development',
    class: 'Townhomes',
    description: "Bold rooftop townhomes bringing modern design to Niagara's green heart.",
    image: '/images/m5v_portfolio/niagara-on-the-beach.png',
  },
  {
    name: 'SUNDIAL RETIREMENT',
    slug: 'sundial-retirement',
    location: 'Orillia, Ontario',
    status: 'Completed',
    type: 'Operating',
    class: 'Retirement Home',
    description: 'Purpose-built retirement living focused on care, comfort, and community in Orillia.',
    image: '/images/m5v_portfolio/sundial-retirement.png',
  },
  {
    name: 'THE NIAGARA PHASE 1',
    slug: 'the-niagara-phase-1',
    location: 'Niagara Falls, Ontario',
    status: 'Completed',
    type: 'Development',
    class: 'Stacked Townhomes',
    description: 'The first of our stacked townhome series that redefined urban density in Niagara Falls.',
    image: '/images/m5v_portfolio/niagara-phase-1.png',
  },
  {
    name: 'THE NIAGARA PHASE 2',
    slug: 'the-niagara-phase-2',
    location: 'Niagara Falls, Ontario',
    status: 'Coming Soon',
    type: 'Development',
    class: 'Stacked Townhomes',
    description: 'Expanded living through design, the second release of our sought-after Niagara townhomes.',
    image: '/images/m5v_portfolio/niagara-phase-2.png',
  },
  {
    name: 'THE MUSKOKA',
    slug: 'the-muskoka',
    location: 'Georgian Bay, Ontario',
    status: 'Active',
    type: 'Development',
    class: 'Detached',
    description: 'Modern, Airbnb-friendly cottages crafted for second-home living in Muskoka.',
    image: '/images/m5v_portfolio/the-muskoka.jpg',
  },
];

const statusColors: Record<string, string> = {
  'Active': 'bg-gray-300 text-gray-900',
  'Completed': 'bg-green-200 text-green-800',
  'Coming Soon': 'bg-sky-200 text-sky-800',
};

const Projects = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen text-black">
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
          <p className="uppercase font-semibold tracking-widest text-sm mb-2">Projects</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Where Vision Meets Opportunity,</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">See Our Projects in Action.</h1>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto px-8 py-12 space-y-12">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-col md:flex-row gap-6 border-b pb-8 last:border-b-0">
            {/* Project Image */}
            <div className="w-full md:w-64 h-48 bg-gray-200 relative flex-shrink-0">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority
              />
            </div>
            {/* Project Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className={`px-3 py-1 rounded border text-xs font-semibold ${statusColors[project.status]}`}>{project.status.toUpperCase()}</span>
                  <span className="px-3 py-1 rounded border text-xs font-semibold bg-white text-black border-gray-300">{project.type.toUpperCase()}</span>
                  <span className="px-3 py-1 rounded border text-xs font-semibold bg-white text-black border-gray-300">{project.class.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                <p className="italic text-gray-700 mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">{project.location}</p>
              </div>
              <div>
                <Link href={`/projects/${project.slug}`}>
                  <button className="mt-2 px-6 py-2 bg-black text-white font-normal rounded-sm flex items-center gap-2 hover:bg-gray-900 transition">
                    Learn More
                    <span className="inline-block ml-1">›</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 