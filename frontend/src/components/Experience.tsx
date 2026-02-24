import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-10 py-24 scroll-mt-24">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <Briefcase className="text-green-400" size={28} />
        <h2 className="text-4xl font-bold">Experience</h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l border-gray-700 ml-4 pl-12 space-y-20">

        {/* Item 1 */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Circle */}
          <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full border-2 border-green-400 bg-[#0b0f17] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>

          <h3 className="text-xl font-semibold leading-snug">
            Software Development Intern{" "}
            <span className="text-green-400">
              @ Suvidha Foundation
            </span>
          </h3>

          <p className="text-gray-500 mt-1 text-sm">
            Nov 2025 – Present · Remote
          </p>

          <ul className="mt-4 space-y-3 text-gray-400 text-[15px]">
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Developed responsive React frontend components.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Integrated secure Google OAuth 2.0 authentication.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Reduced alert latency by 25%.
            </li>
          </ul>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Circle */}
          <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full border-2 border-green-400 bg-[#0b0f17] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>

          <h3 className="text-xl font-semibold leading-snug">
            Campus Ambassador{" "}
            <span className="text-green-400">
              @ Internshala
            </span>
          </h3>

          <p className="text-gray-500 mt-1 text-sm">
            Aug 2025 – Present · Bhubaneswar
          </p>

          <ul className="mt-4 space-y-3 text-gray-400 text-[15px]">
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Led structured technical projects.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Mentored teams building scalable applications.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Organized workshops and dev sessions.
            </li>
          </ul>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Circle */}
          <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full border-2 border-green-400 bg-[#0b0f17] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>

          <h3 className="text-xl font-semibold leading-snug">
            Founder{" "}
            <span className="text-green-400">
              @ NomadFilms
            </span>
          </h3>

          <p className="text-gray-500 mt-1 text-sm">
            May 2024 – Jan 2025 · Dhanbad
          </p>

          <ul className="mt-4 space-y-3 text-gray-400 text-[15px]">
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Lead production workflows and team coordination. 
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Managed post-production to deliver high-quality cinematic content.
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">▸</span>
              Directed creative strategy, client acquisition, and brand positioning.
            </li>
          </ul>
        </motion.div>

        
      </div>
    </section>
  );
}