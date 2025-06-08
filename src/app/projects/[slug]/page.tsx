import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import AnimatedDescription from './AnimatedDescription'
import AnimatedImage from './AnimatedImage'

async function getProjectData(slug: string) {
  const project = projects.find(p => p.slug === slug)
  if (!project) {
    notFound()
  }
  return project
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug)

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-8 text-white" style={{ minHeight: '480px' }}>
        <Image
          src={project.images[0]}
          alt={`${project.name} Hero`}
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="container mx-auto relative z-20">
          <div className="flex justify-between items-start max-w-5xl mx-auto">
            <div>
              <p className="uppercase font-semibold tracking-widest text-sm mb-2">Our Projects</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">{project.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-sm font-light">{project.assetClass}</p>
              <p className="text-sm font-light">{project.subType}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-16">
        <div className="relative -mt-16">
          <div className="flex gap-12 max-w-6xl mx-auto px-8">
            {/* Left Column - Description and Stats */}
            <div className="w-[67%] pt-8">
              <div className="prose max-w-none mt-16 mb-8">
                <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 px-[2rem]">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="bg-off-white p-2 hover:shadow-lg transition-shadow">
                    <p className="text-sm text-gray-500 capitalize mb-1">{formatKey(key)}</p>
                    <p className="text-xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Overlapping Image */}
            <div className="w-[33%]">
              <div className="aspect-[3/4] overflow-hidden bg-[color:var(--muted)] shadow-xl relative z-30 animate-[fade-in-up_1s_ease-out]">
                <Image
                  src={project.images[1]}
                  alt="Project gallery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Long Description */}
        <AnimatedDescription description={project.longDescription} />

        {/* Full Width Image */}
        <AnimatedImage 
          src={project.images[2]}
          alt="Project interior"
        />

        {/* Back Button */}
        <div className="text-center pb-12">
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 bg-[color:var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
