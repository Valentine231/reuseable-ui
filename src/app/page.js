"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { componentRegistry } from "@/lib/component-registry";
import { Search, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentRegistry.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-transparent to-transparent"></div>

      <nav className="border-b border-white/5 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 p-2 rounded-xl text-white">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ZenStore<span className="text-indigo-400"> UI</span></span>
          </div>
          <div className="relative w-64 md:w-96 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-white placeholder:text-slate-500"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 items-center pt-24 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 mb-6 tracking-tight"
          >
            The Component Playground
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            A curated collection of {componentRegistry.length}+ beautifully crafted interactive React components and micro-interactions. Click any card to experience it live.
          </motion.p>
          
          <div className="relative mt-8 sm:hidden">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 pl-10 pr-4 focus:outline-none focus:border-indigo-500/50 transition-all text-white"
            />
          </div>
        </div>

        {filteredComponents.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredComponents.map((component, idx) => (
              <Link href={`/showcase/${component.slug}`} key={component.slug}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative bg-white/5 border border-white/5 hover:border-indigo-500/30 rounded-3xl p-6 overflow-hidden transition-colors h-full flex flex-col cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors text-slate-300">
                      <component.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="p-2 bg-black/20 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">{component.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-2">{component.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-32 text-slate-500 flex flex-col items-center">
            <Search size={48} className="mb-4 opacity-20" />
            <p className="text-xl">No components found for &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </main>
    </div>
  );
}
