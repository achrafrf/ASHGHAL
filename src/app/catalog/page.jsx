"use client";

import React, { useState, useEffect, useMemo  } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from 'react-hot-toast';
import { Search, Truck, CheckCircle, X, Loader2, HardHat, Settings, Weight, Gauge, Fuel } from "lucide-react";

export default function CatalogPage() {
  const [equipmentList, setEquipmentList] = useState([]); // Array خاوية فالبداية
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [reserving, setReserving] = useState(false);
  const router = useRouter();

  // 1. Fetch Data from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/equipment/all");
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        setEquipmentList(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load machines", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Logic Filtering
  const filteredEquipment = useMemo(() => {
    return equipmentList.filter((item) => {
      const matchesSearch = item.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, equipmentList]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white italic font-black text-brand-red uppercase tracking-widest animate-pulse">
      Initialising Fleet...
    </div>
  );

  const handleConfirmReservation = async (item) => {
  // جيب معلومات اليوزر من localStorage
  const savedUser = localStorage.getItem("user");
  
  if (!savedUser) {
  toast.error("⚠️ Please Login first!"); // عوض alert
  router.push("/login");
  return;
}

  const user = JSON.parse(savedUser);
  const token = localStorage.getItem("token");

  const bookingData = {
    userId: user.id,
    username: user.username,
    equipmentId: item.id,
    equipmentName: item.name,
    totalPrice: item.price
  };

  try {
    const res = await fetch("http://localhost:8080/api/bookings/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(bookingData)
    });

   if (res.ok) {
  toast.success("✅ RESERVATION SENT!"); // عوض alert
  setSelectedItem(null);
  router.push("/my-rentals");

    } else {
      alert("❌ Reservation failed. Try again.");
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header */}
      <div className="bg-[#111111] pt-44 pb-28 px-6 border-b-[10px] border-brand-red relative overflow-hidden">
         <div className="container mx-auto relative z-10 text-center md:text-left">
            <h1 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
              ASHGHAL <span className="text-brand-red">FLEET.</span>
            </h1>
         </div>
      </div>

      <div className="container mx-auto max-w-[1300px] px-6 py-20">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 bg-neutral-50 p-4 border border-neutral-200">
           <input 
             type="text" 
             placeholder="SEARCH BY MODEL..." 
             className="flex-1 bg-white border border-neutral-200 p-4 outline-none focus:border-brand-red font-bold uppercase text-xs"
             onChange={(e) => setSearchQuery(e.target.value)}
           />
           <div className="flex gap-2">
             {["All", "Lifting", "Earthmoving", "Digging"].map(cat => (
               <button 
                 key={cat}
                 onClick={() => setSelectedCategory(cat)}
                 className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                   selectedCategory === cat ? "bg-brand-red text-white" : "bg-white text-black border border-neutral-200 hover:bg-black hover:text-white"
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <div 
                key={item.id} 
                className="group border border-neutral-200 hover:border-brand-red transition-all cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-2xl"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-video bg-neutral-50 p-6">
                   <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-black italic text-xs uppercase">
                      {item.price} DH / DAY
                   </div>
                </div>
                <div className="p-6">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-brand-red uppercase">{item.category}</span>
                      <span className="text-[10px] font-bold text-green-600 flex items-center gap-1 uppercase italic tracking-tighter"> <CheckCircle size={12}/> {item.status}</span>
                   </div>
                   <h3 className="text-2xl font-black uppercase italic mb-6 leading-none">{item.name}</h3>
                   <button className="w-full py-4 border-2 border-black font-black text-[10px] uppercase tracking-widest group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
                      INSPECT SPECIFICATIONS
                   </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-neutral-400 font-black uppercase italic tracking-widest">
               No Machinery Deployed in this sector.
            </div>
          )}
        </div>
      </div>

      {/* --- Detail Modal (Simplified for Reliability) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
           <div className="relative bg-white w-full max-w-5xl h-auto max-h-[90vh] overflow-y-auto border-t-[10px] border-brand-red">
              <button className="absolute top-0 right-0 z-50 bg-brand-red text-white p-4" onClick={() => setSelectedItem(null)}> <X /> </button>
              <div className="flex flex-col lg:flex-row">
                 <div className="lg:w-1/2 bg-neutral-100 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r">
                    <img src={selectedItem.image} className="max-h-[400px] object-contain" alt={selectedItem.name} />
                 </div>
                 <div className="lg:w-1/2 p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">{selectedItem.name}</h2>
                    <div className="grid grid-cols-2 gap-6 mb-10">
                       <SpecItem icon={Settings} label="Power" value={selectedItem.specs?.engine || 'N/A'} />
                       <SpecItem icon={Weight} label="Weight" value={selectedItem.specs?.weight || 'N/A'} />
                       <SpecItem icon={Gauge} label="Capacity" value={selectedItem.specs?.capacity || 'N/A'} />
                       <SpecItem icon={Fuel} label="Source" value={selectedItem.specs?.fuel || 'N/A'} />
                    </div>
                    <div className="bg-[#111111] p-6 border-l-[10px] border-brand-red mb-8 text-white">
                       <span className="text-5xl font-black">{selectedItem.price} DH</span>
                    </div>
       <button 
  disabled={selectedItem.status !== "Available"}
  onClick={() => handleConfirmReservation(selectedItem)}
  className={`w-full py-6 font-black uppercase tracking-widest transition-all ${
    selectedItem.status === "Available" 
    ? "bg-brand-red text-white hover:bg-black" 
    : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
  }`}
>
  {/* ⚠️ حتى هنا بدل item بـ selectedItem */}
  {selectedItem.status === "Available" ? "CONFIRM RESERVATION" : "ALREADY RENTED"}
</button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="bg-neutral-100 p-2 border border-neutral-200"><Icon size={18} className="text-brand-red" /></div>
    <div>
      <p className="text-[9px] font-black text-neutral-400 uppercase leading-none mb-1">{label}</p>
      <p className="text-sm font-black text-black uppercase">{value}</p>
    </div>
  </div>
);