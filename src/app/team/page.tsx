import Image from 'next/image';
import StickyHeader from '@/components/sticky-header';

interface TeamMember {
  name: string;
  position: string;
  image?: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    { name: 'Sherard McQueen', position: 'Co-Founder | Sales & Marketing', image: '/images/team/Sherard.png' },
    { name: 'Yaseen Nimjee', position: 'Co-Founder | Construction & Development', image: '/images/team/Yaseen.png' },
    { name: 'Rajeev Viswanathan', position: 'CFO | Finance & Operations', image: '/images/team/Rajeev.png' },
    { name: 'Linda Ford', position: 'Director of Entitlement', image: '/images/team/Linda.png' },
    { name: 'Sophia Bailey', position: 'Director of Sales', image: '/images/team/Sophie.png' },
    { name: 'Leo Thomas', position: 'VP, Construction', image: '/images/team/Yogesh.png' },
    { name: 'Reza Farahdel, CPA', position: 'Controller', image: '/images/team/Geoff.png' },
    { name: 'Member 8', position: 'Position 8' },
    { name: 'Member 9', position: 'Position 9' }
  ];

  return (
    <>
      <StickyHeader />
      <div className="bg-off-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 text-center text-accent-blue">Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-48 h-80 flex flex-col justify-between group">
                <div className="flex-1 bg-white mt-10 overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                </div>
                <div className="bg-black-primary p-3 text-left min-h-24 group-hover:bg-accent-blue transition-colors duration-300">
                  <p className="text-off-white text-base font-bold mb-1">{member.name}</p>
                  <p className="text-off-white text-xs">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 