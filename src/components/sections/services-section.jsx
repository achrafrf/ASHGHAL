"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const imageGallery = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa421017088a0ec7d126de_swift_holdings_img_023-7.jpg",
    alt: "Commercial kitchen with stainless steel counters and equipment",
    className: "col-span-2"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41fc7b4ea59effaf1dff_swift_holdings_img_036-6.jpg",
    alt: "Industrial baking ovens in a commercial kitchen",
    className: ""
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41e4b7932cf715672b1d_swift_holdings_img_037-5.jpg",
    alt: "Restaurant dining area with red chairs and tables",
    className: ""
  }
];

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.description")
    },
    {
      title: t("services.tenant.title"),
      description: t("services.tenant.description")
    },
    {
      title: t("services.construction.title"),
      description: t("services.construction.description")
    },
    {
      title: t("services.remodeling.title"),
      description: t("services.remodeling.description")
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-10 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          
          <div className="w-full lg:w-2/5">
            {services.map((service) => (
              <div key={service.title} className="mb-8">
                <h2 className="font-semibold text-2xl text-[#666666]">
                  {service.title}
                </h2>
                <p className="mt-2 text-base text-[#777777]">
                  {service.description}
                </p>
              </div>
            ))}
            <div>
              <a 
                href="/services" 
                className="inline-block rounded-[4px] bg-[#ff0000] px-[40px] py-[14px] font-semibold text-white transition-colors hover:bg-[#cc0000]"
              >
                {t('services.cta')}
              </a>
            </div>
          </div>

          <div className="mt-12 w-full lg:mt-0 lg:w-3/5">
            <div className="grid grid-cols-2 gap-4">
              {imageGallery.map((image, index) => (
                <div key={index} className={`relative aspect-[3/2] overflow-hidden rounded-[4px] ${image.className}`}>
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1023px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;