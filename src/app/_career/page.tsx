'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const values = [
  { title: 'Innovation', body: 'We embrace new ideas and creative solutions to drive progress and set new standards in our industry.' },
  { title: 'Community',  body: 'We build strong relationships and foster a sense of belonging, both within our team and in the communities we serve.' },
  { title: 'Integrity',  body: 'We act with honesty, transparency, and respect, upholding the highest ethical standards in all we do.' },
  { title: 'Excellence', body: 'We strive for outstanding results, continuously improving and delivering quality in every project.' },
  { title: 'Growth',     body: 'We support personal and professional development, encouraging ambition and learning at every stage.' },
]

export default function CareersPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-off-white font-calibre text-black-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="uppercase tracking-wider text-small">CAREERS</div>
          <h1 className="mt-4 text-h1 font-bold">Your Next Chapter Starts Here</h1>
          <Link href="/jobs" className="mt-6 inline-block border border-black-primary text-black-primary px-6 py-2 hover:bg-accent-blue hover:text-off-white transition-colors">
            VIEW ALL JOBS
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 h-64 bg-gray-200 rounded-lg" />
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-h2 font-bold font-calibre text-black-primary">Ambitious Projects Need Ambitious People</h2>
            <p className="text-body">We are community-driven and individually empowered — with a belief in hiring ambitious, purpose-led people and giving them the tools to grow.</p>
            <p className="text-body">This mindset is grounded in our values: Innovation, Integrity, Community, and Excellence.</p>
            <p className="text-body">At M5V, everyone has a voice and a seat at the table. We value bold thinking, strong relationships, and a hands-on approach. Our culture rewards initiative, fosters collaboration, and creates space for both personal growth and lasting impact.</p>
          </div>
        </div>
      </section>

      {/* Values Section ("WHAT WE BELIEVE") */}
      <section className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left panel */}
        <div className="bg-black-primary text-white md:w-1/3 w-full p-10 flex flex-col justify-center">
          <div className="uppercase font-bold text-small mb-2">WHAT WE BELIEVE</div>
          <h3 className="text-h2 font-bold font-calibre mb-6">Built on Values. Driven by Purpose.</h3>
          <p className="text-body mb-6">At M5V, our work isn't just about buildings, it's about creating impact that lasts. Every project, every partnership, and every decision we make is guided by a set of values we live by daily.</p>
          <p className="text-body">Here's what drives us..</p>
        </div>
        {/* Right panel: vertical accent-blue bars */}
        <div className="flex flex-1 flex-row divide-x divide-black-primary">
          {values.map((val, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between bg-accent-blue text-white w-1/5 min-w-[90px] py-8 px-2"
            >
              <span className="text-lg font-calibre tracking-wider rotate-90 whitespace-nowrap mb-8">{String(i+1).padStart(2,'0')} {val.title.toUpperCase()}</span>
              <span className="text-3xl font-bold">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
