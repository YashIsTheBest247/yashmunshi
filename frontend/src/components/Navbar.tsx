import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-gray-800 px-10 py-5 flex justify-between items-center"
    >
      <h1 className="text-green-400 font-bold text-xl tracking-wider">
        YM
      </h1>

      <div className="space-x-8 text-gray-400 text-sm font-medium">
  <a href="#experience" className="hover:text-green-400 transition">
    Experience
  </a>
  <a href="#projects" className="hover:text-green-400 transition">
    Projects
  </a>
  <a href="#skills" className="hover:text-green-400 transition">
    Skills
  </a>
  <a href="#education" className="hover:text-green-400 transition">
    Education
  </a>
  <a href="#achievements" className="hover:text-green-400 transition">
    Achievements
  </a>
</div>
    </motion.div>
  );
}