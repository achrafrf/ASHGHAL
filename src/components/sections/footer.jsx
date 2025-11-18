"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#ff0000] text-white font-sans">
      <div className="max-w-[1200px] mx-auto py-[60px] px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="text-base leading-relaxed">
              {t('footer.callout')}
            </p>
            <p className="text-base leading-relaxed">
              {t('footer.trust')}
            </p>
            <div className="text-base leading-relaxed space-y-1">
              <p>{t('footer.location')}</p>
              <a href="tel:+212 767113363" className="block hover:opacity-80 transition-opacity duration-300">+212 767113363</a>
              <a href="mailto:itsachrafrafiq@gmail.com" className="block hover:opacity-80 transition-opacity duration-300">itsachrafrafiq@gmail.com</a>
            </div>
          </div>

          {/* Column 2: Sitemap & Subscribe */}
          <div className="flex flex-col items-center md:items-start space-y-10">
            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.sitemap')}</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-base hover:underline hover:opacity-80 transition-opacity duration-300">{t('nav.home')}</Link></li>
                <li><Link href="/about" className="text-base hover:underline hover:opacity-80 transition-opacity duration-300">{t('nav.about')}</Link></li>
                <li><Link href="/services" className="text-base hover:underline hover:opacity-80 transition-opacity duration-300">{t('nav.services')}</Link></li>
                <li><Link href="/contact" className="text-base hover:underline hover:opacity-80 transition-opacity duration-300">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg">{t('footer.subscribe')}</h4>
              <div className="w-full max-w-sm mt-4">
                <form
                  className="flex flex-col md:flex-row items-stretch gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder={t('footer.email.placeholder')}
                    aria-label="Email for subscription"
                    className="flex-grow bg-transparent border-2 border-white text-white placeholder-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#ff0000] font-semibold px-6 py-2 transition-opacity duration-300 hover:opacity-90 whitespace-nowrap"
                  >
                    {t('consultation.submit')}
                  </button>
                </form>
             </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-4">{t('footer.follow')}</h4>
            <a 
              href="https://www.facebook.com/swiftholdings" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:border-2 hover:border-white rounded-full group"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5e89421aec626facb82ba480_Facebook-26.svg"
                alt="Facebook icon"
                width={32}
                height={32}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/30 text-center">
          <p className="text-sm leading-relaxed">
            {t('footer.copyright')}
            <br />
            {t('footer.website')} <a href="https://sdmdesignllc.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:opacity-80 transition-opacity duration-300">ACHRAF&nbsp;RAFIQ</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;