import React from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
  image?: string; // 新增：项目封面图
  date: string;   // 新增：日期
};

export default function ProjectCard({ id, title, desc, image, date }: Props) {
  return (
    <div className="group cursor-pointer w-full">
      {/* 1. 大图展示区域 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-[#0c0c0c] border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.15] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          /* 占位图状态：如果没有图片，显示一个优雅的渐变 */
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
            <span className="text-zinc-800 font-serif italic text-4xl">{title[0]}</span>
          </div>
        )}
        
        {/* 覆盖层：增加微弱的内部阴影，让图片更有质感 */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[24px]" />
      </div>

      {/* 2. 信息对齐行 (标题 + 描述 + 日期) */}
      <div className="mt-5 px-1 flex flex-row items-baseline justify-between gap-4">
        <div className="flex flex-row items-baseline gap-4 overflow-hidden">
          {/* 项目标题 */}
          <h3 className="text-[15px] font-medium text-white/90 shrink-0 tracking-tight">
            {title}
          </h3>
          
          {/* 分隔点或短横线 (可选) */}
          <span className="text-white/10 text-[12px]">—</span>

          {/* 项目描述：限制为单行，超出显示省略号 */}
          <p className="text-[13px] text-gray-500 font-normal truncate leading-none">
            {desc}
          </p>
        </div>

        {/* 日期：靠右对齐，使用等宽字体增强设计感 */}
        <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest shrink-0">
          {date}
        </span>
      </div>
    </div>
  );
}
