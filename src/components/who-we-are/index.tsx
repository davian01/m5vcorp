const WhoWeAre = () => {
  const metrics = [
    {
      value: '$3B',
      label: 'Real estate sales achieved since 2008',
      footnote: 'in Canadian dollars, as of January 1, 2025'
    },
    {
      value: '$500M+',
      label: 'Development pipeline currently in progress',
      footnote: 'in Canadian dollars, as of January 1, 2025'
    },
    {
      value: '100+',
      label: 'Years of combined real estate experience among our leadership'
    },
    {
      value: '2',
      label: 'Core regions served: Niagara and Simcoe counties'
    }
  ];

  return (
    <section className="bg-black-primary text-off-white py-24">
      <div className="container mx-auto px-16">
        {/* Intro text */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-sm uppercase tracking-wider font-medium mb-8">Who We Are</h2>
          <p className="text-h2 leading-tight">
            We are builders of communities, not just buildings.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-accent-blue text-5xl font-bold mb-4">
                {metric.value}
              </div>
              <p className="text-body mb-2">
                {metric.label}
              </p>
              {metric.footnote && (
                <p className="text-sm text-off-white/60">
                  {metric.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 