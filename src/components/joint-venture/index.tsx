const JointVenture = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/m5v_portfolio/Le_Falls.png')] bg-cover bg-center"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-off-white mb-6">
            Introducing Le Falls by M5V Developments
          </h2>
          
          <p className="text-body text-off-white/80 mb-8">
            A curated Niagara Falls townhome community, designed for modern living and lasting value.
          </p>

          <button className="border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-8 py-3 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default JointVenture; 