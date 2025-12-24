import React from 'react';
import Navigation from '../../components/Navigation';

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* 顶部彩色条 */}
      <div className="top-gradient-bar" /> 
      
      <main className="max-w-2xl mx-auto pt-32 px-6 pb-40">
        <button className="text-[10px] text-gray-500 border border-white/10 px-3 py-1 rounded-md mb-20 hover:bg-white/5">
          ← Back to work
        </button>

        <div className="text-center">
          <div className="w-14 h-14 bg-blue-600 rounded-xl mx-auto mb-6 shadow-lg shadow-blue-600/20" />
          <h1 className="text-4xl font-medium mb-12">Handy Components</h1>
          
          {/* 项目元数据 */}
          <div className="space-y-3 text-[11px] text-gray-500 uppercase tracking-widest">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Year</span>
              <span className="text-white">2022</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>My role</span>
              <span className="text-white">Design, Prototype, Code, Marketing</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>See live</span>
              <span className="text-white underline cursor-pointer italic tracking-normal lowercase">figma.com/...</span>
            </div>
          </div>
        </div>

        {/* 内容区块 */}
        <div className="mt-20 space-y-12">
          <section>
            <h4 className="text-xs font-medium mb-4">What's been done</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Designed, coded, gathered feedback and iterated.</p>
          </section>
          
          {/* Smart UI Kit 预览图区域 */}
          <div className="bg-white rounded-2xl p-8 text-black text-center">
             <h2 className="text-2xl font-bold mb-4">Smart UI kit that you can bring along into any file.</h2>
             <div className="flex flex-wrap justify-center gap-2">
                <span className="border border-black/10 px-3 py-1 rounded-full text-[10px]">Magically match the look of your UI</span>
                <span className="border border-black/10 px-3 py-1 rounded-full text-[10px]">Searchable</span>
             </div>
          </div>
        </div>
      </main>

      <Navigation active="work" />
    </div>
  );
}