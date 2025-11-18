import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{
      backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5efa43a6859344702f5ab87b_swift_holdings_img_008-23.jpg')"
    }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with ASHGHAL for your commercial construction needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;