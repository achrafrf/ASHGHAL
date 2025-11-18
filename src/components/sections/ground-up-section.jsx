"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const GroundUpSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row lg:h-[600px]">
        {/* Left Section: Text - 45% width on desktop */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-16">
          <h2 className="text-center font-bold text-[#666666] text-[32px] lg:text-[48px] leading-tight">
            {t('ground.title')}
          </h2>
        </div>

        {/* Mobile-only gap of 32px */}
        <div className="h-8 w-full block lg:hidden" aria-hidden="true" />

        {/* Right Section: Image - 55% width on desktop */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa42e4029a560516638f13_SVL75_Track_Loader_swift_-9.png"
            alt="Red ASHGHAL-branded track loader on a white background."
            width={558}
            height={443}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GroundUpSection;