import Image from 'next/image';
import StickyHeader from '@/components/sticky-header';
import Link from 'next/link';

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
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group"
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 