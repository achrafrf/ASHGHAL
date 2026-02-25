"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Building, ArrowRight, Loader2, HardHat } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ["user"] // الـ Role الافتراضي
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" }); // للرسائل (نجاح أو خطأ)
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // 1. Validation ديال Password
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      setLoading(false);
      return;
    }

    try {
      // 2. عيط للباكيند (Spring Boot)
      const res = await fetch("http://localhost:8080/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ نجاح التسجيل
        setMessage({ type: "success", text: "Account created! Redirecting to login..." });
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        // ❌ مشكل من الباكيند (مثلا Email ديجا كاين)
        setMessage({ type: "error", text: data.message || "Registration failed" });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Server is unreachable. Check your backend." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 pt-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative z-10">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black italic text-white tracking-tighter uppercase">
            Join the <span className="text-brand-red">Fleet</span>
          </h1>
          <p className="text-neutral-500 font-bold uppercase text-xs mt-2 italic font-mono tracking-widest">Initialization Phase</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <HardHat className="absolute -bottom-10 -right-10 text-neutral-800 w-40 h-40 -rotate-12 opacity-20" />

          {/* تافيشي الميساج هنا */}
          {message.text && (
            <div className={`mb-6 p-4 text-xs font-black uppercase tracking-widest border-l-4 ${
              message.type === "success" ? "bg-green-500/10 border-green-500 text-green-500" : "bg-red-500/10 border-red-500 text-red-500"
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                  <input 
                    type="text" 
                    required 
                    className="input-field" 
                    placeholder="achrafox" 
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Company (Optional)</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                  <input type="text" className="input-field" placeholder="BTP Services" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                <input 
                  type="email" 
                  required 
                  className="input-field" 
                  placeholder="name@company.ma" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                  <input 
                    type="password" 
                    required 
                    className="input-field" 
                    placeholder="••••••••" 
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                  <input 
                    type="password" 
                    required 
                    className="input-field" 
                    placeholder="••••••••" 
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black hover:bg-brand-red hover:text-white py-5 font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <>DEPLOY ACCOUNT <ArrowRight size={22} /></>}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-neutral-800 text-center relative z-10">
            <p className="text-neutral-500 text-xs font-bold uppercase">
              Already in the system?{" "}
              <Link href="/login" className="text-brand-red hover:underline italic">Sign In Here</Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          background: #000;
          border: 1px solid #262626;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          color: #fff;
          font-weight: 700;
          transition: all 0.3s;
        }
        .input-field:focus {
          outline: none;
          border-color: #ff0000;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}