const NewsInsights = () => {
  const newsItems = [
    {
      date: '2024-04-24',
      title: 'M5V Asset Management Completes New Strategic Investment in European Logistics Platform',
      category: 'Press Release'
    },
    {
      date: '2024-04-20',
      title: 'M5V Asset Management Announces Launch of Core-Plus Infrastructure Fund',
      category: 'News'
    },
    {
      date: '2024-04-15',
      title: 'M5V Asset Management Provides Record Investment Returns to Investors in Q1',
      category: 'Insights'
    }
  ];

  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-h2 mb-4">Stay up to date with our latest insights and firm announcements.</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="group cursor-pointer"
            >
              {/* Date and Category */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-accent-blue">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-black-primary group-hover:text-accent-blue transition-colors">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-accent-blue hover:underline"
          >
            View All News & Insights
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights; 