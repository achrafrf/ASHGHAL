"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const clients = [
  {
    name: 'Subway',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e89264306f67076cdcef52b_Subway-16.svg',
  },
  {
    name: 'Kolache Factory',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e892792ec626f61032b4397_swift_Logo_kolachefactory-17.svg',
  },
  {
    name: 'Hand & Stone',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e8927a3acdbb5619b39d2ee_swift_Logo_hand_26stone-18.svg',
  },
  {
    name: "Schlotzsky's",
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e8927b5bcf6e1e638c47e26_swift_Logo_schlotzskys-19.svg',
  },
  {
    name: 'Shell',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e8927c3bcf6e1ab73c47e34_swift_Logo_shell-20.svg',
  },
  {
    name: 'Chevron',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e8927d4fbc2c0087ed5837c_swift_Logo_chevron-21.svg',
  },
];

const ClientsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white dark:bg-white text-black">
      <div className="mx-auto max-w-[1100px] px-10 py-20">
        <h2 className="text-center text-[36px] font-bold text-[#666666] mb-16">
          {t('clients.title')}
        </h2>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-12">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center p-6">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-[180px] h-auto object-contain grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;