'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  { title: 'Innovation', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Community',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Integrity',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Excellence', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Growth',     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
]

export default function CareersPage() {
  const [active, setActive] = useState(0)
  const [showContent, setShowContent] = useState(0)

  useEffect(() => {
    setShowContent(-1)
    const timeout = setTimeout(() => setShowContent(active), 350)
    return () => clearTimeout(timeout)
  }, [active])

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-16 px-8 text-white" style={{ minHeight: '340px' }}>
        <Image
          src="/images/niagara-falls.png"
          alt="Niagara Falls Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="max-w-5xl mx-auto relative z-20">
          <p className="uppercase font-semibold tracking-widest text-sm mb-2">Careers</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Your Next Chapter Starts Here</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Join Our Team and Build the Future.</h1>
          <Link href="/jobs" className="mt-6 inline-block border border-white text-white px-6 py-2 hover:bg-black hover:text-white transition-colors">
            VIEW ALL JOBS
          </Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/5 h-[400px] bg-gray-400" />
          <div className="w-full md:w-1/2 flex flex-col items-end text-right space-y-2 max-w-2xl pr-12 md:pr-24 lg:pr-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-1">Ambitious Projects Need Ambitious People</h2>
            <p className="text-body leading-snug mb-1">We are community-driven and individually empowered — with a belief in hiring ambitious, purpose-led people and giving them the tools to grow.</p>
            <p className="text-body leading-snug mb-1">This mindset is grounded in our values: Innovation, Integrity, Community, and Excellence.</p>
            <p className="text-body leading-snug">At M5V, everyone has a voice and a seat at the table. We value bold thinking, strong relationships, and a hands-on approach. Our culture rewards initiative, fosters collaboration, and creates space for both personal growth and lasting impact.</p>
          </div>
        </div>
      </section>

      {/* Values Section ("WHAT WE BELIEVE") */}
      <section className="w-full bg-black-primary text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 min-h-[480px]">
          {/* Left panel */}
          <div className="flex flex-col justify-center p-8">
            <div className="uppercase font-semibold tracking-widest text-sm mb-4">WHAT WE BELIEVE</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">Built on Values. Driven by Purpose.</h3>
            <p className="text-body leading-snug mb-1">At M5V, our work isn't just about buildings, it's about creating impact that lasts. Every project, every partnership, and every decision we make is guided by a set of values we live by daily.</p>
            <p className="text-body leading-snug mb-1">Here's what drives us..</p>
          </div>
          {/* Right panel: vertical accent-blue bars */}
          <div className="flex flex-1 flex-row overflow-x-auto md:overflow-x-visible">
            {values.map((val, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={
                  `relative flex flex-col cursor-pointer transition-all duration-500
                  ${active === i ? 'flex-[3] bg-accent-blue/90 z-10' : 'flex-1 bg-accent-blue'}
                  min-w-[140px] border-l border-black-primary first:border-l-0`
                }
              >
                <div className="flex-1 flex flex-col justify-center relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start pl-4">
                    <span className="text-lg font-calibre tracking-wider rotate-90 whitespace-nowrap text-left text-white mb-8">
                      {String(i+1).padStart(2,'0')} {val.title.toUpperCase()}
                    </span>
                  </div>
                  {showContent === i && (
                    <div className="flex flex-col justify-center items-end pr-8 pl-24 py-8 w-full">
                      <p className="text-white text-body text-right leading-relaxed max-w-xs md:max-w-sm lg:max-w-md">
                        {val.body}
                      </p>
                    </div>
                  )}
                </div>
                <span className="mb-4 flex justify-center text-3xl font-bold text-white">{active === i ? '-' : '+'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-14">
          <h2 className="text-h2 font-bold font-calibre text-black-primary">Why Work for Us</h2>
          <p className="mt-2 mb-8 text-body">Our Commitment to Talent and Growth</p>
          <div className="space-y-4">
            {[
              { title: 'Impact-Driven Work', desc: "Shape communities that redefine real estate in Ontario's fastest-growing markets." },
              { title: 'Access to Leadership', desc: 'Work alongside experienced founders and leadership with deep real estate expertise.' },
              { title: 'Growth and Advancement', desc: 'Structured opportunities for career development, mentorship, and professional growth.' },
              { title: 'Continuous Learning', desc: 'Resources and initiatives that support personal and professional development.' },
              { title: 'People-First Philosophy', desc: 'An environment that values wellbeing, ownership, and long-term success.' },
              { title: 'Entrepreneurial Mindset', desc: 'We foster innovation, creativity, and ownership at every level of the organization.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start py-4 border-t border-gray-200">
                <div className="w-8 h-8 bg-accent-blue/20 mr-4 rounded-full" />
                <div>
                  <div className="font-bold text-black-primary text-body">{item.title}</div>
                  <div className="text-black-primary text-small">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTAs */}
      <section className="bg-black-primary text-off-white py-12">
        <div className="container mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <h3 className="text-h3 font-bold">Ready to take the Next Step?</h3>
            <p className="mt-2 text-body">Discover how your ambition can shape the future with us.</p>
            <Link href="/jobs" className="mt-4 inline-block border border-off-white text-off-white px-6 py-2 hover:bg-accent-blue hover:text-off-white transition-colors">
              VIEW ALL JOBS
            </Link>
          </div>
          {/* Right */}
          <div>
            <h3 className="text-h3 font-bold">Can't Find a Job You're Looking For?</h3>
            <p className="mt-2 text-body">
              Send us your resume and cover letter — and let's start the conversation.
            </p>
            <Link href="mailto:hiring@m5vinc.com" className="mt-4 inline-block border border-off-white text-off-white px-6 py-2 hover:bg-accent-blue hover:text-off-white transition-colors">
              APPLY HERE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
