import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string; // 新增：封面图路径
  date: string;  // 新增：完成日期
};

type ChangelogItem = {
  date: string;
  content: string;
};

// 更新后的项目数据，增加了图片占位符和日期
const projects: Project[] = [
  {
    id: "zori",
    title: "Zori",
    desc: "Founding designer at the startup where we help people find professionals by recommendation.",
    image: "/images/zori-cover.jpg", // 替换为你实际的图片路径
    date: "Feb 2024",
  },
  {
    id: "sapera",
    title: "Sapera",
    desc: "Lead the design of a project management platform.",
    image: "/images/sapera-cover.jpg",
    date: "Jan 2024",
  },
  {
    id: "olx",
    title: "2+ items in order at OLX",
    desc: "Designed a way to purchase up to 5 items per deal.",
    image: "/images/olx-cover.jpg",
    date: "Dec 2023",
  },
];

const changelog: ChangelogItem[] = [
  {
    date: "March 2025",
    content: "Shipped an end-to-end UX case study for an AI-assisted healthcare product.",
  },
  {
    date: "February 2025",
    content: "Redesigned a consumer fintech dashboard.",
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="max-w-[1400px] mx-auto px-10 pb-32 bg-black min-h-screen text-white">
      <div className="top-gradient-bar" /> 
      <Header />

      <div className="flex flex-col xl:flex-row gap-20 mt-16">
        {/* 左侧：大图垂直展示区 */}
        <main className="flex-1 flex flex-col gap-20">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              desc={p.desc}
              image={p.image}
              date={p.date}
            />
          ))}
        </main>

        {/* 右侧：保持原样或微调 */}
        <aside className="w-full xl:w-72 shrink-0">
          <h2 className="text-white font-serif italic text-2xl mb-8">
            Changelog
          </h2>
          <div className="border-l border-white/10 pl-5 space-y-10 text-[12px] leading-relaxed text-gray-500">
            {changelog.map((item, idx) => (
              <div key={`${item.date}-${idx}`}>
                <p className="text-white font-sans mb-2 uppercase tracking-widest text-[10px]">
                  {item.date}
                </p>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Navigation active="work" />
    </div>
  );
}
      <Navigation active="work" />
    </div>
  );
}
