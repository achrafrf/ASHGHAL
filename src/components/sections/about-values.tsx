"use client";

import { Target, Award, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on quality. Every project is built to the highest standards with attention to every detail, ensuring lasting results that exceed expectations.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Our team brings expertise, experience, and dedication to every job. We stay current with industry best practices and maintain the highest professional standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your success is our success. We work collaboratively with our clients, maintaining clear communication and transparency throughout the entire construction process.",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "We build lasting relationships through honest business practices, reliable service, and a genuine commitment to doing what's right for our clients and community.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#666666] md:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#777777]">
            These principles guide every decision we make and every project we build
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-lg border border-gray-200 p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10">
                  <Icon className="h-7 w-7 text-brand-red" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#666666]">
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#777777]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto mb-8 max-w-3xl text-lg text-[#777777]">
            Don't just take our word for it. Ask our clients why they choose ASHGHAL
            for their commercial construction needs.
          </p>
          <a
            href="tel:281-384-8726"
            className="inline-block rounded bg-brand-red px-10 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#cc0000]"
          >
            Call Us Today: 281-384-8726
          </a>
        </div>
      </div>
    </section>
  );
}