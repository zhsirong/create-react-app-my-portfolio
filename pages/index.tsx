import React from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";

// 模拟图中的项目数据
const projects = [
  { id: 'zori', title: 'Zori', desc: 'Founding designer at the startup where we help people find professionals by recommendation.', color: '#f59e0b' },
  { id: 'sapera', title: 'Sapera', desc: 'Lead the design of a project management platform.', color: '#3b82f6' },
  { id: 'olx', title: '2+ items in order at OLX', desc: 'Designed a way to purchase up to 5 items per deal on a platform that historically supported just 1.', color: '#10b981' },
  { id: 'handy', title: 'Handy Components', desc: 'Created a Figma plugin that scans your file and inserts components mimicking the style of your UI.', color: '#8b5cf6' }
];

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-10 pb-32">
      <div className="top-gradient-bar" /> {/* 全局定义的彩色条 */}
      <Header />
      
      <div className="flex flex-col xl:flex-row gap-24 mt-10">
        {/* 左侧主要项目展示区 */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 self-start">
          {projects.map((p) => (
            <ProjectCard key={p.id} id={p.id} title={p.title} desc={p.desc} color={p.color} />
          ))}
        </main>

        {/* 右侧更新日志区 */}
        <aside className="w-full xl:w-72 shrink-0">
          <h2 className="text-white font-serif italic text-xl mb-6">Changelog</h2>
          <div className="border-l border-white/10 pl-5 space-y-10 text-[11px] leading-relaxed text-gray-500">
            <div>
              <p className="text-white font-sans mb-1 uppercase tracking-widest">February 13, 2024</p>
              <p>Refined together an interactive new concept <span className="text-white underline cursor-pointer italic">drag-to-open-links</span></p>
            </div>
            <div>
              <p className="text-white font-sans mb-1 uppercase tracking-widest">January 14, 2024</p>
              <p>Sold my startup <span className="text-white underline cursor-pointer italic">companies.tools</span></p>
            </div>
            <button className="text-white/40 hover:text-white transition-colors italic">Read all updates →</button>
          </div>
        </aside>
      </div>

      <Navigation active="work" />
    </div>
  );
}