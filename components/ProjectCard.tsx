import Link from "next/link";

type Props = {
  id: string;
  title: string;
  desc: string;
  color: string;
};

// components/ProjectCard.tsx
export default function ProjectCard({ id, title, desc, color }: any) {
  return (
    <div className="bg-[#0c0c0c] border border-white/[0.04] p-[18px] rounded-[22px] hover:bg-[#111] hover:border-white/[0.12] transition-all duration-500 cursor-pointer group">
      <div className="flex items-center gap-4">
        {/* 图标：重点是圆角大小 */}
        <div 
          className="w-11 h-11 rounded-[12px] shrink-0 shadow-inner border border-white/[0.05]" 
          style={{ backgroundColor: color }} 
        />
        <div className="overflow-hidden">
          {/* 标题：稍微细一点，字号 13.5px 左右 */}
          <h3 className="text-[13.5px] font-medium text-white/90 leading-tight tracking-tight">
            {title}
          </h3>
          {/* 描述：字号更小，颜色调淡 */}
          <p className="text-[11.5px] text-gray-500 truncate mt-1 font-normal leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}