"use client";
import React, { useEffect, useState } from 'react';
import { Truck, Clock, CheckCircle, XCircle, HardHat, Loader2, X, Trash2 } from 'lucide-react';

export default function UserRentals() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      fetchUserBookings(userData.id);
    }
  }, []);

  // ✅ دالة المسح من جهة الكليان
  const handleRemoveOrder = async (id) => {
    if (!confirm("Remove this request from your history?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/delete/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        setBookings(bookings.filter(b => b.id !== id));
      }
    } catch (err) { console.error(err); }
  };

  const fetchUserBookings = async (userId) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/user/${userId}`);
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-brand-red w-12 h-12" />
        <p className="font-black italic text-brand-red uppercase tracking-widest">Loading Operations...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-accent-foreground text-[#1a1a1a] pt-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b-8 border-brand-red pb-8 uppercase italic font-black">
          <h1 className="text-5xl tracking-tighter uppercase text-white">My <span className="text-brand-red">Deployments</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {bookings.length > 0 ? bookings.map((b) => (
              /* ⚠️ زدنا relative هنا باش نتحكمو ف البوطون */
              <div key={b.id} className="relative bg-neutral-50 border border-neutral-200 p-8 flex gap-6 items-center hover:border-brand-red transition-all shadow-sm group">
                
                {/* ❌ بوطون المسح (X) - كيبان ف القنت */ }
                <button 
                  onClick={() => handleRemoveOrder(b.id)}
                  className="absolute top-3 right-3 text-neutral-300 hover:text-brand-red hover:rotate-90 transition-all duration-300"
                  title="Remove from history"
                >
                  <X size={20} />
                </button>

                <div className="w-20 h-20 bg-white border border-neutral-100 flex items-center justify-center shrink-0">
                  <Truck size={32} className="text-brand-red" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black uppercase tracking-tight">{b.equipmentName}</h3>
                  <p className="text-[9px] font-bold text-neutral-400 font-mono">TRACKING ID: {b.id.toUpperCase()}</p>
                  
                  <div className="flex gap-2 mt-4">
                    {b.status === 'PENDING' && <span className="status-badge text-orange-600 bg-orange-50 border-orange-200"> <Clock size={12}/> PENDING REVIEW</span>}
                    {b.status === 'APPROVED' && <span className="status-badge text-green-600 bg-green-50 border-green-200"> <CheckCircle size={12}/> APPROVED / ON-SITE</span>}
                    {b.status === 'REJECTED' && <span className="status-badge text-red-600 bg-red-50 border-red-200"> <XCircle size={12}/> REJECTED</span>}
                  </div>
                </div>

                <div className="text-right shrink-0">
                   <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">Total Price</p>
                   <p className="text-2xl font-black text-brand-red">{b.totalPrice} DH</p>
                </div>
              </div>
            )) : (
              <div className="text-center py-20 border-4 border-dashed border-neutral-50 text-neutral-300 font-black uppercase italic">
                Zero active rental operations found.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="bg-[#1a1a1a] p-8 text-white h-fit border-t-[10px] border-brand-red shadow-2xl">
             <HardHat size={40} className="mb-4 text-brand-red" />
             <h3 className="text-2xl font-black uppercase italic mb-4 leading-tight">Field <br/> Support</h3>
             <p className="text-xs font-bold text-neutral-500 mb-8 uppercase tracking-wider leading-relaxed">
               Active operators can request immediate technical intervention for on-site machinery.
             </p>
             <button className="w-full bg-brand-red text-white py-4 font-black uppercase text-xs hover:bg-white hover:text-brand-red transition-all shadow-lg active:scale-95">
               Request Intervention
             </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .status-badge { 
          display: flex; 
          align-items: center; 
          gap: 6px; 
          font-size: 9px; 
          font-weight: 900; 
          padding: 6px 12px; 
          border: 1px solid;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}