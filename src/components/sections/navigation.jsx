"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavContent = ({ isScrolledNav = false }) => (
    <div className="container flex h-full items-center justify-between">
      <Link href="/" className="relative z-20" aria-label="home">
        <span 
          className={cn(
            "text-4xl font-black italic tracking-tight",
            isScrolledNav ? "text-white" : "text-white"
          )}
          style={{ fontWeight: 900 }}
        >
          ASHGHAL
        </span>
      </Link>
      
      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "p-[18px] text-base font-bold italic tracking-tight leading-none no-underline transition-colors duration-300 ease-linear",
                isScrolledNav
                  ? "text-white hover:opacity-70"
                  : "text-white hover:text-brand-red",
                isActive && !isScrolledNav && "text-brand-red",
                isActive && isScrolledNav && "font-bold"
              )}
              style={{ letterSpacing: "-0.5px" }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 z-20">
        <LanguageSwitcher isScrolled={isScrolledNav} />
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
            <Menu size={30} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        id="top"
        className={cn(
          "absolute top-0 left-0 right-0 z-[1000] h-[76px] py-[5px] transition-opacity duration-300 ease-in-out",
          isScrolled ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <NavContent />
      </header>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] h-[76px] bg-brand-red py-[5px] shadow-[0_10px_12px_-7px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out",
          isScrolled ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <NavContent isScrolledNav={true} />
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[1001] bg-black/95 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={toggleMenu}
      >
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4">
          <button onClick={toggleMenu} className="absolute top-6 right-5 text-white" aria-label="Close menu">
            <X size={36} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-white no-underline transition-colors hover:text-brand-red"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;