import { Code } from "lucide-react";

const Pill = ({ text }: { text: string }) => (
  <div className="px-4 py-2 border border-white/10 rounded-full text-gray-300 text-sm bg-[#111827] hover:border-green-400 hover:text-white transition-all duration-300">
    {text}
  </div>
);

const SkillCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-white/10 rounded-2xl p-8 bg-[#0b0f17] backdrop-blur-sm hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.12)] transition-all duration-300">
    <h3 className="text-green-400 text-sm tracking-widest mb-6">
      {title}
    </h3>

    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-24 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-16">
        <Code className="text-green-400" />
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Languages */}
        <SkillCard title="LANGUAGES">
          <Pill text="Java" />
          <Pill text="Python" />
          <Pill text="C++" />
          <Pill text="JavaScript" />
          <Pill text="TypeScript" />
          <Pill text="PostgreSQL" />
        </SkillCard>

        {/* Frameworks */}
        <SkillCard title="FRAMEWORKS">
          <Pill text="React.js" />
          <Pill text="Next.js" />
          <Pill text="Node.js" />
          <Pill text="Express.js" />
          <Pill text="TailwindCSS" />
        </SkillCard>

        {/* Tools */}
        <SkillCard title="TOOLS">
          <Pill text="Git" />
          <Pill text="GitHub" />
          <Pill text="CRON" />
          <Pill text="VS Code" />
          <Pill text="Supabase" />
          <Pill text="VMware" />
        </SkillCard>

      </div>
    </section>
  );
}