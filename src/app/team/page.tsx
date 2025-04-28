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
    <>
      <StickyHeader />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Team
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Meet the talented individuals behind our success. Each team member brings unique expertise and passion to our mission.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group"
              >
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
                >
                  <div className="relative h-64 w-full">
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
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-accent-blue">{member.position}</p>
                    {member.bio && (
                      <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 