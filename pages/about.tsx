import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

type Experience = {
  org: string;
  orgUrl?: string;
  dates: string;
  role?: string;
  location?: string;
  type?: string;
  context: string;
  summary?: string[];
};

const experiences: Experience[] = [
  {
    org: 'Michigan Ross Business+Tech',
    orgUrl: 'https://businesstech.bus.umich.edu/',
    dates: 'Sep 2025 – Present',
    role: 'Generalist Final Top3 Team',
    location: 'Ann Arbor, Michigan · On-site',
    type: 'Part-time',
    context:
      "I'm currently part of Michigan Ross Business+Tech, working as a generalist finalist team member. I contribute across UX, e-commerce, and research to shape concepts and recommendations in a fast-paced setting.",
  },
  {
    org: 'Articares',
    orgUrl: 'https://articares.com/',
    dates: 'Feb 2025 – Sep 2025',
    role: 'Product & Marketing Coordinator (Hands-On)',
    location: 'Singapore',
    type: 'Full-time',
    context:
      "At Articares, I was the hands-on driver for product & marketing work—running market/competitor research, building B2B materials and landing drafts in Figma/Illustrator, and using GA/Excel with A/B testing to iterate campaigns and improve engagement.",
  },
  {
    org: 'Initium.AI',
    orgUrl: 'https://www.initium.ai/',
    dates: 'Jan 2025 – May 2025',
    role: 'UX Research Consultant',
    context:
      'At Initium.AI, I conducted UX research and heuristic evaluation across key flows, then synthesized findings into focused, actionable recommendations to improve clarity, trust, and task success.',
  },
  {
    org: 'Ross School of Business Datathon',
    orgUrl: 'https://businesstech.bus.umich.edu/datathon/',
    dates: 'Feb 2025',
    role: 'Data Specialist | Ross Business + Tech Datathon',
    location: 'Ann Arbor, Michigan',
    context:
      'At the Ross School of Business Datathon, I led a team to develop a data-driven concept solution and narrative, applying analysis and lightweight ML to surface key variables and communicate recommendations through a dashboard.',
  },
  {
    org: 'University of Michigan School for Environment and Sustainability (SEAS)',
    orgUrl: 'https://seas.umich.edu/',
    dates: 'Oct 2023 – Aug 2024',
    role: 'Marketing & Media Assistant',
    location: 'Ann Arbor, Michigan · Hybrid',
    type: 'Part-time',
    context:
      'Before that, I worked at the University of Michigan SEAS, translating audience and behavioral insights into content strategies, collaborating cross-functionally on media assets, and refining communications through iterative improvements.',
  },
  {
    org: 'University of Michigan Student Advisory Board (SAB)',
    orgUrl: 'https://studentlife.umich.edu/article/student-advisory-board',
    dates: 'Oct 2023 – May 2024',
    role: 'Student Consultant',
    location: 'Ann Arbor, Michigan',
    context:
      'In parallel, I served as a Student Consultant with the University of Michigan Student Advisory Board (SAB), analyzing 180+ user comments, running usability synthesis, and delivering inclusive UX recommendations with faculty and staff.',
  },
  {
    org: 'Qingyun Chinese Fork Music Club',
    dates: 'Sep 2023 – Mar 2024',
    role: 'Graphic / Project Designer',
    location: 'Ann Arbor, Michigan',
    context:
      'I also designed and produced event and promotional materials for Qingyun Chinese Fork Music Club, building reusable visual systems and delivering assets end-to-end under tight timelines.',
  },
  {
    org: 'UAI Summer School Co. Ltd.',
    dates: 'Aug 2023 – Jan 2024',
    role: 'Marketing Specialist (Part-Time)',
    location: 'Wuhan, China',
    type: 'Part-time',
    context:
      'At UAI Summer School, I ran growth-oriented marketing operations on Chinese platforms for a 1,000+ international student audience, improving user experience through streamlined workflows, feedback loops, and interactive sessions.',
  },
  {
    org: 'Shanghai TONGDA Planning Architectural Design Co., Ltd.',
    dates: 'Feb 2022 – Aug 2022',
    role: 'UX Designer',
    location: 'Shanghai, China · On-site',
    type: 'Full-time',
    context:
      'Earlier, I worked as a UX Designer at Shanghai TONGDA, conducting user testing and spatial analysis to improve accessibility in public spaces, and iterating solutions with stakeholders through structured feedback cycles.',
  },
  {
    org: 'Shanghai LANQI Architectural Design Consulting Co., Ltd.',
    dates: 'Jul 2021 – Aug 2022',
    role: 'Project Manager (Intern)',
    location: 'Shanghai, China · On-site',
    type: 'Internship',
    context:
      'Before that, I supported project delivery at Shanghai LANQI as a PM intern—coordinating cross-functional teams, improving workflows, and researching regulations and site constraints to inform practical design decisions.',
  },
];

