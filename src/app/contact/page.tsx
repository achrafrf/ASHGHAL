"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, Truck, Clock } from "lucide-react";

export default function ContactPage() {
  // Function بسيطة باش ما يوقعش Error في الـ Form حالياً
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      
      {/* --- 1. DARK HEADER (Fixes Navbar Visibility) --- */}
      <section className="bg-[#111111] pt-40 pb-28 px-6 border-b-[10px] border-[#ff0000] relative">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-[#ff0000]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Contact Center</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
                GET IN <span className="text-[#ff0000]">TOUCH.</span>
              </h1>
            </div>
            <div className="hidden md:block text-right">
               <p className="text-neutral-500 font-black uppercase text-xs tracking-widest">Available 24/7 for support</p>
            </div>
          </div>
        </div>
        {/* Decorative Truck Icon Background */}
        <Truck className="absolute -bottom-10 -right-10 text-white opacity-5 w-80 h-80 -rotate-12" />
      </section>

      {/* --- 2. CONTACT DETAILS GRID --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ContactCard 
            icon={<Phone size={32} />} 
            title="Call Us" 
            value="+212 767 11 33 63" 
            desc="Direct line to dispatch"
          />
          <ContactCard 
            icon={<Mail size={32} />} 
            title="Email Us" 
            value="itsachrafrafiq@gmail.com" 
            desc="Average response: 2h"
          />
          <ContactCard 
            icon={<MapPin size={32} />} 
            title="Visit Yard" 
            value="Casablanca, Morocco" 
            desc="Zone Industrielle"
          />
        </div>

        {/* --- 3. FORM SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black italic uppercase mb-6 tracking-tight">Request a Quote</h2>
            <p className="text-neutral-500 font-bold mb-10 leading-relaxed">
              Fill out the form below and our technical team will get back to you with a detailed quote for your project.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-neutral-400">Full Name</label>
                  <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 p-4 focus:border-[#ff0000] outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-neutral-400">Email Address</label>
                  <input type="email" required className="w-full bg-neutral-50 border border-neutral-200 p-4 focus:border-[#ff0000] outline-none font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400">Subject / Project Type</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 p-4 focus:border-[#ff0000] outline-none font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400">Message</label>
                <textarea rows="5" className="w-full bg-neutral-50 border border-neutral-200 p-4 focus:border-[#ff0000] outline-none font-bold resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#ff0000] text-white px-12 py-5 font-black uppercase italic tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3">
                Send Dispatch <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right side info */}
          <div className="lg:w-1/2 bg-[#1a1a1a] p-10 md:p-16 text-white w-full">
            <h3 className="text-3xl font-black italic uppercase mb-8 leading-none">Emergency Support</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Clock className="text-[#ff0000] mt-1" size={24} />
                <div>
                  <p className="font-black uppercase text-sm mb-1 italic">On-Site Technical Assistance</p>
                  <p className="text-neutral-400 text-xs font-bold">Our engineers are available 24/7 to solve any mechanical issues on your project site.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck className="text-[#ff0000] mt-1" size={24} />
                <div>
                  <p className="font-black uppercase text-sm mb-1 italic">Rapid Deployment</p>
                  <p className="text-neutral-400 text-xs font-bold">Immediate transport of machinery within the Casablanca-Settat region.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-neutral-800">
               <span className="text-neutral-500 font-black uppercase text-[10px] tracking-widest block mb-2">Emergency Hotline</span>
               <span className="text-4xl font-black text-[#ff0000] italic">+212 767 11 33 63</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component باش نربحو الوقت ومايوقعش تعارض
function ContactCard({ icon, title, value, desc }) {
  return (
    <div className="bg-white border border-neutral-200 p-10 flex flex-col items-center text-center group hover:border-[#ff0000] hover:shadow-2xl transition-all duration-500">
      <div className="text-[#ff0000] mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">{title}</h3>
      <p className="text-2xl font-black uppercase italic mb-2 tracking-tight">{value}</p>
      <p className="text-xs font-bold text-neutral-500">{desc}</p>
    </div>
  );
}