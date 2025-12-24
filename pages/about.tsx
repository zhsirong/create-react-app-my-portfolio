import Header from '../components/Header';
import Navigation from '../components/Navigation';

const experiences = [
  {
    org: 'Michigan Ross Business+Tech',
    role: 'Generalist Final Top3 Team',
    type: 'Part-time',
    dates: 'Sep 2025 – Present',
    location: 'Ann Arbor, Michigan · On-site',
    summary: [
      'Worked on interdisciplinary, data-informed product and business problem solving.',
      'Contributed across UX, e-commerce, and research to shape concepts and recommendations.',
      'Collaborated in a fast-paced team setting to deliver finalist-level outcomes.',
    ],
  },
  {
    org: 'Articares',
    role: 'Product & Marketing Intern',
    type: 'Full-time',
    dates: 'Feb 2025 – Sep 2025',
    location: 'Singapore',
    summary: [
      'Ran market and competitor research to support positioning and go-to-market planning for a digital rehab product.',
      'Built B2B marketing materials and landing drafts in Figma/Illustrator, aligned with product strategy and personas.',
      'Used Google Analytics, Excel, and A/B testing to turn engagement signals into iteration and campaign improvements.',
    ],
  },
  {
    org: 'Initium.AI Inc.',
    role: 'UX Research Consultant',
    type: '',
    dates: 'Jan 2025 – May 2025',
    location: '',
    summary: [
      'Conducted UX research and heuristic evaluation to identify usability gaps across core product flows.',
      'Synthesized findings into clear recommendations to improve clarity, trust, and task success.',
    ],
  },
  {
    org: 'University of Michigan – Ross School of Business',
    role: 'Data Specialist | Ross Business + Tech Datathon',
    type: '',
    dates: 'Feb 2025',
    location: 'Ann Arbor, Michigan',
    summary: [
      'Led a team to develop a data-driven concept solution and narrative for an immigration consulting scenario.',
      'Applied data analysis and lightweight machine learning to surface key variables and insights.',
      'Created a dashboard and quantitative visuals to communicate actionable recommendations.',
    ],
  },
  {
    org: 'University of Michigan',
    role: 'Marketing & Media Assistant',
    type: 'Part-time',
    dates: 'Oct 2023 – Aug 2024',
    location: 'Ann Arbor, Michigan · Hybrid',
    summary: [
      'Translated audience and behavioral insights into content strategies to improve engagement across digital channels.',
      'Partnered with cross-functional teams to design and optimize media assets with usability best practices.',
      'Strengthened brand consistency and user experience through iterative edits and performance-driven refinements.',
    ],
  },
  {
    org: 'University of Michigan',
    role: 'Student Consultant',
    type: '',
    dates: 'Oct 2023 – May 2024',
    location: 'Ann Arbor, Michigan',
    summary: [
      'Led research by analyzing 180+ user comments to improve career service experiences for diverse student groups.',
      'Ran usability testing and synthesis to address accessibility and workflow pain points.',
      'Delivered iterative, inclusive UX recommendations in partnership with faculty and staff.',
    ],
  },
  {
    org: 'Qingyun Chinese Fork Music Club',
    role: 'Graphic / Project Designer',
    type: '',
    dates: 'Sep 2023 – Mar 2024',
    location: 'Ann Arbor, Michigan',
    summary: [
      'Designed promotional content and event materials across platforms with a focus on clarity and engagement.',
      'Developed brand-consistent visual systems and templates to scale communications.',
      'Managed end-to-end asset production with tight timelines and stakeholder feedback.',
    ],
  },
  {
    org: 'UAI Summer School Co. Ltd.',
    role: 'Marketing Specialist (Part-Time)',
    type: 'Part-time',
    dates: 'Aug 2023 – Jan 2024',
    location: 'Wuhan, China',
    summary: [
      'Owned growth-oriented marketing operations on Chinese social platforms for a 1,000+ international student audience.',
      'Improved participant experience by streamlining communication workflows and feedback loops.',
      'Delivered interactive sessions that increased engagement by applying UX principles to presentations.',
    ],
  },
  {
    org: 'Shanghai TONGDA Planning Architectural Design Co., Ltd.',
    role: 'UX Designer',
    type: 'Full-time',
    dates: 'Feb 2022 – Aug 2022',
    location: 'Shanghai, China · On-site',
    summary: [
      'Conducted user testing and spatial analysis to improve accessibility and usability in public space design.',
      'Prototyped and iterated concepts with stakeholders to align needs, constraints, and outcomes.',
      'Presented design proposals and refined solutions through structured feedback cycles.',
    ],
  },
  {
    org: 'Shanghai LANQI Architectural Design Consulting Co., Ltd.',
    role: 'Project Manager (Intern)',
    type: 'Internship',
    dates: 'Jul 2021 – Aug 2022',
    location: 'Shanghai, China · On-site',
    summary: [
      'Coordinated cross-functional teams to keep projects on schedule and improve delivery workflows.',
      'Supported adoption of digital tools in planning/design processes to boost efficiency and collaboration.',
      'Researched regulations and site constraints to inform compliant, practical design decisions.',
    ],
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

type SkillPillsProps = {
  skills?: string[];
};

function SkillPills({ skills }: SkillPillsProps) {
  if (!skills?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 hover:border-white/20 transition"
        >
          {s}
        </span>
      ))}
    </div>
  );
}


export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-32">
      <div className="top-gradient-bar" />

      <Header />

      {/* Work Experience */}
      <section className="mb-20">
        <h2 className="text-lg mb-8">Work experience</h2>

        <div className="border-t border-white/10">
          {experiences.map((exp, idx) => (
            <div key={`${exp.org}-${exp.role}-${idx}`} className="py-6 border-b border-white/5">
              <div className="flex items-baseline justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-sm uppercase tracking-tighter">
                    <span className="text-white">{exp.org}</span>
                    <span className="text-gray-500"> · {exp.role}</span>
                    {exp.type ? <span className="text-gray-600"> · {exp.type}</span> : null}
                  </div>
                </div>

                <div className="text-xs text-gray-500 whitespace-nowrap">{exp.dates}</div>
              </div>

              {exp.location ? <div className="mt-2 text-xs text-gray-500">{exp.location}</div> : null}

              <div className="mt-3 space-y-2 text-sm text-gray-400 leading-relaxed max-w-2xl">
                {exp.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 inline-block border border-green-900/50 bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-xs">
          Available for projects
        </div>
      </section>

      {/* Skills */}
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
  );
}
