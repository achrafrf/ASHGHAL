"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const clients =[
  {
    name: 'Caterpillar',
    logo: 'https://pnghunter.com/get-logo.php?id=3842',
  },
  {
    name: 'Komatsu',
    logo: 'https://i.pinimg.com/736x/01/ff/d0/01ffd07c3394e32bae86845d7d10b7c5.jpg',
  },
  {
    name: 'Volvo Construction',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJ930Vz-4aXv7Q35-03Wn8mxSezbg5fZlYQ&s',
  },
  {
    name: 'JCB',
    logo: 'https://download.logo.wine/logo/JCB_(company)/JCB_(company)-Logo.wine.png',
  },
  {
    name: 'LafargeHolcim',
    logo: 'https://www.lafargeholcim.ma/sites/morocco/files/styles/teaser_3cols/public/2022-07/logo-image-rt.jpg.webp?h=e7f7be8c&itok=o9xMbL1c',
  },
  {
    name: 'Vinci Construction',
    logo: 'https://images.seeklogo.com/logo-png/36/1/vinci-construction-logo-png_seeklogo-361872.png',
  },
];

const ClientsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f9f9f9] border-t border-gray-200">
      <div className="mx-auto max-w-[1200px] px-10 py-24">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#ff0000] mb-2">
            Trusted Partners
          </h2>
          <h3 className="text-[36px] font-black italic text-[#1a1a1a] uppercase tracking-tighter">
            {t('clients.title') || 'POWERING INDUSTRY LEADERS'}
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center w-full p-4 group cursor-pointer">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                title={client.name}
                className="max-w-[120px] md:max-w-[140px] h-auto object-contain grayscale opacity-40 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;