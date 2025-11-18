import React from 'react';

const ContactInfo = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto max-w-[1200px] px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Phone */}
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff0000] text-white text-2xl">
                📞
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#666666] mb-2">Phone</h3>
            <a href="tel:281-384-8726" className="text-[#777777] text-lg hover:text-[#ff0000] transition-colors">
              281-384-8726
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff0000] text-white text-2xl">
                ✉️
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#666666] mb-2">Email</h3>
            <a href="mailto:greg@swiftholdings.com" className="text-[#777777] text-lg hover:text-[#ff0000] transition-colors">
              greg@swiftholdings.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff0000] text-white text-2xl">
                📍
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#666666] mb-2">Location</h3>
            <p className="text-[#777777] text-lg">
              Conroe, Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
