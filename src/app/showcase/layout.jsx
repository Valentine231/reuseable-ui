"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";
import { Layout, ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ShowcaseLayout({ children }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filtered = componentRegistry.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-white/5 bg-slate-950/50 backdrop-blur-xl flex flex-col hidden md:flex shrink-0">
        <div className="p-6 border-b border-white/5 space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <ArrowLeft size={16} />
            </div>
            Back to Home
          </Link>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 text-white placeholder:text-slate-600 transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1 custom-scrollbar">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">All Components</p>
          {filtered.map((c) => {
            const isActive = pathname === `/showcase/${c.slug}`;
            return (
              <Link 
                key={c.slug} 
                href={`/showcase/${c.slug}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  isActive 
                    ? "bg-indigo-500/10 text-indigo-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border border-indigo-500/20" 
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <div className={`p-1.5 rounded-md ${isActive ? 'bg-indigo-500/20' : 'bg-black/20'}`}>
                   <c.icon size={16} />
                </div>
                <span className="text-sm font-medium truncate">{c.title}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative h-full">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-slate-950/80 backdrop-blur-md absolute top-0 w-full z-10">
           <Link href="/" className="p-2 bg-white/5 rounded-lg border border-white/5">
              <ArrowLeft size={20} className="text-slate-300" />
           </Link>
           <span className="font-medium text-slate-200">Component Showcase</span>
           <div className="w-8"></div>
        </header>

        {/* Dynamic Component Viewer */}
        <div className="flex-1 overflow-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950 to-slate-950">
           <div className="w-full h-full flex items-center justify-center relative p-4 md:p-8 pt-20 md:pt-8 min-h-[500px]">
              {/* Subtle grid pattern background for the viewer */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              
              {/* The Rendered Component */}
              <div className="relative z-10 w-full max-w-5xl h-full bg-black/20 border border-white/5 shadow-2xl rounded-3xl overflow-hidden flex items-center justify-center backdrop-blur-sm">
                <motion.div 
                  key={pathname}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full h-full flex flex-col overflow-auto custom-scrollbar"
                >
                  {children}
                </motion.div>
              </div>
           </div>
        </div>
      </main>
      
      {/* Scrollbar styles to keep UI clean */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}
