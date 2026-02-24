import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const items = [
    "Top 20 Teams at CyberPeace Hackathon",
    "District Rank 4 & School Topper in IEO",
    "Special Social Work Award by EduCare",
    "Shortlisted for Samsung Fellowship (ISWDP 7.0)",
    "Founder & Content Lead at NomadFilms"
  ];

  return (
    <section
      id="achievements"
      className="px-10 py-24 bg-[#0f172a] scroll-mt-24"
    >
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <Trophy className="text-green-400" />
        <h2 className="text-4xl font-bold">Achievements</h2>
      </motion.div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-5 flex items-center gap-4 text-gray-300 hover:border-green-400 transition"
          >
            <div className="w-3 h-3 bg-green-400 rotate-45"></div>
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}