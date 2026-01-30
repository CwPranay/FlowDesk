export default function Navbar() {
  return (
    <header className="border-b border-[#E2E8F0] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        
        <div className="text-xl font-bold text-[#2563EB]">
          FlowDesk
        </div>

        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-[#0F172A]">Product</a>
          <a href="#" className="hover:text-[#0F172A]">Features</a>
          <a href="#" className="hover:text-[#0F172A]">Pricing</a>
          <a href="#" className="hover:text-[#0F172A]">Docs</a>
        </nav>

        
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-[#64748B] cursor-pointer hover:text-[#0F172A]">
            Login
          </button>

          <button className="bg-[#2563EB] text-white px-5 py-2 rounded-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}
