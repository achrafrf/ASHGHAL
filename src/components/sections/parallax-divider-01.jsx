import React from 'react';

const ParallaxDivider01 = () => {
  const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa41c844c40dbdea373bd1_swift_holdings_img_012-4.jpg";

  return (
    <section
      className="relative w-full h-[250px] md:h-[400px] overflow-hidden [will-change:transform]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </section>
  );
};

export default ParallaxDivider01;