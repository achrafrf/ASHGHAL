"use client";

import { Truck, Settings, HardHat, Compass, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Equipment Rental",
      desc: "Short & long-term rental for heavy machinery.",
      icon: Truck,
      tag: "Fleet"
    },
    {
      title: "Logistic Support",
      desc: "Specialized delivery to your construction site.",
      icon: Compass,
      tag: "Delivery"
    },
    {
      title: "On-Site Repair",
      desc: "Expert technicians available 24/7 for support.",
      icon: Settings,
      tag: "Support"
    },
    {
      title: "Technical Survey",
      desc: "Professional site and risk assessments.",
      icon: HardHat,
      tag: "Survey"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Header Section */}
      <section className="bg-[#111111] pt-40 pb-28 px-6 border-b-[10px] border-[#ff0000] relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-1 w-12 bg-brand-red"></div>
             <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            INDUSTRIAL <br /> <span className="text-neutral-300">SOLUTIONS.</span>
          </h1>
        </div>
      </section>

      {/* Services Grid - Smaller & Cleaner Squares */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group relative bg-neutral-50 border border-neutral-200 p-8 hover:bg-white hover:shadow-2xl hover:border-brand-red transition-all duration-500 flex flex-col h-full">
               {/* Icon */}
               <div className="mb-6 p-3 bg-white border border-neutral-100 w-fit group-hover:bg-brand-red group-hover:text-white transition-colors duration-500 shadow-sm">
                  <s.icon size={28} strokeWidth={2.5} />
               </div>
               
               {/* Content */}
               <h2 className="text-xl font-black uppercase italic mb-3 group-hover:text-brand-red transition-colors">
                 {s.title}
               </h2>
               <p className="text-neutral-500 text-sm font-bold leading-relaxed mb-6">
                 {s.desc}
               </p>

               {/* Bottom Tag */}
               <div className="mt-auto flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-widest text-neutral-400 uppercase">{s.tag}</span>
                  <ArrowRight size={16} className="text-neutral-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges - Modern & Clean */}
      <section className="container mx-auto px-6 mb-32 border-t border-neutral-100 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <TrustItem 
                icon={ShieldCheck} 
                title="Certified Safety" 
                desc="All equipment meets international safety standards." 
            />
            <TrustItem 
                icon={Clock} 
                title="24/7 Response" 
                desc="Immediate technical support whenever you need it." 
            />
            <TrustItem 
                icon={Truck} 
                title="Fast Logistics" 
                desc="Rapid deployment across the entire Moroccan territory." 
            />
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="container mx-auto px-6">
        <div className="bg-[#1a1a1a] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
            <div className="text-white text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-2 tracking-tighter">Ready to deploy?</h3>
                <p className="text-neutral-400 font-bold uppercase text-xs tracking-widest">Get your custom quote within 24 hours.</p>
            </div>
            <Link href="/contact" className="bg-brand-red text-white px-10 py-5 font-black uppercase italic tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-lg active:scale-95">
                Request Quote
            </Link>
        </div>
      </section>
    </div>
  );
}

const TrustItem = ({ icon: Icon, title, desc }) => (
    <div className="flex flex-col items-center">
        <Icon size={32} className="text-brand-red mb-4" />
        <h4 className="text-lg font-black uppercase italic mb-2">{title}</h4>
        <p className="text-neutral-500 text-xs font-bold leading-relaxed max-w-[200px]">{desc}</p>
    </div>
);