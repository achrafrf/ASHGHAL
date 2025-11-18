"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/61bbf023f43744773a5c41d7_DSC_3153-22.jpg"
          alt="ASHGHAL team member"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          About ASHGHAL
        </h1>
        <p className="max-w-2xl text-lg text-white/90 md:text-xl">
          Building excellence in commercial construction since day one
        </p>
      </div>
    </section>
  );
}