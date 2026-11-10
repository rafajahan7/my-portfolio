import { Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiOutlineSparkles,
  HiArrowUp,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Screen Only - Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-xl shadow-xs hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        {/* Status Pill & Print Button */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <HiOutlineSparkles className="text-blue-600" />
            Fresher CV • ATS Ready
          </span>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/90 overflow-hidden print:shadow-none print:border-none print:rounded-none">
        {/* Decorative Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 print:hidden"></div>

        <div className="p-8 sm:p-12 print:p-0">
          {/* Header Section */}
          <header className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Your Name
                </h1>
                <p className="text-lg font-bold text-blue-600 mt-1">
                  Fresher Web Developer | Frontend &amp; React.js Developer
                </p>
                <p className="text-sm text-gray-600 mt-1 max-w-xl leading-relaxed">
                  Passionate and fast-learning web developer dedicated to building responsive, accessible, and high-performance web applications with modern frontend technologies.
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available for Immediate Joining
                </span>
                <span className="text-xs text-gray-500">
                  Open for Junior &amp; Entry-Level Roles
                </span>
              </div>
            </div>

            {/* Contact Details Bar */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
              <a
                href="mailto:youremail@example.com"
                className="flex items-center gap-1.5 hover:text-blue-600 transition truncate"
              >
                <HiMail className="text-blue-600 text-base shrink-0" />
                <span className="truncate">youremail@example.com</span>
              </a>

              <a
                href="tel:+8801700000000"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <HiPhone className="text-blue-600 text-base shrink-0" />
                <span>+880 1700-000000</span>
              </a>

              <div className="flex items-center gap-1.5">
                <HiLocationMarker className="text-blue-600 text-base shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaGithub className="text-gray-900 text-base shrink-0" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaLinkedin className="text-blue-600 text-base shrink-0" />
                <span>LinkedIn</span>
              </a>

              <Link
                to="/"
                className="flex items-center gap-1.5 hover:text-blue-600 transition"
              >
                <FaGlobe className="text-indigo-600 text-base shrink-0" />
                <span>Live Portfolio</span>
              </Link>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Enthusiastic and detail-oriented <strong>Fresher Web Developer</strong> with a strong academic foundation in Computer Science and an intense passion for modern frontend engineering. Proficient in <strong>JavaScript (ES6+)</strong>, <strong>React 19</strong>, <strong>Tailwind CSS v4</strong>, and component-driven architecture. Successfully built and deployed multiple real-world web applications demonstrating clean UI/UX, responsive layouts, and seamless RESTful API integration. Agile learner and proactive team player eager to join a collaborative engineering team as an entry-level Junior Frontend Developer to build scalable digital products while expanding full-stack capabilities.
            </p>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 bg-blue-50/40 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Frontend Development:
                </span>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  React.js, JavaScript (ES6+), Tailwind CSS v4, HTML5 (Semantic), CSS3, React Router v7, Context API, Bootstrap 5, Responsive Web Design.
                </p>
              </div>

              <div className="p-3.5 bg-indigo-50/40 rounded-xl border border-indigo-100">
                <span className="font-bold text-indigo-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Backend &amp; Database Basics:
                </span>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Node.js (Basics), Express.js (Basics), MongoDB (CRUD Operations), RESTful APIs, JSON, Firebase (Auth &amp; Firestore).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Tools, Workflow &amp; Deployment:
                </span>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Git, GitHub, VS Code, Vite, npm, Postman, Chrome DevTools, Vercel, Netlify.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1.5 text-xs uppercase tracking-wide">
                  Engineering Practices:
                </span>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Clean Code &amp; Linting (Oxlint), Agile Teamwork.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Featured Demo Projects */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
                Featured Demo Projects
              </span>
              <span className="text-xs font-normal text-gray-500 normal-case print:hidden">
                {projects.length} Showcase Applications
              </span>
            </h2>

            <div className="space-y-4">
              {projects.map((project, idx) => {
                const borderColors = [
                  "border-blue-600",
                  "border-indigo-600",
                  "border-teal-600",
                ];
                const borderColor = borderColors[idx % borderColors.length];

                return (
                  <div
                    key={project.id}
                    className={`border-l-3 ${borderColor} pl-4 py-1 bg-gray-50/50 rounded-r-xl p-3 border-y border-r border-gray-100/80`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          {project.title}
                        </h3>
                        {project.category && (
                          <span className="text-[11px] font-medium text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
                            {project.category}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 print:text-gray-600">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1 text-blue-600"
                          >
                            Live Demo <HiExternalLink className="text-xs" />
                          </a>
                        )}
                        {project.github && (
                          <>
                            <span>•</span>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline flex items-center gap-1 text-gray-700"
                            >
                              GitHub Code <HiExternalLink className="text-xs" />
                            </a>
                          </>
                        )}
                        <span className="print:hidden">•</span>
                        <Link
                          to={`/projects/${project.id}`}
                          className="hover:underline text-indigo-600 print:hidden"
                        >
                          Details &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 my-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                      {project.description}
                    </p>

                    {/* Challenges / Highlights */}
                    {project.challenges && project.challenges.length > 0 && (
                      <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5">
                        {project.challenges.map((challenge, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Practical Experience & Hands-On Training */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Practical Experience &amp; Hands-on Projects
            </h2>

            <div className="space-y-4 text-sm">
              {/* Experience 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-gray-900">
                    Frontend Developer Trainee / Project Intern
                  </h3>
                  <span className="text-xs font-semibold text-blue-600">
                    Jan 2024 – Jun 2024
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Software Development Firm / Tech Lab</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>
                    Built and maintained reusable, accessible React components according to modern Figma designs and specifications.
                  </li>
                  <li>
                    Integrated RESTful APIs, managed asynchronous state, and implemented graceful loading and error boundary states.
                  </li>
                  <li>
                    Collaborated via Git feature-branching, participated in pull request code reviews, and adopted agile sprint practices.
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-gray-900">
                    Independent &amp; Academic Web Projects
                  </h3>
                  <span className="text-xs font-semibold text-blue-600">
                    2023 – Present
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Self-Driven &amp; University Software Lab</span>
                  <span>Remote / Dhaka</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>
                    Engineered 3+ full-featured web applications with React 19, Tailwind CSS v4, Context API, and LocalStorage persistence.
                  </li>
                  <li>
                    Configured continuous deployment pipelines using Vite and hosted live applications on Vercel and Netlify.
                  </li>
                  <li>
                    Actively solved algorithmic problem-solving tasks on freeCodeCamp and LeetCode to strengthen computational reasoning.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Education */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Academic Background
            </h2>

            <div className="space-y-3.5 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                    <FaGraduationCap className="text-blue-600" />
                    B.Sc. in Computer Science &amp; Engineering (CSE)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Your University / College Name • Dhaka, Bangladesh
                  </p>
                </div>
                <div className="text-xs text-gray-500 sm:text-right shrink-0">
                  <span className="font-semibold text-blue-600 block">CGPA: 3.50+ / 4.00</span>
                  <span>2022 – 2026 (Expected)</span>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                <strong className="font-semibold text-gray-700">Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (DBMS), Web Technologies &amp; Engineering, Software Design Patterns.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 pt-2 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                    Higher Secondary Certificate (HSC) – Science
                  </h4>
                  <p className="text-xs text-gray-600">
                    Your College Name • Dhaka, Bangladesh
                  </p>
                </div>
                <div className="text-xs text-gray-500 sm:text-right shrink-0">
                  <span className="font-semibold text-emerald-600 block">GPA: 5.00 / 5.00 (A+)</span>
                  <span>Passing Year: 2021</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Certifications & Training */}
          <section className="mb-7">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Certifications &amp; Training
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  <span>Complete Web Development Bootcamp (MERN)</span>
                </div>
                <p className="text-xs text-blue-600 font-medium mt-0.5">Online Learning Academy (2024)</p>
                <p className="text-xs text-gray-600 mt-1">
                  Built 10+ real-world web apps covering React 19, Tailwind CSS, Node.js, Express, and MongoDB with 60+ graded assignments.
                </p>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <FaCertificate className="text-amber-500" />
                  <span>Responsive Web Design &amp; JS Algorithms</span>
                </div>
                <p className="text-xs text-blue-600 font-medium mt-0.5">freeCodeCamp Verified Certifications (2023 – 2024)</p>
                <p className="text-xs text-gray-600 mt-1">
                  Verified competency in semantic HTML5 markup, modern CSS Grid/Flexbox layouts, and algorithmic JavaScript problem solving.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Soft Skills & Languages */}
          <section className="mb-6">
            <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              Soft Skills &amp; Languages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
              <div>
                <span className="font-bold text-gray-900 block mb-1">
                  Key Professional Competencies:
                </span>
                <p className="leading-relaxed">
                  Analytical Problem Solving, Fast Learner &amp; Adaptability, Team Collaboration, Clear Technical Communication, Time Management.
                </p>
              </div>
              <div>
                <span className="font-bold text-gray-900 block mb-1">
                  Languages:
                </span>
                <p className="leading-relaxed">
                  <strong>Bengali:</strong> Native Proficiency &bull; <strong>English:</strong> Professional Working Proficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Inside Resume Sheet - Little Minimal Sign-Off Footer */}
          <footer className="pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
            <p className="font-medium text-gray-600">
              Fresher Web Developer Portfolio • Open to On-site, Hybrid &amp; Remote Roles
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              References, project repositories &amp; verified certifications available upon request.
            </p>
          </footer>
        </div>
      </div>

      {/* Little Footer Below Resume (Screen Only - Hidden during print) */}
      <footer className="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 print:hidden">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-gray-700">
            Available for Hire • Fresher Web Developer
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hover:text-blue-600 font-medium transition flex items-center gap-1"
          >
            <HiArrowLeft /> Back to Home
          </Link>
          <span>•</span>
          <button
            onClick={handlePrint}
            className="hover:text-blue-600 font-medium transition flex items-center gap-1 cursor-pointer"
          >
            <HiPrinter /> Print Resume
          </button>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="hover:text-blue-600 font-medium transition flex items-center gap-1 cursor-pointer"
          >
            <HiArrowUp /> Back to Top
          </button>
        </div>

        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Fresher Web Developer. Built with React &amp; Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Resume;
