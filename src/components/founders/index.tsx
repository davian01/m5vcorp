const Founders = () => {
  const founders = [
    {
      firstName: 'Sherard',
      lastName: 'McQueen',
      position: 'Sales & Marketing',
      image: '/images/team/Sherard.png'
    },
    {
      firstName: 'Yaseen',
      lastName: 'Nimjee',
      position: 'Construction & Development',
      image: '/images/team/Yaseen.png'
    },
    {
      firstName: 'Rajeev',
      lastName: 'Viswanathan',
      position: 'Finance & Operations',
      image: '/images/team/Rajeev.png'
    }
  ];

  return (
    <section className="bg-accent-blue py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-h2 mb-16 text-off-white">Our Founders</h2>
        
        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-black-primary aspect-[3/4] p-0 relative group"
            >
              <img src={founder.image} alt={`${founder.firstName} ${founder.lastName}`} className="w-full h-full object-cover" />
              {/* Text Container - Bottom Right */}
              <div className="absolute bottom-8 right-8 text-right">
                <div className="text-off-white">
                  <p className="text-2xl font-bold mb-1">
                    {founder.firstName}
                  </p>
                  <p className="text-2xl font-bold mb-3">
                    {founder.lastName}
                  </p>
                  <p className="text-off-white">
                    {founder.position}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Meet The Team Button */}
        <div className="text-center mt-12">
          <button className="border border-off-white text-off-white bg-accent-blue hover:bg-black-primary px-6 py-2 rounded-sm transition-colors duration-300">
            Meet The Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founders; 