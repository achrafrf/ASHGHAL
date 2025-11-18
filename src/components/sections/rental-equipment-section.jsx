"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function RentalEquipmentSection() {
  const { t } = useLanguage();

  const equipment = [
    {
      name: t("equipment.crane"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/professional-construction-crane-mobile-c-55d37667-20251118001927.jpg",
      description: t("equipment.crane.description")
    },
    {
      name: t("equipment.loader"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/red-compact-track-loader-construction-eq-251f68ac-20251118001927.jpg",
      description: t("equipment.loader.description")
    },
    {
      name: t("equipment.excavator"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/large-excavator-construction-equipment-y-66e63b79-20251118001927.jpg",
      description: t("equipment.excavator.description")
    },
    {
      name: t("equipment.telehandler"),
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/telehandler-forklift-construction-equipm-4a7a2587-20251118001926.jpg",
      description: t("equipment.telehandler.description")
    }
  ];

  return (
    <section className="py-20 px-10 bg-white">
      <div className="container mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#666666] mb-4">
            {t("equipment.title")}
          </h2>
          <p className="text-lg text-[#777777] max-w-2xl mx-auto">
            {t("equipment.description")}
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-[#e5e5e5] overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Equipment Image */}
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Equipment Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#666666] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#777777] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/equipment-rental"
            className="inline-block bg-[#ff0000] text-white font-semibold px-10 py-3.5 transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
          >
            {t("equipment.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}