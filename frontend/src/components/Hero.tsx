import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-grid">

      {/* Soft Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-10"></div>

      {/* Availability Badge */}
      <div className="relative z-10 mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
        <span className="text-green-400 mr-2">●</span>
        Available for opportunities
      </div>

      {/* Main Heading */}
      <h1 className="relative z-10 text-6xl md:text-7xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Yash Munshi
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-6 text-gray-400 text-lg max-w-2xl">
        Electronics & Computer Science student at KIIT with a passion for
        building full-stack applications.
      </p>

      {/* Location */}
      <div className="relative z-10 mt-6 flex items-center gap-2 text-gray-500">
        <MapPin size={16} />
        Dhanbad, Jharkhand
      </div>

      {/* Social Icons */}
      <div className="relative z-10 mt-10 flex gap-6">

        {/* GitHub */}
        <a
          href="https://github.com/YashIsTheBest247/"
          target="_blank"
          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400 transition"
        >
          <Github />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yash-munshi-a0408b337/"
          target="_blank"
          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400 transition"
        >
          <Linkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:yashmunshi27@gmail.com"
          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400 transition"
        >
          <Mail />
        </a>

      </div>

    </section>
  );
}