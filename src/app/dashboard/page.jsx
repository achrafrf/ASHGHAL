"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, Truck, ClipboardList, Users, Settings, 
  LogOut, Bell, Search, User, Plus, Loader2, X , PencilLine, 
  Trash2,TrendingUp,Clock,CheckCircle,HardHat
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const DashboardAshghal = () => {
  const [user, setUser] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMachine, setNewMachine] = useState({
    name: "", category: "Earthmoving", price: "", image: "", description: "",
    specs: { engine: "", weight: "", capacity: "", fuel: "", year: "" }
  });

  // 3. edit machine (Admin only)
const [isEditMode, setIsEditMode] = useState(false);
const [currentEditId, setCurrentEditId] = useState(null);
  const router = useRouter();

   //states 
   const [activeTab, setActiveTab] = useState("inventory"); // "inventory" or "orders"
   const [bookings, setBookings] = useState([]); 

   const fetchBookings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/all`);
    const data = await res.json();
    setBookings(Array.isArray(data) ? data : []);
  } catch (err) { console.error(err); }
};

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(savedUser));
      fetchInventory();
    }
  }, []);

  //fetchBookings 

  useEffect(() => {
  if (user) {
    fetchInventory();
    fetchBookings();
  }
}, [user]);

  const fetchInventory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/equipment/all`);
    
    // تأكد واش الرد ديال السيرفر مزيان
    if (!res.ok) {
      console.error("Server error:", res.status);
      setInventory([]); // حط Array خاوية باش ما يطرطقش السيت
      setLoading(false);
      return;
    }

    const data = await res.json();
    
    // ⚠️ تأكد 100% أن الداتا اللي جات هي Array
    if (Array.isArray(data)) {
      setInventory(data);
    } else {
      console.error("Data received is not an array:", data);
      setInventory([]); 
    }
    
    setLoading(false);
  } catch (err) { 
    console.error("Network error:", err);
    setInventory([]);
    setLoading(false);
  }
};

