import { newsItems } from '@/lib/news';
import FeaturedNewsCard from '@/components/news/FeaturedNewsCard';
import NewsList from '@/components/news/NewsList';
import Image from 'next/image';

// TODO: Replace with getNews() function for Sanity integration
const getNews = () => newsItems;

export default function NewsPage() {
  const allNews = getNews();
  const [featured, ...others] = allNews;

  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-16 px-8 text-off-white mt-[72px]" style={{ minHeight: '340px' }}>
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
          <p className="uppercase font-semibold tracking-widest text-sm mb-2">News</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">
            The latest insights from our experts.
          </h1>
        </div>
      </div>

      {/* News Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <FeaturedNewsCard item={featured} />
        <NewsList items={others} />
      </section>
    </main>
  );
}
