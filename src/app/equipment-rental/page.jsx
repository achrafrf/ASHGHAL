import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BackToTopButton from "@/components/sections/back-to-top";
import Image from "next/image";

export default function EquipmentRentalPage() {
  const equipment = [
    {
      name: "Mobile Crane",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/professional-construction-crane-mobile-c-55d37667-20251118001927.jpg",
      description: "Heavy lifting capacity for large-scale projects",
      specs: "Max lift: 50 tons | Height: 120 ft | Daily rate available"
    },
    {
      name: "Track Loader",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/red-compact-track-loader-construction-eq-251f68ac-20251118001927.jpg",
      description: "Compact power for excavation and material handling",
      specs: "Operating capacity: 2,500 lbs | Width: 68 in | Perfect for tight spaces"
    },
    {
      name: "Excavator",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/large-excavator-construction-equipment-y-66e63b79-20251118001927.jpg",
      description: "Heavy-duty digging and earthmoving equipment",
      specs: "Digging depth: 24 ft | Reach: 35 ft | Ideal for excavation projects"
    },
    {
      name: "Telehandler",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/telehandler-forklift-construction-equipm-4a7a2587-20251118001926.jpg",
      description: "Versatile lifting and material placement",
      specs: "Lift capacity: 10,000 lbs | Max height: 56 ft | 360° versatility"
    },
    {
      name: "Skid Steer Loader",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa42e4029a560516638f13_SVL75_Track_Loader_swift_-9.png",
      description: "Versatile compact loader for multiple applications",
      specs: "Operating capacity: 3,200 lbs | Quick-attach system | Multi-purpose"
    },
    {
      name: "Backhoe Loader",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/580123dd-7e94-4ec6-8e55-04cb0de4832a/generated_images/professional-construction-crane-mobile-c-55d37667-20251118001927.jpg",
      description: "Combined loading and excavation capabilities",
      specs: "Dig depth: 14 ft | Bucket capacity: 1 cu yd | Dual-purpose machine"
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/61bbebc3709d33ec289a98fd_shutterstock_785285635-15.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Equipment Rental
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professional grade construction equipment for your projects
            </p>
          </div>
        </section>

        {/* Equipment Listing Section */}
        <section className="py-20 px-10 bg-white">
          <div className="container mx-auto max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#666666] mb-4">
                Available Equipment
              </h2>
              <p className="text-lg text-[#777777] max-w-3xl mx-auto">
                All our equipment is well-maintained, regularly inspected, and ready to deliver 
                optimal performance for your construction projects. Contact us for rental rates and availability.
              </p>
            </div>

            {/* Equipment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-2xl font-bold text-[#666666] mb-3">
                      {item.name}
                    </h3>
                    <p className="text-base text-[#777777] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-[#e5e5e5]">
                      <p className="text-sm text-[#999999] leading-relaxed">
                        {item.specs}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center bg-[#f5f5f5] py-12 px-6">
              <h3 className="text-3xl font-bold text-[#666666] mb-4">
                Need Equipment for Your Project?
              </h3>
              <p className="text-lg text-[#777777] mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your equipment needs, get pricing information, 
                and schedule delivery to your job site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:281-384-8726"
                  className="inline-block bg-[#ff0000] text-white font-semibold px-10 py-3.5 transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
                >
                  Call 281-384-8726
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-white border-2 border-[#ff0000] text-[#ff0000] font-semibold px-10 py-3.5 transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
