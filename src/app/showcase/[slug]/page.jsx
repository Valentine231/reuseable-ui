"use client";

import { notFound } from "next/navigation";
import { getComponentBySlug } from "@/lib/component-registry";
import { AlertCircle } from "lucide-react";
import React from "react";

export default function ShowcasePage({ params }) {
  // Use React.use() to unwrap params correctly in Next.js 14/15 
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  
  const compData = getComponentBySlug(slug);

  if (!compData) {
    return notFound();
  }

  const DynamicComponent = compData.component;

  return (
    <div className="w-full h-full p-4 md:p-12 flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <div className="flex bg-white/5 border border-white/10 rounded-full px-4 py-1.5 items-center gap-2 backdrop-blur-md">
           <compData.icon size={14} className="text-indigo-400" />
           <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">{compData.title}</span>
        </div>
      </div>
      
      {/* Error Boundary / Fallback Wrapper inside the frame */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <React.Suspense fallback={
          <div className="flex flex-col items-center text-slate-500 animate-pulse">
            <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm">Mounting {compData.title}...</p>
          </div>
        }>
          <div className="w-full max-w-full flex flex-col items-center justify-start min-h-[300px] pt-16">
            <DynamicComponent />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
}
