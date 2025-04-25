import WhoWeAre from '@/components/who-we-are';
import PlatformCards from '@/components/platform-cards';
import WhySecondaryMarkets from '@/components/why-secondary-markets';
import InvestmentPhilosophy from '@/components/investment-philosophy';
import Founders from '@/components/founders';
import JointVenture from '@/components/joint-venture';
import NewsInsights from '@/components/news-insights';
import HeroBanner from '@/components/hero-banner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Platform Cards Section */}
      <PlatformCards />

      {/* Why Secondary Markets Section */}
      <WhySecondaryMarkets />

      {/* Investment Philosophy Section */}
      <InvestmentPhilosophy />

      {/* Founders Section */}
      <Founders />

      {/* Joint Venture Section */}
      <JointVenture />

      {/* News & Insights Section */}
      <NewsInsights />
    </div>
  );
}
