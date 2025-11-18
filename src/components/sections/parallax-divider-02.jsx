import React from 'react';

const ParallaxDivider02 = () => {
  const bgImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa42265deba621be29ec0a_swift_holdings_img_029-8.jpg";

  return (
    <div
      className="relative w-full h-[250px] md:h-[400px] overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ParallaxDivider02;