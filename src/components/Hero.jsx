
import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 text-left space-y-6">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>CSE Undergraduate • Aspiring Software Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-600 font-medium text-lg">
              Hello, I'm Rafa Jahan
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Exploring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Technology & Innovation
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            I'm a Computer Science undergraduate at{" "}
            <span className="text-gray-900 font-semibold">
              American International University-Bangladesh (AIUB)
            </span>
            , passionate about building web applications, exploring{" "}
            <span className="text-gray-900 font-semibold">
              Artificial Intelligence and Machine Learning
            </span>
            , and developing creative digital solutions. I also have
            experience in digital marketing and entrepreneurship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">

            {/* Resume */}
            <Link
              to="/resume"
              className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl group-hover:rotate-6 transition-transform" />
              <span>View Resume / CV</span>
              <span className="ml-1 px-2 py-0.5 text-[11px] font-semibold bg-white/20 text-white rounded-full tracking-wide">
                CSE
              </span>
            </Link>

            {/* Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-blue-600 px-4 py-3.5 transition"
            >
              Get in Touch →
            </a>
          </div>

          {/* Core Tech Stack */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" />
              Technologies I Work With
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaReact className="text-cyan-500 text-base" />
                React
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaJsSquare className="text-yellow-500 text-base" />
                JavaScript
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiTailwindcss className="text-teal-500 text-base" />
                Tailwind CSS
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiNextdotjs className="text-gray-900 text-base" />
                Next.js
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaGitAlt className="text-orange-500 text-base" />
                Git & GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase */}
        <div className="lg:col-span-5 relative">

          <div className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden text-left">

            {/* Terminal Header */}
            <div className="bg-gray-800/90 px-4 py-3 flex items-center justify-between border-b border-gray-700/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="text-xs text-gray-400 font-mono">
                RafaJahan.jsx
              </span>

              <div className="w-12"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>

              <p className="pl-4">
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-emerald-400">"Rafa Jahan"</span>,
              </p>

              <p className="pl-4">
                <span className="text-gray-400">education:</span>{" "}
                <span className="text-emerald-400">"BSc in CSE"</span>,
              </p>

              <p className="pl-4">
                <span className="text-gray-400">interests:</span> [
              </p>

              <p className="pl-8 text-yellow-300">
                "Web Development",
              </p>

              <p className="pl-8 text-yellow-300">
                "Artificial Intelligence",
              </p>

              <p className="pl-8 text-yellow-300">
                "Machine Learning",
              </p>

              <p className="pl-8 text-yellow-300">
                "Research & Innovation"
              </p>

              <p className="pl-4">],</p>

              <p className="pl-4">
                <span className="text-gray-400">alsoExploring:</span>{" "}
                <span className="text-emerald-400">"Digital Marketing"</span>,
              </p>

              <p className="pl-4">
                <span className="text-gray-400">mindset:</span>{" "}
                <span className="text-emerald-400">"Always Learning"</span>,
              </p>

              <p className="pl-4">
                <span className="text-gray-400">curiosity:</span>{" "}
                <span className="text-blue-400">true</span>
              </p>

              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-500">
                <span className="text-emerald-400">&#10003;</span>{" "}
                Building, learning & exploring
              </div>
            </div>
          </div>

          {/* Floating Project Badge */}
          <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              3+
            </div>

            <div>
              <p className="text-xs font-bold text-gray-900">
                Featured Projects
              </p>
              <p className="text-[11px] text-gray-500">
                Explore my work
              </p>
            </div>
          </div>

          {/* Floating Education Badge */}
          <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <p className="text-xs font-bold text-gray-900">
              CSE Undergraduate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
