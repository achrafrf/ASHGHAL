"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const RecentProjects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.hand.title'),
      location: t('projects.hand.location'),
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/6062a5450ef5c907bf194075_DSC_8682-min-11.jpg',
      slug: '/project/hand-stone-fulshear',
    },
    {
      title: t('projects.shoot.title'),
      location: t('projects.shoot.location'),
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/604aecb9a5a03f0e68dfde7b_DSC_8305_1-12.jpg',
      slug: '/project/shoot-360',
    },
    {
      title: t('projects.dance.title'),
      location: t('projects.dance.location'),
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5f62a46ea1e382b25d85c7b3_swift-holdings-dance-koll-13.png',
      slug: '/project/dance-kollective',
    },
    {
      title: t('projects.kolache.title'),
      location: t('projects.kolache.location'),
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/580123dd-7e94-4ec6-8e55-04cb0de4832a-swiftholdings-com/assets/images/5ee12f1c0a226b5238ee6340_DSC_4436-14.jpg',
      slug: '/project/kolache-factory-101',
    }
  ];

  return (
    <section className="bg-white py-20 px-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[#666666] text-[36px] font-bold mb-12">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link 
              href={project.slug} 
              key={index} 
              className="group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
            >
              <Image 
                src={project.imageUrl}
                alt={`${project.title} project in ${project.location}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-base font-normal text-white">{project.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-block bg-primary text-primary-foreground py-4 px-10 uppercase text-sm font-bold tracking-wider hover:bg-red-700 transition-colors duration-300"
          >
            {t('projects.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;