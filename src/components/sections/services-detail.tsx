"use client";

import Image from "next/image";
import { Building2, Wrench, HardHat, PaintBucket } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Consulting & Planning",
    description:
      "From concept to completion, our expert team provides comprehensive consulting services to ensure your project succeeds. We help you navigate every aspect of commercial construction, including feasibility studies, budget planning, permitting, and project scheduling. Our goal is to make your vision a reality while maximizing efficiency and minimizing costs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41e4b7932cf715672b1d_swift_holdings_img_037-5.jpg",
  },
  {
    icon: Wrench,
    title: "Tenant Improvement",
    description:
      "Transform your commercial space to meet your specific business needs. Our tenant improvement services include interior renovations, space reconfigurations, mechanical upgrades, and ADA compliance modifications. We work efficiently to minimize disruption to your business operations while delivering quality results that enhance your workspace.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41fc7b4ea59effaf1dff_swift_holdings_img_036-6.jpg",
  },
  {
    icon: HardHat,
    title: "New Construction",
    description:
      "Building from the ground up is our specialty. Whether it's a retail center, restaurant, office building, or industrial facility, we have the expertise and equipment to handle projects of any size. Our team manages every phase from site preparation and foundation work to final finishes, ensuring your new construction project is completed on time and within budget.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa42e4029a560516638f13_SVL75_Track_Loader_swift_-9.png",
  },
  {
    icon: PaintBucket,
    title: "Remodeling",
    description:
      "Breathe new life into your existing commercial space with our remodeling services. We specialize in updating and modernizing restaurants, retail stores, offices, and other commercial properties. Our comprehensive approach includes design consultation, structural modifications, updated finishes, and technology integration to create spaces that meet today's standards.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa421017088a0ec7d126de_swift_holdings_img_023-7.jpg",
  },
];

export default function ServicesDetail() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#666666] md:text-5xl">
            What We Do
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#777777]">
            ASHGHAL provides comprehensive commercial construction services
            throughout Texas. Our experienced team delivers quality results on every
            project.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
                    <Icon className="h-8 w-8 text-brand-red" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-[#666666]">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-[#777777]">
                    {service.description}
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}