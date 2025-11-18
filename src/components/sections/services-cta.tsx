"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#666666] md:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-10 text-lg text-[#777777] md:text-xl">
            Let's discuss how ASHGHAL can bring your commercial construction
            project to life. Our team is ready to provide expert consultation and a
            detailed proposal tailored to your specific needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded bg-brand-red px-10 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#cc0000]"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-block rounded border-2 border-brand-red bg-transparent px-10 py-4 text-base font-semibold text-brand-red transition-all duration-300 hover:bg-brand-red hover:text-white"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}