const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    // ⚠️ نوجدوا الـ Object اللي غانصيفطو
    const machineData = isEditMode 
      ? { ...newMachine, id: currentEditId } // نأكدو بلي الـ ID كاين في الـ Body
      : newMachine;

    const url = isEditMode 
      ? `${process.env.NEXT_PUBLIC_API_URL}api/equipment/update/${currentEditId}`
      : `${process.env.NEXT_PUBLIC_API_URL}api/equipment/add`;
      
    const method = isEditMode ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(machineData) // نصيفطو الداتا اللي وجدنا
      });

      if (res.ok) {
      toast.success(isEditMode ? "ASSET CONFIG UPDATED" : "NEW ASSET DEPLOYED", {
          style: { border: '2px solid #ff0000', padding: '16px', color: '#fff', background: '#1a1a1a', borderRadius: '0px', fontWeight: '900', fontStyle: 'italic' },
          iconTheme: { primary: '#ff0000', secondary: '#fff' }
        });
        setShowAddForm(false);
        setIsEditMode(false);
        setCurrentEditId(null); // مسح الـ ID مورا ما تسالي
        fetchInventory(); 
        setNewMachine({ name: "", category: "Earthmoving", price: "", image: "", description: "", specs: { engine: "", weight: "", capacity: "", fuel: "", year: "" } });
      }
    } catch (err) {
      toast.error("SYSTEM ERROR: UNABLE TO REACH SERVER");
    }
};

 const handleAddMachine = async (e) => {
  e.preventDefault();
  setLoading(true); // دير واحد State للـ loading إذا بغيتي

  const token = localStorage.getItem("token");
  
  // ⚠️ جرب تافيشي الداتا قبل ما تصيفطها
  console.log("Sending Machine Data:", newMachine);
  console.log("Using Token:", token);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/equipment/add`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      body: JSON.stringify(newMachine)
    });

    if (res.ok) {
      toast.success('UNIT DEPLOYED!', {
  style: {
    border: '2px solid #ff0000',
    padding: '16px',
    color: '#fff',
    background: '#1a1a1a',
    borderRadius: '0px', // خليها مربعة باش تبان Industrial
    fontWeight: '900',
    fontStyle: 'italic',
  },
  iconTheme: {
    primary: '#ff0000',
    secondary: '#fff',
  },
});
      setShowAddForm(false);
      fetchInventory();
    } else {
      const err = await res.json();
      console.log("Error logic:", err);
      toast.error('❌ Still 401? Check Java Console!', {
  style: {
    border: '2px solid #ff0000',
    padding: '16px',
    color: '#fff',
    background: '#000',
    borderRadius: '0px',
    fontWeight: '900',
  },
});
    }
  } catch (err) {
    toast.error('❌ Server Error', {
  style: {
    border: '2px solid #ff0000',
    padding: '16px',
    color: '#fff',
    background: '#000',
    borderRadius: '0px',
    fontWeight: '900',
  },
});
  }
};

  const handleOpenEdit = (item) => {
  setNewMachine({
    name: item.name || "",
    category: item.category || "Earthmoving",
    price: item.price || "",
    image: item.image || "",
    description: item.description || "",
    specs: item.specs || { engine: "", weight: "", capacity: "", fuel: "", year: "" }
  });
  setCurrentEditId(item.id);
  setIsEditMode(true);
  setShowAddForm(true);
};


 const handleDelete = async (id) => {
  const token = localStorage.getItem("token");
  if (!confirm("CRITICAL: Are you sure you want to decommission this unit?")) return;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/equipment/delete/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });

    if (res.ok) {
      // ⚠️ Toast Success
      toast.success('UNIT REMOVED FROM FLEET', {
        style: { border: '2px solid #ff0000', padding: '16px', color: '#fff', background: '#1a1a1a', borderRadius: '0px', fontWeight: '900' }
      });
      fetchInventory();
    }
  } catch (err) {
    toast.error("DELETE OPERATION FAILED");
  }
};

const handleStatusUpdate = async (id, newStatus) => {
  const token = localStorage.getItem("token");
  
  try {
    // ⚠️ تأكد من هاد الرابط بلي فيه ?status=
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/status/${id}?status=${newStatus}`, {
      method: "PUT",
      headers: { "Authorization": `Bearer ${token}` }
    });

    if (res.ok) {
      toast.success(`MISSION LOG: ORDER ${newStatus}`, {
        style: { border: '2px solid #ff0000', padding: '16px', color: '#fff', background: '#1a1a1a', borderRadius: '0px', fontWeight: '900' }
      });
      
      // ✅ تحديث الجداول بجوج دقة وحدة
      fetchBookings(); 
      fetchInventory(); 
    } else {
      const errorData = await res.text();
      console.error("Server says:", errorData);
      toast.error("COMMUNICATION ERROR: STATUS NOT UPDATED");
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
};

  if (!user) return null;

  const handleDeleteBooking = async (id) => {
  if (!confirm("Remove this order from records?")) return;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/bookings/delete/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    });
    if (res.ok) {
      fetchBookings(); // تحديث الجدول
    }
  } catch (err) { console.error(err); }
};

