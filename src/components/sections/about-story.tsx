"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#666666] md:text-5xl">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-[#777777]">
              <p>
                ASHGHAL is a premier commercial construction company based in
                Conroe, Texas. We specialize in delivering high-quality construction
                services for retail spaces, restaurants, office buildings, and
                industrial facilities throughout the greater Houston area and beyond.
              </p>
              <p>
                Our reputation is built on a foundation of integrity, craftsmanship,
                and unwavering commitment to our clients. We understand that every
                project represents your vision and investment, which is why we treat
                each build as if it were our own.
              </p>
              <p>
                With a team of experienced professionals and state-of-the-art
                equipment, we have the capability to handle projects of any size and
                complexity. From initial consultation to final walkthrough, we're
                with you every step of the way.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:aspect-[3/4]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa4080b4dcc85c654a8567_swift_holdings_img_031-3.jpg"
              alt="ASHGHAL branded equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-brand-red">15+</div>
              <h3 className="mb-2 text-xl font-semibold text-[#666666]">
                Years Experience
              </h3>
              <p className="text-[#777777]">
                Delivering quality construction projects
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-brand-red">500+</div>
              <h3 className="mb-2 text-xl font-semibold text-[#666666]">
                Projects Completed
              </h3>
              <p className="text-[#777777]">
                Successful builds across Texas
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-brand-red">100%</div>
              <h3 className="mb-2 text-xl font-semibold text-[#666666]">
                Client Satisfaction
              </h3>
              <p className="text-[#777777]">
                Committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}