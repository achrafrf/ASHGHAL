"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Truck, Lock, User, ArrowRight, Loader2, AlertTriangle } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // 1. خزن المعلومات الأساسية في localStorage للـ UI
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.accessToken);

        // 2. خزن الـ Token والـ Role في Cookies باش يخدم الـ Middleware
        // كنحددو المسار (path=/) و مدة الصلاحية (مثلا ساعة واحدة)
        document.cookie = `token=${data.accessToken}; path=/; max-age=3600; SameSite=Lax`;
        document.cookie = `role=${data.roles[0]}; path=/; max-age=3600; SameSite=Lax`;

        // 3. التوجيه بناءً على الصلاحيات (RBAC)
        if (data.roles.includes("ROLE_ADMIN")) {
          router.push("/dashboard");
        } else {
          router.push("/my-rentals");
        }
        
        router.refresh(); // تحديث الحالة في السيت كامل
      } else {
        setError(data.message || "IDENTIFICATION FAILURE: Check credentials");
      }
    } catch (err) {
      setError("CONNECTION ERROR: Industrial server is unreachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 pt-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative z-10">
      <div className="w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red mb-4 shadow-[0_0_30px_rgba(255,0,0,0.4)] rotate-3">
            <Truck className="text-white w-10 h-10 -rotate-3" />
          </div>
          <h1 className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">
            COMMAND <span className="text-brand-red">CENTER</span>
          </h1>
          <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-3 italic">
            Heavy Equipment Authentication
          </p>
        </div>

        {/* Login Box */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative side bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-500/10 border-l-4 border-red-600 p-4 mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-600 shrink-0" size={20} />
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest leading-tight">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest flex justify-between">
                <span>Username</span>
                <span className="text-neutral-600 font-mono">REQ. ID</span>
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-brand-red transition-colors w-5 h-5" />
                <input 
                  type="text" 
                  required
                  className="w-full bg-black border border-neutral-800 py-4 pl-12 pr-4 text-white focus:border-brand-red focus:outline-none transition-all font-bold placeholder:text-neutral-800"
                  placeholder="Enter operator name"
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Access Key</label>
                <Link href="#" className="text-[9px] font-black text-brand-red hover:text-white uppercase tracking-tighter transition-colors italic">LOST KEY?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-brand-red transition-colors w-5 h-5" />
                <input 
                  type="password" 
                  required
                  className="w-full bg-black border border-neutral-800 py-4 pl-12 pr-4 text-white focus:border-brand-red focus:outline-none transition-all font-bold placeholder:text-neutral-800"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-red hover:bg-white hover:text-brand-red text-white py-5 font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 group"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  INITIALIZE ACCESS 
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-10 pt-6 border-t border-neutral-800/50 text-center">
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">
              New Operator?{" "}
              <Link href="/register" className="text-white hover:text-brand-red transition-colors underline decoration-brand-red underline-offset-4">Register Personnel</Link>
            </p>
          </div>
        </div>

        {/* System Footer Decoration */}
        <p className="mt-8 text-center text-neutral-700 font-mono text-[9px] uppercase tracking-[0.5em]">
          Ashghal Industrial OS v2.0.26
        </p>
      </div>
    </div>
  );
}