// 1. حساب البيانات للمبيان (Logic)
const getInventoryData = () => {
  if (!inventory || !Array.isArray(inventory) || inventory.length === 0) {
    return [{ name: 'NO DATA', value: 0 }];
  }
  const counts = inventory.reduce((acc, item) => {
    const cat = item.category || 'Other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counts).map(cat => ({ name: cat.toUpperCase(), value: counts[cat] }));
};

const getBookingData = () => {
  if (!bookings || !Array.isArray(bookings) || bookings.length === 0) {
    return [{ name: 'No Orders', value: 1, color: '#333' }];
  }
  const statusCounts = bookings.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1;
    return acc;
  }, { PENDING: 0, APPROVED: 0, REJECTED: 0 });
  
  return [
    { name: 'Pending', value: statusCounts.PENDING, color: '#f97316' },
    { name: 'Approved', value: statusCounts.APPROVED, color: '#22c55e' },
    { name: 'Rejected', value: statusCounts.REJECTED, color: '#ef4444' },
  ];
};
const getTotalRevenue = () => {
  if (!bookings || !Array.isArray(bookings)) return 0;
  return bookings
    .filter(b => b.status === 'APPROVED')
    .reduce((sum, b) => sum + (Number(b.totalPrice) || 0), 0);
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-neutral-900 border border-neutral-800 p-6 hover:border-brand-red transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-black border border-neutral-800 group-hover:border-brand-red transition-all">
        {icon}
      </div>
    </div>
    <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">{title}</p>
    <h3 className="text-2xl font-black italic mt-1 tracking-tighter">{value}</h3>
  </div>
);

  return (
    <div className="flex h-screen bg-neutral-900 text-white font-sans overflow-hidden pt-18">
      {/* Sidebar - Same as you provided but with real name */}
      <aside className="w-72 bg-black border-r border-neutral-800 flex flex-col">
        <div className="p-8 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center font-bold italic shadow-lg shadow-brand-red/30 text-white text-xl">A</div>
          <span className="text-2xl font-black tracking-tighter uppercase">ASHGHAL</span>
        </div>
      <nav className="flex-1 px-4 space-y-1">
  <div onClick={() => setActiveTab("inventory")}>
    <NavItem icon={LayoutDashboard} label="Inventory" active={activeTab === "inventory"} />
  </div>
  <div onClick={() => setActiveTab("orders")}>
    <NavItem icon={ClipboardList} label="Orders" active={activeTab === "orders"} />
  </div>
  <div onClick={() => setActiveTab("analytics")}>
    <NavItem icon={BarChart} label="Analytics" active={activeTab === "analytics"} />
  </div>
</nav>
        <div className="p-4 mt-auto border-t border-neutral-800 bg-neutral-900/50">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/40 mb-3 border border-transparent">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-red to-orange-500 flex items-center justify-center border-2 border-neutral-700 uppercase font-black">
               {user.username.substring(0, 2)}
            </div>
            <div className="flex-1 overflow-hidden text-xs">
              <p className="font-bold truncate">{user.username}</p>
              <p className="text-neutral-500 truncate uppercase tracking-tighter">{user.roles[0]}</p>
            </div>
          </div>
          <button onClick={() => {localStorage.clear(); router.push('/login');}} className="w-full flex items-center gap-3 p-3 text-neutral-400 hover:text-brand-red hover:bg-brand-red/10 rounded-xl transition-all font-bold text-sm">
            <LogOut size={18} /> <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
     <main className="flex-1 flex flex-col overflow-hidden">
  {/* Header */}
  <header className="h-20 bg-neutral-900 border-b border-neutral-800 px-8 flex items-center justify-between">
    <h2 className="text-xl font-black italic uppercase tracking-widest uppercase">
      {activeTab === "inventory" ? "Fleet Inventory" : "Rental Requests"}
    </h2>
    
    {activeTab === "inventory" && (
      <button 
        onClick={() => { setIsEditMode(false); setShowAddForm(true); }} 
        className="bg-brand-red text-white px-6 py-2.5 font-black uppercase text-xs flex items-center gap-2"
      >
        <Plus size={16} /> Deploy New Machine
      </button>
    )}
  </header>

  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
    {/* --- Navigation Tabs (التبديل بين الجداول) --- */}
    <div className="flex gap-8 mb-8 border-b border-neutral-800">
      <button 
        onClick={() => setActiveTab("inventory")}
        className={`pb-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'inventory' ? 'border-b-4 border-brand-red text-white' : 'text-neutral-500 hover:text-white'}`}
      >
        Fleet Management
      </button>
      <button 
        onClick={() => setActiveTab("orders")}
        className={`pb-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'orders' ? 'border-b-4 border-brand-red text-white' : 'text-neutral-500 hover:text-white'}`}
      >
        Incoming Orders ({bookings.filter(b => b.status === 'PENDING').length})
      </button>
    </div>

    {loading ? <div className="flex justify-center mt-10"><Loader2 className="animate-spin text-brand-red" /></div> : (
      <>
        {/* --- VIEW 1: INVENTORY (الجدول ديالك القديم) --- */}
        {activeTab === "inventory" && (
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-sm overflow-hidden animate-in fade-in duration-500">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-neutral-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  <th className="p-5">Unit Name</th>
                  <th className="p-5">Category</th>
                  <th className="p-5">Rate (DH)</th>
                  <th className="p-5">Status</th>
                  <th className="p-5 text-right">Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] text-sm group">
                    <td className="p-5 font-bold uppercase">{item.name}</td>
                    <td className="p-5"><span className="bg-neutral-800 px-2 py-1 text-[9px] font-black uppercase border border-neutral-700">{item.category}</span></td>
                    <td className="p-5 font-mono font-bold text-brand-red">{item.price}</td>
                    <td className="p-5 text-[10px] font-black text-green-500 italic uppercase">{item.status}</td>
                    <td className="p-5 text-right flex justify-end gap-4">
                      <button onClick={() => handleOpenEdit(item)} className="text-neutral-500 hover:text-white transition-colors"><PencilLine size={18} /></button>
                      <button onClick={() => handleDelete(item.id)} className="text-neutral-600 hover:text-brand-red transition-colors"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* --- VIEW 2: ORDERS (الجدول الجديد ديال الطلبات) --- */}
        {activeTab === "orders" && (
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-sm overflow-hidden animate-in slide-in-from-right duration-500">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-neutral-500 text-[10px] uppercase font-black tracking-[0.2em]">
                  <th className="p-5">Client (Operator)</th>
                  <th className="p-5">Machine Asset</th>
                  <th className="p-5">Total Price</th>
                  <th className="p-5">Status</th>
                  <th className="p-5 text-center">Decision</th>
                  <th className="p-5 text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {bookings.length > 0 ? bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-white/[0.02] text-sm">
                    <td className="p-5 font-bold">{b.username}</td>
                    <td className="p-5 uppercase italic text-neutral-400">{b.equipmentName}</td>
                    <td className="p-5 font-mono font-bold text-brand-red">{b.totalPrice} DH</td>
                    <td className="p-5">
                      <span className={`px-2 py-1 text-[9px] font-black uppercase ${
                        b.status === 'PENDING' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 
                        b.status === 'APPROVED' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="p-5 text-right flex justify-end gap-2">
                      {b.status === 'PENDING' && (
                        <>
                          <button 
                            onClick={() => handleStatusUpdate(b.id, "APPROVED")}
                            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-sm transition-all shadow-lg shadow-green-600/20"
                          >
                            <Truck size={16} />
                          </button>
                          <button 
                            onClick={() => handleStatusUpdate(b.id, "REJECTED")}
                            className="bg-neutral-800 hover:bg-red-600 text-white p-2 rounded-sm transition-all"
                          >
                            <X size={16} />
                          </button>
                  
                        </>
                      )}
                    </td>
                     <td className="p-5 font-bold"> 
                  <button 
    onClick={() => handleDeleteBooking(b.id)}
    className="text-neutral-600 hover:text-brand-red transition-colors p-2 relative left-8"
  >
    <Trash2 size={18} />
  </button></td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="p-20 text-center text-neutral-600 font-black uppercase italic tracking-widest">
                      Zero deployments requested.
                    </td>
                  </tr>
                )}
               
              </tbody>
            </table>
          </div>
        )}
        {/* --- VIEW 3: analytics (الجدول الجديد ديال الطلبات) --- */}
      {activeTab === "analytics" && (
  <div className="space-y-8 animate-in fade-in duration-700">
    {/* 1. Quick Stats Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Total Revenue" value={`${getTotalRevenue()} DH`} icon={<TrendingUp className="text-green-500"/>} />
      <StatCard title="Active Fleet" value={inventory.length} icon={<Truck className="text-brand-red"/>} />
      <StatCard title="Pending Orders" value={bookings.filter(b => b.status === 'PENDING').length} icon={<Clock className="text-orange-500"/>} />
      <StatCard title="Success Rate" value={bookings.length > 0 ? `${Math.round((bookings.filter(b=>b.status==='APPROVED').length / bookings.length) * 100)}%` : "0%"} icon={<CheckCircle className="text-blue-500"/>} />
    </div>

    {/* 2. Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-neutral-900 border border-neutral-800 p-6 border-t-4 border-brand-red">
        <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 flex justify-between">
          Fleet Distribution <HardHat size={14}/>
        </h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getInventoryData()}>
              <XAxis dataKey="name" stroke="#444" fontSize={10} fontWeight="900" />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ background: '#000', border: '1px solid #ff0000', fontSize: '10px' }} />
              <Bar dataKey="value" fill="#ff0000" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 p-6 border-t-4 border-brand-red">
        <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 flex justify-between">
          Deployment Health <Settings size={14}/>
        </h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={getBookingData()} innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value">
                {getBookingData().map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#000', border: '1px solid #333', fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
)}

      </>
    )}

    
  </div>
</main>

      {/* --- Add Machine Modal --- */}
      {showAddForm && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/90" onClick={() => setShowAddForm(false)}></div>
          <div className="relative bg-neutral-900 border-t-8 border-brand-red p-8 w-full max-w-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
            <h3 className="text-3xl font-black italic uppercase mb-8">Deploy New Asset</h3>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MACHINE NAME" className="dash-input" value={newMachine.name} required onChange={e => setNewMachine({...newMachine, name: e.target.value})}/>
                <select className="dash-input" onChange={e => setNewMachine({...newMachine, category: e.target.value})}>
                  <option value="Earthmoving">EARTHMOVING</option>
                  <option value="Lifting">LIFTING</option>
                  <option value="Digging">DIGGING</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="PRICE PER DAY (DH)" className="dash-input" value={newMachine.price}  required onChange={e => setNewMachine({...newMachine, price: e.target.value})}/>
                <input type="text" placeholder="IMAGE URL (LINK)" className="dash-input" value={newMachine.image} required onChange={e => setNewMachine({...newMachine, image: e.target.value})}/>
              </div>
              <textarea placeholder="SHORT DESCRIPTION" className="dash-input h-24" value={newMachine.description} onChange={e => setNewMachine({...newMachine, description: e.target.value})}></textarea>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-t border-neutral-800 pt-4">
                <input type="text" placeholder="ENGINE" className="dash-input text-[10px]" onChange={e => setNewMachine({...newMachine, specs: {...newMachine.specs, engine: e.target.value}})}/>
                <input type="text" placeholder="WEIGHT" className="dash-input text-[10px]" onChange={e => setNewMachine({...newMachine, specs: {...newMachine.specs, weight: e.target.value}})}/>
                <input type="text" placeholder="FUEL" className="dash-input text-[10px]" onChange={e => setNewMachine({...newMachine, specs: {...newMachine.specs, fuel: e.target.value}})}/>
                <input type="text" placeholder="YEAR" className="dash-input text-[10px]" onChange={e => setNewMachine({...newMachine, specs: {...newMachine.specs, year: e.target.value}})}/>
              </div>

 <button type="submit" className="w-full bg-brand-red py-5 font-black uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-xl active:scale-95">
                {isEditMode ? "SAVE OPERATIONAL DATA" : "INITIALIZE DEPLOYMENT"}
              </button>            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .dash-input { width: 100%; background: #000; border: 1px solid #333; padding: 12px; color: #fff; font-weight: bold; }
        .dash-input:focus { border-color: #ff0000; outline: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff0000; }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all ${active ? 'bg-brand-red text-white' : 'text-neutral-400 hover:bg-neutral-800'}`}>
    <Icon size={18} /> <span className="font-bold text-sm">{label}</span>
  </div>
);

export default DashboardAshghal;