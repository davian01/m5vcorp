import Image from 'next/image';

const HeroBanner = () => (
  <div className="h-screen bg-black-primary relative flex items-center justify-center">
    <Image
      src="/images/chicago-cityscape.png"
      alt="Chicago Cityscape"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 px-6 text-center">
      <p className="text-accent-blue tracking-widest uppercase text-sm mb-4">
        <span className="text-off-white">ACQUIRE. EXECUTE. DELIVER.</span>
      </p>
      <h1 className="text-h1 text-off-white max-w-3xl">
        <span className="text-accent-blue">We</span> <span className="text-accent-blue">build</span> where <span className="text-accent-blue">growth</span> is going, unlocking value across Ontario's newest markets.
      </h1>
    </div>
  </div>
);

export default HeroBanner; 