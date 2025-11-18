"use client";

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="Top" className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <video
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/62c76a4182864344d214cd6b_swiftherovideo-poster-000-2.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://cdn.prod.website-files.com/5e88270cbebe7d00cafc971e/62c76a4182864344d214cd6b_swiftherovideo-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/5e88270cbebe7d00cafc971e/62c76a4182864344d214cd6b_swiftherovideo-transcode.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,0,0,0.7)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
        <h1 className="text-white font-black italic text-[80px] md:text-[120px] leading-[1.1] tracking-tight">
          ASHGHAL
        </h1>
        <div className="mt-6 text-white text-lg font-light">
          {t('hero.tagline')}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-block border-2 border-white bg-transparent py-3 px-8 text-white rounded-[4px] font-semibold transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#FF0000]"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;