import React from 'react';

const ParallaxDivider03 = () => {
  const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/622553c49a737e49b06dba13_swift_holdings_img_043-10.jpg";

  return (
    <div
      className="relative w-full h-[250px] lg:h-[400px] overflow-hidden will-change-transform"
      style={{ transform: 'translate3d(0, 0, 0)' }}
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ParallaxDivider03;