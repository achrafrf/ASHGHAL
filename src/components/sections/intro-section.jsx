"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="Down" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div
          data-w-id="60b78912-1d67-d48a-befd-ef3463c18f00"
          className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[60px]"
        >
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6 text-[28px] font-bold leading-[1.2] text-[#666666] lg:text-[42px]">
              {t('intro.title')}
            </h1>
            <p className="text-lg leading-[1.7] text-[#777777]">
              {t('intro.paragraph1')}
              <br />
              <br />
              {t('intro.paragraph2')}
            </p>
          </div>

          {/* Right Column: Image */}
          <div
            data-w-id="0a341af7-74fa-0922-f51e-e58d24476381"
            className="aspect-[4/3] w-full rounded-lg bg-cover bg-center lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa4080b4dcc85c654a8567_swift_holdings_img_031-3.jpg')",
            }}
            aria-label="ASHGHAL worker showing company branding"
          >
            {/* This div is intentionally empty for the background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;