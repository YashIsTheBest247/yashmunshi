import { FolderGit2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  tech,
  points,
  link,
  index,
}: {
  title: string;
  tech: string;
  points: string[];
  link: string;
  index: number;
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="group border border-white/10 p-8 rounded-2xl bg-[#0b0f17] transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-2"
  >
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-semibold group-hover:text-green-400 transition">
        {title}
      </h3>

      <ExternalLink
        size={18}
        className="text-gray-500 group-hover:text-green-400 transition"
      />
    </div>

    <p className="text-green-400 text-sm mt-3 mb-4">
      {tech}
    </p>

    <ul className="text-gray-400 space-y-2 text-sm">
      {points.map((point, i) => (
        <li key={i}>▸ {point}</li>
      ))}
    </ul>
  </motion.a>
);

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-24 bg-[#0f172a] scroll-mt-24">
      <div className="flex items-center gap-3 mb-12">
        <FolderGit2 className="text-green-400" />
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <ProjectCard
          index={0}
          title="DealDrop"
          tech="React.js, Node.js, Supabase, OAuth"
          link="https://dealdroppro.vercel.app/"
          points={[
            "Built scalable price tracking system.",
            "Integrated Firecrawl API automation.",
            "CRON-based price alerts with email notifications.",
          ]}
        />

        <ProjectCard
          index={1}
          title="PreVuCam"
          tech="Python, OpenCV, Streamlit"
          link="https://prevucam.streamlit.app/"
          points={[
            "AI motion-based video trimming.",
            "Intelligent event buffering system.",
            "Automated MP4 compilation pipeline.",
          ]}
        />

        <ProjectCard
          index={2}
          title="PioneerAI"
          tech="React, TailwindCSS, Next.js, PostgreSQL"
          link="https://pioneeraipro.vercel.app/"
          points={[
            "AI Learning Assistant.",
            "Flashcard generation.",
            "Self-paced learning.",
          ]}
        />

      </div>
    </section>
  );
}