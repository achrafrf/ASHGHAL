"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  Truck, CheckCircle, ArrowRight, HardHat, Loader2, 
  X, Settings, Weight, Gauge, Fuel, Calendar 
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function RentalEquipmentSection() {
  const { t } = useLanguage();
  const router = useRouter();
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // للتحكم في المودال

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/equipment/all`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setEquipment(data.slice(0, 8));
        }
      } catch (err) {
        console.error("Error fetching homepage equipment:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipment();
  }, []);

  // ✅ دالة الحجز مع التحقق من الـ Auth
  const handleConfirmReservation = async (item) => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!savedUser || !token) {
      toast.error("IDENTIFICATION REQUIRED: Please Login to reserve gear", {
        style: { border: '2px solid #ff0000', padding: '16px', color: '#fff', background: '#1a1a1a', borderRadius: '0px', fontWeight: '900' }
      });
      router.push("/login");
      return;
    }

    const user = JSON.parse(savedUser);
    const bookingData = {
      userId: user.id,
      username: user.username,
      equipmentId: item.id,
      equipmentName: item.name,
      totalPrice: item.price
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
      });

      if (res.ok) {
        toast.success("RESERVATION TRANSMITTED: CHECK YOUR DEPLOYMENTS", {
          style: { border: '2px solid #ff0000', padding: '16px', color: '#fff', background: '#1a1a1a', borderRadius: '0px', fontWeight: '900' }
        });
        setSelectedItem(null);
        router.push("/my-rentals");
      }
    } catch (err) {
      toast.error("TRANSMISSION ERROR: Check server connection");
    }
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-200 relative">
      <div className="container mx-auto max-w-[1300px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#ff0000] font-bold mb-3">
              <HardHat size={20} />
              <span className="tracking-[0.2em] uppercase text-sm font-black">Industrial Inventory</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#333333] leading-none mb-4 italic uppercase tracking-tighter">
              HEAVY <span className="text-[#ff0000]">DEPLOYMENTS.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <Link href="/catalog" className="text-[#333333] font-black uppercase italic text-sm hover:text-[#ff0000] transition-colors flex items-center gap-2 group">
              CATALOG ACCESS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20 animate-pulse text-brand-red font-black italic uppercase">Synchronizing Fleet...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {equipment.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)} // ⚠️ كليك هنا كيفتح المودال
                className="group relative bg-white border border-neutral-200 transition-all duration-500 hover:border-brand-red cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-video bg-neutral-50 p-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-0 left-0 bg-black text-white px-3 py-1.5 font-black italic text-[10px]">
                    {item.price} DH / DAY
                  </div>
                </div>
                <div className="p-5">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-black text-brand-red uppercase">{item.category}</span>
                      <CheckCircle size={12} className="text-green-600" />
                   </div>
                   <h3 className="text-lg font-black text-[#1a1a1a] uppercase leading-tight truncate">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- DETAIL MODAL --- */}
        {selectedItem && (
          <div className="fixed inset-0 z-[1000] flex items-start justify-center px-4 py-6 md:px-8 mt-20"> 
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedItem(null)}></div>
            <div className="relative bg-white w-full max-w-5xl h-auto max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300 border-t-[10px] border-brand-red overflow-hidden">
              
              <button className="absolute top-0 right-0 z-50 bg-brand-red text-white p-4 hover:bg-black transition-colors" onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row overflow-y-auto custom-scrollbar">
                <div className="lg:w-1/2 bg-neutral-100 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r min-h-[300px]">
                  <div className="relative w-full aspect-square max-w-[400px]">
                     <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="lg:w-1/2 p-6 md:p-10 flex flex-col">
                  <span className="text-brand-red font-black text-xs tracking-widest uppercase mb-2 block">Technical Configuration</span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8 leading-tight">{selectedItem.name}</h2>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                     <SpecItem icon={Settings} label="Power Unit" value={selectedItem.specs?.engine || 'Standard'} />
                     <SpecItem icon={Weight} label="Gross Weight" value={selectedItem.specs?.weight || 'TBD'} />
                     <SpecItem icon={Gauge} label="Load Limit" value={selectedItem.specs?.capacity || 'N/A'} />
                     <SpecItem icon={Fuel} label="Energy Source" value={selectedItem.specs?.fuel || 'Diesel'} />
                  </div>

                  <div className="bg-[#1a1a1a] p-6 border-l-[10px] border-brand-red mb-8 text-white">
                     <p className="text-[10px] text-neutral-400 font-bold uppercase mb-1 tracking-widest">Rate / 24H</p>
                     <span className="text-4xl md:text-5xl font-black">{selectedItem.price} DH</span>
                  </div>

                  <button 
                    onClick={() => handleConfirmReservation(selectedItem)}
                    className="w-full bg-brand-red text-white py-6 font-black uppercase tracking-widest text-base hover:bg-black transition-all flex items-center justify-center gap-4 active:scale-95 shadow-2xl"
                  >
                    CONFIRM RESERVATION <Truck size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff0000; border-radius: 0px; }
      `}</style>
    </section>
  );
}

// Helper Spec Component
const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="bg-neutral-100 p-2 rounded border border-neutral-200"><Icon size={18} className="text-brand-red" /></div>
    <div>
      <p className="text-[9px] font-black text-neutral-400 uppercase leading-none mb-1">{label}</p>
      <p className="text-sm font-black text-black uppercase">{value}</p>
    </div>
  </div>
);