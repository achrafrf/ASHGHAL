"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export const LanguageSwitcher = ({ isScrolled }: { isScrolled?: boolean }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-2 rounded transition-colors ${
          isScrolled
            ? "text-white hover:bg-white/10"
            : "text-white hover:bg-black/10"
        }`}
        aria-label="Select language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium hidden md:inline">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "en" | "fr" | "ar");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                language === lang.code ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-gray-800">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
