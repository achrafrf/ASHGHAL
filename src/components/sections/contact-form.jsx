'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#666666] mb-4">
              Free Consultation
            </h2>
            <p className="text-[#777777] mb-8">
              Fill out the form below and we'll get back to you as soon as possible to discuss your project needs.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#dddddd] focus:border-[#0066cc] focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#dddddd] focus:border-[#0066cc] focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#dddddd] focus:border-[#0066cc] focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-[#dddddd] focus:border-[#0066cc] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-[#ff0000] text-white px-12 py-3 hover:bg-[#cc0000] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa4080b4dcc85c654a8567_swift_holdings_img_031-3.jpg"
              alt="Construction site"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
