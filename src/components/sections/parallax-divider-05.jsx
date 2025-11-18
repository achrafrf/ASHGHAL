import React from 'react';

const ParallaxDivider05 = () => {
  const bgImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/61bbf023f43744773a5c41d7_DSC_3153-22.jpg";

  return (
    <section
      className="relative w-full h-[250px] md:h-[400px] bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
      aria-hidden="true"
    >
    </section>
  );
};

export default ParallaxDivider05;