const skillGroups = [
  {
    title: 'Product & Business',
    skills: [
      'Product Management',
      'Product Strategy',
      'Business Analytics',
      'E-Commerce',
      'Consumer Behavior',
      'Business Strategy',
      'Project Management',
      'Client Relationships',
      'Agile Methodologies',
      'User-Centered Agile Development',
    ],
  },
  {
    title: 'UX & Design',
    skills: [
      'UX Design Foundation',
      'User Experience (UX)',
      'UX Research',
      'UX Research and Assessment',
      'Wireframing',
      'Visual Design',
      'Graphic Design',
      'Branding',
      'Design Foundation',
      'Digital Media',
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      'Predictive Analytics',
      'Data Analysis',
      'Data Visualization',
      'Data Modeling',
      'Logical Data Modeling',
      'Advanced Spreadsheet',
      'SQL',
      'A/B Testing',
      'Market Research',
      'Competitive Analysis',
    ],
  },
  {
    title: 'Engineering',
    skills: ['Software Development', 'JavaScript', 'Python', 'Django', 'HTML/CSS', 'AutoCAD'],
  },
  {
    title: 'Tools & Languages',
    skills: [
      'Figma',
      'Adobe Illustrator',
      'Photoshop',
      'Adobe InDesign',
      'Adobe XD',
      'Zeplin',
      'English',
      'French',
      'Japanese',
    ],
  },
];

function SkillPills({ skills }: { skills?: string[] }) {
  if (!skills?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

/** “Wix↗” 这种 inline link */
function InlineLink({ children, href }: { children: React.ReactNode; href?: string }) {
  if (!href) return <span className="text-white">{children}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-white/80 hover:text-white hover:bg-white/10 transition"
    >
      <span>{children}</span>
      <span className="text-white/50">↗</span>
    </a>
  );
}

function WorkSwitcher({
  mode,
  setMode,
}: {
  mode: 'context' | 'list';
  setMode: (m: 'context' | 'list') => void;
}) {
  return (
    <div className="mt-8 mb-10 grid grid-cols-2 rounded-2xl border border-white/10 bg-white/5 p-1 max-w-xl">
      <button
        type="button"
        onClick={() => setMode('context')}
        className={`rounded-xl py-3 text-sm transition ${
          mode === 'context' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        Give me context
      </button>
      <button
        type="button"
        onClick={() => setMode('list')}
        className={`rounded-xl py-3 text-sm transition ${
          mode === 'list' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        Just show me the list
      </button>
    </div>
  );
}

function ContextView({ items }: { items: Experience[] }) {
  return (
    <div className="space-y-10 text-base text-gray-200/90 leading-relaxed max-w-3xl">
      {items.map((exp) => (
        <p key={`${exp.org}-${exp.dates}`}>
          {(() => {
            const parts = exp.context.split(exp.org);
            if (parts.length === 1) return exp.context;

            return (
              <>
                {parts[0]}
                <InlineLink href={exp.orgUrl}>{exp.org}</InlineLink>
                {parts.slice(1).join(exp.org)}
              </>
            );
          })()}
        </p>
      ))}
    </div>
  );
}

function ListView({ items }: { items: Experience[] }) {
  const rows = useMemo(
    () =>
      items.map((e) => ({
        org: e.org,
        orgUrl: e.orgUrl,
        dates: e.dates,
      })),
    [items]
  );

  return (
    <div className="border-t border-white/10">
      {rows.map((r) => (
        <div
          key={`${r.org}-${r.dates}`}
          className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-5 border-b border-white/5"
        >
          <div className="text-white">
            <InlineLink href={r.orgUrl}>{r.org}</InlineLink>
          </div>
          <div className="h-px bg-white/10" />
          <div className="text-gray-300 whitespace-nowrap">{r.dates}</div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const [mode, setMode] = useState<'context' | 'list'>('context');

  return (
    <div className="w-full mb-32">
      <div className="top-gradient-bar" />

      {/* ✅ 一个大容器：Header + Body 连在一起 */}
      <div className="w-full px-4 md:px-8 mt-6">
        <div className="site-shell">
          {/* Header 区域（不再单独包 px） */}
          <div className="shell-header">
            <Header />
          </div>

          {/* ✅ 分割线（你要完全无缝就删掉这一行） */}
          <div className="shell-sep" />

          {/* Body 毛玻璃区域（红圈那块） */}
          <div className="shell-body">
            <div className="glass-panel-inner">
              <section className="mb-24">
                <h2 className="text-4xl md:text-5xl tracking-tight">Where I&apos;ve worked</h2>

                <WorkSwitcher mode={mode} setMode={setMode} />

                {mode === 'context' ? <ContextView items={experiences} /> : <ListView items={experiences} />}

                <div className="mt-12 inline-flex items-center gap-4 px-6 py-4 rounded-full text-white neon-pill bg-white/5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full neon-dot" />
                  <span className="text-4xl md:text-5xl leading-none font-serif tracking-tight">
                    Available for projects
                  </span>
                </div>
              </section>

              <section className="mb-20">
                <h2 className="text-lg mb-8">Skills & capabilities</h2>
                <div className="border-t border-white/10 pt-8 space-y-10">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">{group.title}</h3>
                      <SkillPills skills={group.skills} />
                    </div>
                  ))}
                </div>
              </section>

              <Navigation active="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

