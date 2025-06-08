import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-primary font-calibre pt-28">
      {/* Top Bar */}
      <div className="w-full h-20 bg-black-primary" />

      {/* Contact Us Heading */}
      <h1 className="w-full max-w-[1200px] mx-auto text-off-white text-[16px] md:text-[24px] font-medium mb-8 md:mb-12 uppercase tracking-wide">Contact Us</h1>

      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left Panel */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start px-0 md:px-0 mb-12 md:mb-0">
          <div className="w-full aspect-[3/5] relative overflow-hidden mb-8">
            <Image
              src="/images/location/t3-junction-1.png"
              alt="Location"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 w-full px-6 md:px-0">
            <div className="text-[16px] leading-[24px] text-off-white">150 Sterling Rd,<br />Toronto,<br />ON M6R 0C6</div>
            <div className="text-[16px] leading-[24px] text-off-white">inquiries@m5vinc.com</div>
            <div className="text-[16px] leading-[24px] text-off-white">416-457-6276</div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-start-7 md:col-end-13 w-full bg-accent-blue p-10 pt-16 flex flex-col">
          <h2 className="mb-10 text-[48px] leading-[56px] font-medium text-off-white">Send an Inquiry</h2>
          <form className="flex flex-col">
            {/* First Name */}
            <label htmlFor="firstName" className="mb-2 text-[18px] leading-[28px] text-off-white">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="Enter your first name" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)] mb-6" />

            {/* Last Name */}
            <label htmlFor="lastName" className="mb-2 text-[18px] leading-[28px] text-off-white">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Enter your last name" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)] mb-6" />

            {/* Email */}
            <label htmlFor="email" className="mb-2 text-[18px] leading-[28px] text-off-white">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)] mb-6" />

            {/* Phone */}
            <label htmlFor="phone" className="mb-2 text-[18px] leading-[28px] text-off-white">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="Enter your phone" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)] mb-6" />

            {/* Message */}
            <label htmlFor="message" className="mb-2 text-[18px] leading-[28px] text-off-white">Message</label>
            <textarea id="message" name="message" placeholder="Type your message" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] focus:outline-none resize-none placeholder:italic placeholder:text-[18px] placeholder:text-[rgba(255,255,255,0.6)] mb-6" rows={2} />

            {/* File Uploads */}
            <label htmlFor="file1" className="mb-2 text-[18px] leading-[28px] text-off-white">Upload Files</label>
            <input id="file1" name="file1" type="file" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] file:text-[rgba(255,255,255,0.6)] mb-6" />

            <label htmlFor="file2" className="mb-2 text-[18px] leading-[28px] text-off-white">Upload Files</label>
            <input id="file2" name="file2" type="file" className="w-full h-12 mb-6 bg-transparent border-0 border-b border-[rgba(255,255,255,0.6)] file:text-[rgba(255,255,255,0.6)] mb-6" />

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button type="submit" className="px-6 py-3 bg-black-primary text-off-white font-medium text-[16px] leading-[24px] min-w-[180px]">Submit Inquiry</button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-20 bg-black-primary" />
    </div>
  );
}
