import React from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
  image?: string;
  date: string;
};

export default function ProjectCard({ id, title, desc, image, date }: Props) {
  return (
    <div className="group cursor-pointer w-full mb-12">
      {/* 1. 大图展示区域 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[28px] bg-[#0c0c0c] border border-white/[0.06] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-white/[0.2] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover saturate-[0.9] transition-all duration-1000 ease-out group-hover:scale-[1.05] group-hover:saturate-[1.1]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
            <span className="text-zinc-800 font-serif italic text-4xl">{title[0]}</span>
          </div>
        )}
        
        {/* 内部高光边缘 */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.1] rounded-[28px] pointer-events-none" />
      </div>

      {/* 2. 强化后的信息区 */}
      <div className="mt-8 px-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 overflow-hidden">
          {/* 项目标题：字号加大到 22px，极粗，增加悬浮位移感 */}
          <h3 className="text-[22px] font-bold text-white tracking-tight transition-all duration-500 group-hover:translate-x-1">
            {title}
          </h3>
          
          {/* 项目描述：作为副标题，字号保持精致，颜色调淡以突出上方标题 */}
          <p className="text-[14px] text-zinc-500 font-normal leading-relaxed max-w-[90%] transition-colors duration-300 group-hover:text-zinc-300">
            {desc}
          </p>
        </div>

        {/* 日期：靠右对齐，保持极简感 */}
        <div className="shrink-0 mb-1">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] antialiased">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
