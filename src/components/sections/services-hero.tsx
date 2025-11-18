"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41c844c40dbdea373bd1_swift_holdings_img_012-4.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Our Services
        </h1>
        <p className="max-w-2xl text-lg text-white/90 md:text-xl">
          Comprehensive commercial construction solutions tailored to your needs
        </p>
      </div>
    </section>
  );
}
