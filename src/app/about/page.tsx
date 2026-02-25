"use client";

import { HardHat, ShieldCheck, Users, Factory, ArrowRight, Target, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      
      {/* Hero Section - Clean & Massive */}
      <section className="bg-[#111111] pt-40 pb-28 px-6 border-b-[10px] border-[#ff0000] relative">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          <div className="lg:w-3/5">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-brand-red"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">Our Story</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
              WE BUILD THE <br /> <span className="text-neutral-300">FOUNDATION.</span>
            </h1>
          </div>
          <div className="lg:w-2/5 pb-2">
            <p className="text-neutral-500 font-bold text-lg leading-relaxed border-l-4 border-neutral-100 pl-6">
              ASHGHAL is the leading heavy equipment partner in Morocco. From massive infrastructure to private builds, we provide the steel and power that drives progress.
            </p>
          </div>
        </div>
      </section>

      {/* Big Industrial Image Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction Excellence" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Overlay Text */}
          <div className="absolute bottom-10 left-10 bg-white p-8 hidden md:block border-b-8 border-brand-red">
             <span className="block text-4xl font-black italic uppercase">Established 2014</span>
             <span className="text-neutral-400 font-bold uppercase text-xs tracking-widest">A Decade of Industrial Reliability</span>
          </div>
        </div>
      </section>

      {/* Stats Grid - Clean White Style */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
           <StatItem number="10+" label="Years of Grit" />
           <StatItem number="120+" label="Projects Completed" />
           <StatItem number="55" label="Heavy Machines" />
           <StatItem number="24/7" label="Tech Support" />
        </div>
      </section>

      {/* Values - Same Square Style as Services */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black italic uppercase tracking-tight">Our Core <span className="text-brand-red">Principles</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueItem 
              icon={Target} 
              title="Precision" 
              desc="We don't do 'approximate'. Our logistics and equipment maintenance are timed to perfection."
            />
            <ValueItem 
              icon={Award} 
              title="Excellence" 
              desc="Providing only world-class brands like CAT, Komatsu, and JCB to ensure your site never stops."
            />
            <ValueItem 
              icon={Users} 
              title="Partnership" 
              desc="We are not just a vendor; we are your project partners. Your success is our reputation."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA - Matching Services CTA */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-[#1a1a1a] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 rounded-sm">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white leading-none mb-4">
              LET'S START THE <br /> <span className="text-brand-red">EXCAVATION.</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase text-[10px] tracking-[0.4em]">Browse our premium fleet now</p>
          </div>
          <Link href="/catalog" className="group bg-brand-red text-white px-12 py-6 font-black uppercase italic tracking-widest hover:bg-white hover:text-brand-red transition-all flex items-center gap-3">
             VIEW CATALOG <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// Sub-components لربح الوقت والحفاظ على التناسق
const StatItem = ({ number, label }) => (
  <div className="flex flex-col items-start border-l-2 border-neutral-100 pl-6">
    <span className="text-5xl font-black italic text-[#1a1a1a] mb-2">{number}</span>
    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{label}</span>
  </div>
);

const ValueItem = ({ icon: Icon, title, desc }) => (
  <div className="bg-white border border-neutral-200 p-10 hover:border-brand-red hover:shadow-xl transition-all duration-500 group">
    <Icon size={32} className="text-brand-red mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-black uppercase italic mb-4">{title}</h3>
    <p className="text-neutral-500 text-sm font-bold leading-relaxed">{desc}</p>
  </div>
);