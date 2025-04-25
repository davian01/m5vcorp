import StickyHeader from '@/components/sticky-header';

const Team = () => {
  const teamMembers = [
    { name: 'Sherard McQueen', position: 'Co-Founder | Sales & Marketing', image: '/images/team/Sherard.png' }, // Member 1
    { name: 'Yaseen Nimjee', position: 'Co-Founder | Construction & Development', image: '/images/team/Yaseen.png' }, // Member 2
    { name: 'Rajeev Viswanathan', position: 'CFO | Finance & Operations', image: '/images/team/Rajeev.png' }, // Member 3
    { name: 'Linda Ford', position: 'Director of Entitlement', image: '/images/team/Linda.png' }, // Member 4
    { name: 'Sophia Bailey', position: 'Director of Sales', image: '/images/team/Sophie.png' }, // Member 5
    { name: 'Leo Thomas', position: 'VP, Construction', image: '/images/team/Yogesh.png' }, // Member 6
    { name: 'Reza Farahdel, CPA', position: 'Controller', image: '/images/team/Geoff.png' }, // Member 7
    { name: 'Member 8', position: 'Position 8' }, // Placeholder
    { name: 'Member 9', position: 'Position 9' } // Placeholder
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
                <div className="flex-1 bg-white mt-10 overflow-hidden">
                  {member.image && <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />}
                </div>
                <div className="bg-black-primary p-3 text-left min-h-24 group-hover:bg-accent-blue">
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
};

export default Team; 