export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f17]">
      <div className="px-10 py-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">

        {/* Left Side */}
        <p>
          © {new Date().getFullYear()} Yash Munshi. All rights reserved.
        </p>

        {/* Right Side */}
        <p className="mt-3 md:mt-0">
          Built with React, TypeScript & Python
        </p>

      </div>
    </footer>
  );
}