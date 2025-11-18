"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ConsultationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f7f7f7]">
      <div className="flex flex-col lg:flex-row lg:h-[700px]">
        {/* Left Side: Form */}
        <div className="w-full bg-white flex items-center justify-center">
          <div className="w-full max-w-[500px] p-8 sm:p-12 lg:p-[60px]">
            <div className="mb-8">
              <h3 className="text-[32px] font-bold text-[#666666] mb-2 font-display">
                {t('consultation.title')}
              </h3>
              <p className="text-base text-[#777777] leading-7 font-body">
                {t('consultation.description')}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-[15px]">
                <Input
                  type="text"
                  placeholder={t('consultation.name')}
                  className="h-[50px] w-full rounded-[4px] border border-[#dddddd] bg-white p-3 text-base text-[#333] placeholder:text-[#999] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066cc] focus-visible:border-[#0066cc] focus-visible:ring-offset-0"
                />
                <Input
                  type="email"
                  placeholder={t('consultation.email')}
                  className="h-[50px] w-full rounded-[4px] border border-[#dddddd] bg-white p-3 text-base text-[#333] placeholder:text-[#999] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066cc] focus-visible:border-[#0066cc] focus-visible:ring-offset-0"
                />
                <Input
                  type="tel"
                  placeholder={t('consultation.phone')}
                  className="h-[50px] w-full rounded-[4px] border border-[#dddddd] bg-white p-3 text-base text-[#333] placeholder:text-[#999] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066cc] focus-visible:border-[#0066cc] focus-visible:ring-offset-0"
                />
                <Textarea
                  placeholder={t('consultation.message')}
                  className="min-h-[100px] w-full rounded-[4px] border border-[#dddddd] bg-white p-3 text-base text-[#333] placeholder:text-[#999] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0066cc] focus-visible:border-[#0066cc] focus-visible:ring-offset-0"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#ff0000] text-white font-bold text-base py-[14px] px-[48px] rounded-[4px] h-auto mt-[15px] transition-colors duration-300 hover:bg-[#cc0000] w-full sm:w-auto"
              >
                {t('consultation.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;