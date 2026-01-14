import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";

type Project = {
  id: string;
  title: string;
  desc: string;
  image?: string; // 新增：项目封面（可选）
  date: string;   // 新增：日期
};

type ChangelogItem = {
  date: string;
  content: string;
};

// 项目数据（按你截图里的结构：id/title/desc/image/date）
const projects: Project[] = [
  {
    id: "calmer",
    title: "CalmER",
    desc: "Designed an AI-assisted healthcare experience focused on reducing anxiety, improving clarity, and supporting decision-making in high-stress environments.",
    image: "/images/calmer.jpg",
    date: "Mar 2025",
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
    desc: "Designed a way to purchase up to 5 items per deal on a platform that historically supported just 1.",
    image: "/images/olx-cover.jpg",
    date: "Dec 2023",
  },
];

const changelog: ChangelogItem[] = [
  {
    date: "March 2025",
    content:
      "Shipped an end-to-end UX case study for an AI-assisted healthcare product, covering research synthesis, system framing, and interaction design.",
  },
  {
    date: "February 2025",
    content:
      "Redesigned a consumer fintech dashboard with a focus on financial clarity, progressive disclosure, and trust-driven UI patterns.",
  },
  {
    date: "January 2025",
    content:
      "Built and tested an interactive prototype exploring AI-assisted decision support in high-stress environments.",
  },
  {
    date: "December 2024",
    content:
      "Published a personal design system to unify visual language across product, UX, and data storytelling work.",
  },
];

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-10 pb-32 bg-black min-h-screen text-white">
      <div className="top-gradient-bar" />
      <Header />

      <div className="flex flex-col xl:flex-row gap-20 mt-16">
        {/* 左侧：项目区 */}
        <main className="flex-1 flex flex-col gap-20">
          <div className="flex flex-wrap gap-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}          // ✅ 必须传！key 不会进入 props
                title={p.title}
                desc={p.desc}
                image={p.image}
                date={p.date}
              />
            ))}
          </div>
        </main>

        {/* 右侧：Changelog */}
        <aside className="w-full xl:w-72 shrink-0">
          <h2 className="text-white font-serif italic text-xl mb-6">
            Changelog
          </h2>

          <div className="border-l border-white/10 pl-5 space-y-10 text-[11px] leading-relaxed text-gray-500">
            {changelog.map((item, idx) => (
              <div key={`${item.date}-${idx}`}>
                <p className="text-white font-sans mb-2 uppercase tracking-widest">
                  {item.date}
                </p>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* ✅ 只保留一个 Navigation，别重复 */}
      <Navigation active="work" />
    </div>
  );
}

