"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, User, LayoutDashboard, LogOut, LogIn } from "lucide-react"; 
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  // واش حنا ف الصفحة الرئيسية؟
  const isHomePage = pathname === "/";

  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) setUser(JSON.parse(savedUser));
      else setUser(null);
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    router.push("/");
    router.refresh();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isAdmin = user?.roles?.includes("ROLE_ADMIN");

  // تحديد لون النص بناءً على الصفحة وحالة السكرول
  const getTextColor = (isActive = false) => {
    if (isScrolled) return "text-white"; // فاش كيهبط السيت والنافبار كتولي حمرا
    if (!isHomePage) return isActive ? "text-brand-red" : "text-white"; // فـ صفحات About/Services الروابط كحلين
    return isActive ? "text-brand-red" : "text-white"; // فـ الهوم الروابط بيضين
  };

  const AuthSection = ({ isMobile = false }) => {
    if (user) {
      return (
        <div className={cn("flex items-center gap-4", isMobile && "flex-col mt-8 w-full")}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center border border-white/20 shrink-0">
              <User size={16} className="text-white" />
            </div>
            <span className={cn("text-sm font-black italic uppercase truncate max-w-[100px]", getTextColor())}>
              {user.username}
            </span>
          </div>

          {isAdmin && (
            <Link href="/dashboard" className="bg-black text-white text-[10px] font-black uppercase px-3 py-1.5 hover:bg-brand-red transition-all shrink-0">
              Admin
            </Link>
          )}

          <button onClick={handleLogout} className={cn("text-[10px] font-black uppercase tracking-widest border px-3 py-1.5 transition-all shrink-0", 
            isScrolled ? "border-white text-white hover:bg-white hover:text-brand-red" : "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
          )}>
            Logout
          </button>
        </div>
      );
    }

    return (
      <div className={cn("flex items-center gap-3", isMobile && "flex-col w-full mt-8")}>
        <Link href="/login" className={cn("text-sm font-black italic uppercase transition-all shrink-0", getTextColor())}>
          Sign In
        </Link>
        <Link href="/register" className="bg-brand-red text-white text-sm font-black italic uppercase px-5 py-2 hover:bg-black transition-all shrink-0">
          Join Now
        </Link>
      </div>
    );
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 flex items-center",
        isScrolled ? "h-[70px] bg-brand-red shadow-2xl" : "h-[90px] bg-transparent"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">
          
          {/* 1. Logo */}
          <Link href="/" className="relative z-20 shrink-0">
            <span className={cn("text-3xl font-black italic tracking-tighter transition-colors", getTextColor())}>
              ASHGHAL
            </span>
          </Link>
          
          {/* 2. Desktop Links (تمركز مرن بلا زحام) */}
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/catalog", label: "Catalog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 text-sm font-black italic uppercase tracking-tighter transition-all hover:text-brand-red",
                  getTextColor(pathname === link.href)
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Right Side (Auth + Lang) */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:block">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            <div className="hidden lg:block">
              <AuthSection />
            </div>
            {/* Mobile Toggle */}
            <button onClick={toggleMenu} className={cn("lg:hidden p-1", getTextColor())}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div className={cn(
        "fixed inset-0 z-[1001] bg-black/95 transition-all duration-500 lg:hidden",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="p-8 flex flex-col h-full">
          <button onClick={toggleMenu} className="self-end text-white p-2 border border-white/20 mb-12">
            <X size={32} />
          </button>
          
          <nav className="flex flex-col gap-8 items-center text-center">
            {["Home", "About", "Services", "Catalog", "Contact"].map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    onClick={toggleMenu} className="text-5xl font-black italic uppercase text-white hover:text-brand-red transition-all">
                {item}
              </Link>
            ))}
            <div className="w-full h-px bg-white/10 my-4"></div>
            <AuthSection isMobile={true} />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;