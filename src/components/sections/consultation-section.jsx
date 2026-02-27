"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Send, Phone, Mail, User } from "lucide-react";

const ConsultationSection = () => {
  const { t } = useLanguage();

  return (
    // 1. نقصنا الـ Padding هنا (py-8 بدل py-24)
    <section className="py-8 lg:py-12 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 2. نقصنا الطول ديال الكاروي كامل (lg:min-h-[550px] بدل 750px) */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 lg:min-h-[650px]">
          
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto overflow-hidden group">
            <Image
              src="/achraf-rf.png"
              alt="Consultation"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
            {/* 3. نقصنا الـ Padding الداخلي (lg:p-10 بدل 16) */}
            <div className="w-full max-w-[500px] p-6 sm:p-8 lg:p-10">
              <div className="mb-6"> {/* نقصنا المارچين هنا */}
                <span className="text-red-600 font-bold text-xs uppercase tracking-[2px] block mb-2">
                   Get in Touch
                </span>
                <h3 className="text-[28px] lg:text-[32px] font-black text-[#1a1a1a] mb-2 font-display leading-tight">
                  {t('consultation.title')}
                </h3>
                <div className="w-12 h-1 bg-red-600 mb-4 rounded-full"></div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3"> {/* نقصنا الفراغ بين الـ Inputs لـ 3 بدل 5 */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder={t('consultation.name')}
                    className="h-[50px] rounded-lg border-gray-200 bg-gray-50/50 pl-11 text-sm focus-visible:ring-red-600"
                  />
                </div>

                <div className="relative flex gap-3"> {/* درنا Email و Phone فسطر واحد باش نربحو الطول */}
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="email"
                      placeholder={t('consultation.email')}
                      className="h-[50px] rounded-lg border-gray-200 bg-gray-50/50 pl-11 text-sm focus-visible:ring-red-600"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="tel"
                      placeholder={t('consultation.phone')}
                      className="h-[50px] rounded-lg border-gray-200 bg-gray-50/50 pl-11 text-sm focus-visible:ring-red-600"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Textarea
                    placeholder={t('consultation.message')}
                    className="min-h-[90px] rounded-lg border-gray-200 bg-gray-50/50 p-4 text-sm focus-visible:ring-red-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-lg w-full transition-all shadow-md flex gap-2 items-center justify-center"
                >
                  <span>{t('consultation.submit')}</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;